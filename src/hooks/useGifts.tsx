import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { GIFTS, Gift } from '@/lib/gifts'

const LS_KEY = 'vini_victoria_reservations'

function getLocalReservations(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '{}')
  } catch {
    return {}
  }
}

function setLocalReservations(r: Record<string, string>) {
  localStorage.setItem(LS_KEY, JSON.stringify(r))
}

export function useGifts() {
  const [reservations, setReservations] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)

  const fetchReservations = useCallback(async () => {
    if (!supabase) {
      setReservations(getLocalReservations())
      setLoading(false)
      return
    }

    try {
      const timeout = new Promise<null>((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 5000)
      )
      const query = supabase.from('reservations').select('gift_id, guest_name')
      const result = await Promise.race([query, timeout]) as Awaited<typeof query>

      if (!result.error && result.data) {
        const map: Record<string, string> = {}
        result.data.forEach((r: { gift_id: string; guest_name: string }) => {
          map[r.gift_id] = r.guest_name
        })
        setReservations(map)
      }
    } catch {
      // fallback to localStorage on timeout or error
      setReservations(getLocalReservations())
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchReservations()

    if (!supabase) return

    const channel = supabase
      .channel('reservations')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'reservations' }, () => {
        fetchReservations()
      })
      .subscribe()

    return () => { supabase!.removeChannel(channel) }
  }, [fetchReservations])

  const reserve = async (giftId: string, guestName: string): Promise<boolean> => {
    if (reservations[giftId]) return false

    if (!supabase) {
      const updated = { ...getLocalReservations(), [giftId]: guestName }
      setLocalReservations(updated)
      setReservations(updated)
      return true
    }

    const { error } = await supabase
      .from('reservations')
      .insert({ gift_id: giftId, guest_name: guestName })

    if (error) return false
    setReservations(prev => ({ ...prev, [giftId]: guestName }))
    return true
  }

  const unreserve = async (giftId: string, guestName: string): Promise<boolean> => {
    if (!supabase) {
      const updated = { ...getLocalReservations() }
      delete updated[giftId]
      setLocalReservations(updated)
      setReservations(updated)
      return true
    }

    const { error } = await supabase
      .from('reservations')
      .delete()
      .eq('gift_id', giftId)
      .eq('guest_name', guestName)

    if (error) return false
    setReservations(prev => {
      const next = { ...prev }
      delete next[giftId]
      return next
    })
    return true
  }

  const gifts: Gift[] = GIFTS.map(g => ({
    ...g,
    reserved_by: reservations[g.id] ?? null,
  }))

  return { gifts, loading, reserve, unreserve }
}

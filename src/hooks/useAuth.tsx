import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { supabase } from '@/lib/supabase'

export interface Guest {
  name: string
  email: string
  phone: string
}

interface AuthContextType {
  user: Guest | null
  loading: boolean
  login: (guest: Guest) => Promise<'ok' | 'phone_mismatch'>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)
const STORAGE_KEY = 'vini_victoria_guest_v2'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Guest | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setUser(JSON.parse(stored))
    } catch { /* ignore */ }
    setLoading(false)
  }, [])

  const login = async (guest: Guest): Promise<'ok' | 'phone_mismatch'> => {
    if (supabase) {
      // Check if this email is already registered
      const { data: existing } = await supabase
        .from('guests')
        .select('name, phone')
        .eq('email', guest.email)
        .single()

      if (existing) {
        // Validate phone matches
        const normalize = (p: string) => p.replace(/\D/g, '')
        if (normalize(existing.phone) !== normalize(guest.phone)) {
          return 'phone_mismatch'
        }
        // Use the original stored name so reservations stay linked
        guest = { ...guest, name: existing.name }
      } else {
        // First time — save to Supabase
        await supabase.from('guests').insert({
          name: guest.name,
          email: guest.email,
          phone: guest.phone,
        })
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(guest))
    setUser(guest)
    return 'ok'
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}

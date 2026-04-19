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
  login: (guest: Guest) => Promise<void>
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

  const login = async (guest: Guest) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(guest))
    setUser(guest)
    if (supabase) {
      await supabase.from('guests').upsert(
        { name: guest.name, email: guest.email, phone: guest.phone },
        { onConflict: 'email' }
      )
    }
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

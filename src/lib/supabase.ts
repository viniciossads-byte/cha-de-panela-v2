import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// Real Supabase URLs end with .supabase.co; keys can be JWT or new sb_publishable_ format
const isConfigured =
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.includes('.supabase.co') &&
  !supabaseUrl.includes('SEU_PROJETO') &&
  (supabaseAnonKey.length > 100 || supabaseAnonKey.startsWith('sb_publishable_'))

export const supabase: SupabaseClient | null = isConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null

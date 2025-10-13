import { createClient } from '@supabase/supabase-js'

export const initSupabaseClient = (url:string, anonKey:string) => createClient(url, anonKey)

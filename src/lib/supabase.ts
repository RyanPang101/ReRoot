import { createClient } from '@supabase/supabase-js'

// In Lovable, Supabase integration provides these automatically
// Check for Lovable's specific environment variable names
let supabaseUrl: string | undefined
let supabaseAnonKey: string | undefined

// Try different possible environment variable names that Lovable might use
const possibleUrls = [
  'VITE_SUPABASE_URL',
  'SUPABASE_URL', 
  'VITE_SUPABASE_PROJECT_URL',
  'SUPABASE_PROJECT_URL'
]

const possibleKeys = [
  'VITE_SUPABASE_ANON_KEY',
  'SUPABASE_ANON_KEY',
  'VITE_SUPABASE_KEY',
  'SUPABASE_KEY',
  'VITE_SUPABASE_ANON',
  'SUPABASE_ANON'
]

// Find the URL
for (const urlVar of possibleUrls) {
  const value = import.meta.env[urlVar]
  if (value) {
    supabaseUrl = value
    break
  }
}

// Find the key
for (const keyVar of possibleKeys) {
  const value = import.meta.env[keyVar]
  if (value) {
    supabaseAnonKey = value
    break
  }
}

// Create the Supabase client or mock
let supabaseClient: any

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found. This might mean:')
  console.warn('1. Supabase integration is not fully configured in Lovable')
  console.warn('2. You need to click the Supabase button in the top right to complete setup')
  console.warn('Available environment variables:', Object.keys(import.meta.env))
  
  // Create a mock client that will show helpful error messages
  supabaseClient = {
    auth: {
      signUp: () => Promise.reject(new Error('Please complete Supabase setup in Lovable')),
      signInWithPassword: () => Promise.reject(new Error('Please complete Supabase setup in Lovable')),
      signOut: () => Promise.reject(new Error('Please complete Supabase setup in Lovable')),
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    }
  }
} else {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = supabaseClient
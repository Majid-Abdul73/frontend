import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nlinsogcciarseezhncm.supabase.co'

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5saW5zb2djY2lhcnNlZXpobmNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NTk4ODQsImV4cCI6MjAzOTMzNTg4NH0.kS_SNk-gkOWhSjBiRhBTIxEXrkYp8uQv9ls4cI0PoA4'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase

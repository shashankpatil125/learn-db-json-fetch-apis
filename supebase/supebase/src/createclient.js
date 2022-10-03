// utils/supabase.ts

import { createClient } from '@supabase/supabase-js'

let supabase_url = "https://cvgnhirqrzhawmubkxxr.supabase.co" 
let supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2Z25oaXJxcnpoYXdtdWJreHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMzMTkzNjQsImV4cCI6MTk3ODg5NTM2NH0.a_ihKFNgZJygM6udS7LG42kIq9i8zKUYtFp4NPPlXGM"

export const supabase = createClient(
    supabase_url,
    supabase_key
  )


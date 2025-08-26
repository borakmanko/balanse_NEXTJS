// src/services/supabase.ts
"use client";

import { createBrowserClient } from '@supabase/ssr'
import { useState } from 'react'

export function useSupabase() {
  const [supabase] = useState(() => 
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  )

  return supabase
}
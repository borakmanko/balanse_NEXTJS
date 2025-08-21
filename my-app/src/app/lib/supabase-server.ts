// lib/supabase-server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from "next/headers";

export function createSupabaseServerClient() {
  const cookieStore = cookies() // ⬅️ sync, no await

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // In RSC, setting cookies can error, handled by middleware
          }
        },
      },
    }
  )
}

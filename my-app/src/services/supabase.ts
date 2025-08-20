// src/services/supabase.ts
import { createClient } from "@supabase/supabase-js";
import { UserProfile } from "@/types/user";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getUserProfile(firebaseUid: string): Promise<UserProfile | null> {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("firebaseUid", firebaseUid)
    .single();

  if (error) {
    console.error("Error fetching profile:", error);
    return null;
  }

  return data as UserProfile;
}

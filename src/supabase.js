import { createClient } from "@supabase/supabase-js";

// https://supabase.com/docs/reference/javascript/initializing
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

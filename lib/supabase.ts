import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/*
  SUPABASE TABLES TO CREATE:
  ─────────────────────────────────────────────────────────────

  services
    id          uuid primary key default gen_random_uuid()
    title       text not null
    description text not null
    icon        text not null         -- emoji or icon name
    order       int  default 0
    created_at  timestamptz default now()

  transformations
    id           uuid primary key default gen_random_uuid()
    name         text not null
    before_image text not null        -- public URL
    after_image  text not null        -- public URL
    duration     text not null        -- e.g. "12 weeks"
    result       text not null        -- e.g. "Lost 15 kg"
    created_at   timestamptz default now()

  posts
    id             uuid primary key default gen_random_uuid()
    title          text not null
    image          text not null      -- public URL
    instagram_url  text not null
    created_at     timestamptz default now()

  ─────────────────────────────────────────────────────────────
  USAGE EXAMPLE (replace static data in data.ts):

  import { supabase } from "@/lib/supabase";

  export async function getPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  }
*/

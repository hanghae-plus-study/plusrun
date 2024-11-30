import { createClient } from "@supabase/supabase-js";

export const DB_URL = process.env.REACT_APP_DB_URL || "";
export const DB_PUBLIC_KEY = process.env.REACT_APP_DB_PUBLIC_KEY || "";
const supabase = createClient(DB_URL, DB_PUBLIC_KEY);

export default supabase;

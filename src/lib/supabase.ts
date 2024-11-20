import { createClient } from "@supabase/supabase-js";

const DB_URL = process.env.REACT_APP_DB_URL || "";
const DB_PUBLIC_KEY = process.env.REACT_APP_DB_PUBLIC_KEY || "";
const supabase = createClient(DB_URL, DB_PUBLIC_KEY);

export default supabase;

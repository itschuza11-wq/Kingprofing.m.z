import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tgxugilckotrpirbaqxn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRneHVnaWxja290cnBpcmJhcXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5Njk4MzYsImV4cCI6MjA3ODU0NTgzNn0.JSEb7GlyWZlvWP8m5QhPCLtj9JnNWlK7NQ_6DoSbkxo"
);

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vpjgxnutcrreojzqewaw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwamd4bnV0Y3JyZW9qenFld2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2OTEwOTUsImV4cCI6MjA3MTI2NzA5NX0.Vki-yyUDkz9k3UuFllxgJetHt6no0M1AxyYqkFh23Ls";

export const supabase = createClient(supabaseUrl, supabaseKey);

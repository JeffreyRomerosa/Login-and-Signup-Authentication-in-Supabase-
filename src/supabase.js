import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qgjgecdlcfolctkuirzy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnamdlY2RsY2ZvbGN0a3Vpcnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNDQ3NjQsImV4cCI6MjA0NDYyMDc2NH0.U0OcnJPdT83g7BST1RcrsmhOwEtbGWfLcMGGF9Wxo-Q';
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Sign up function
export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { data, error };
   }
   // Login function
   export async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
   }
   // Logout function
   export async function logout() {
    const { error } = await supabase.auth.signOut();
    return { error };
   }
import { createClient } from "./server";

const supabase = await createClient();

// Sign Up
export const signUp = async (email: string, password: string) => {
  return await supabase.auth.signUp({ email, password });
};

// Logout
export const signOut = async () => {
  return await supabase.auth.signOut();
};

// Sign In
export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

// Sign In with Google
export const signInWithGoogle = async () => {
  return await supabase.auth.signInWithOAuth({ provider: "google" });
};

//Login With Magic Link
export async function loginWithMagicLink(email: string) {
  return await supabase.auth.signInWithOtp({ email });
}

//Reset Password
export async function resetPassword(email: string) {
  return await supabase.auth.resetPasswordForEmail(email);
}

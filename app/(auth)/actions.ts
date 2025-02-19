"use server";

import { createClient } from "@/supabase/server";

//sign up with email and password
export async function signup(formData: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.email as string,
    password: formData.password as string,
    options: {
      data: {
        full_name: formData.name as string,
        phone: formData.phone as string,
      },
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { user: data.user, session: data.session };
}

//login with email and password
export async function login(formData: { email: string; password: string }) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return { error: error.message };
  }

  return { user: data.user, session: data.session };
}

//logout and remove user
export async function logOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error: error.message };
  }

  return;
}

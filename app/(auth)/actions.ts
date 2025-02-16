"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/supabase/server";

//sign up with email and password
export async function signup(formData: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) {
  const supabase = await createClient();

  const data = {
    name: formData.name as string,
    email: formData.email as string,
    phone: formData.phone as string,
    password: formData.password as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

//login with email and password
export async function login(formData: { email: string; password: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email as string,
    password: formData.password as string,
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
}

//logout and remove user
export async function logOut() {
  const supabase = await createClient();
  console.log("logging out the user...");
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log("error while logout: ", error.message);
  }
  console.log("successfully logged out...");

  revalidatePath("/", "layout");
}

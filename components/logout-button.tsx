"use client";
import { logOut } from "@/app/(auth)/actions";
import React from "react";

export default function LogoutButton() {
  async function removeUser() {
    await logOut();
    console.log("logged Out");
  }
  return (
    <button
      onClick={removeUser}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}

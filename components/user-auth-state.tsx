"use client";

import { useAuth } from "@/lib/auth-context";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { logOut } from "@/app/(auth)/actions";
import { Icons } from "@/components/ui/icons"; // Import spinner icon
import { useQueryClient } from "@tanstack/react-query";

export default function UserAuthState() {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const queryClient = useQueryClient();

  async function removeUser() {
    setIsLoggingOut(true);
    await logOut();
    setIsLoggingOut(false);

    queryClient.invalidateQueries({ queryKey: ["user"] });
    router.refresh();
  }

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger disabled={isLoggingOut}>
            <Avatar className="relative">
              {isLoggingOut && (
                <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center bg-slate-400">
                  <Icons.spinner className="h-4 w-4 animate-spin" />
                </div>
              )}
              <AvatarImage
                src={user?.user_metadata?.avatar_url || ""}
                alt="User Avatar"
              />
              <AvatarFallback>
                {user?.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/dashboard"}>Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={removeUser} disabled={isLoggingOut}>
                {isLoggingOut ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Log Out"
                )}
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={"/login"}>
          <Button disabled={isLoggingOut}>
            {isLoggingOut ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Verify Now"
            )}
          </Button>
        </Link>
      )}
    </div>
  );
}

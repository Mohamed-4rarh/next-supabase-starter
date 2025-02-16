"use client";

import { createClient } from "@/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import type { User } from "@supabase/supabase-js";

const supabase = createClient();

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await supabase.auth.getUser();
      return data?.user ?? null; // ✅ Ensures it's never undefined
    },
    staleTime: 0,
  });

  return (
    <AuthContext.Provider value={{ user: user ?? null, loading: isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
}

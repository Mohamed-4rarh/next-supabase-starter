"use client";

import { useTransition } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { login } from "../actions";
import { useRouter, useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "invalid email format" })
    .min(11),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/\d/, { message: "Password must include at least one number" }),
});

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const redirectTo = searchParams.get("redirect") || "/";

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      const response = await login(values);

      if (response.error) {
        toast.error("Something went wrong with your creditials!");
        return;
      }

      queryClient.invalidateQueries({ queryKey: ["user"] }); //invalidate the user
      router.push(redirectTo);
      toast.success("Welcome Back!");
    });
  }

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@mail.com"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="password"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full mt-8" disabled={isPending}>
            {isPending ? (
              <div className="flex items-center justify-center gap-1">
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                <span>verifing...</span>
              </div>
            ) : (
              "Verify Now"
            )}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>
      <Button variant="outline" asChild>
        <Link href="/register">Create an account</Link>
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Social Login
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline" disabled={isPending}>
          {isPending ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
        <Button variant="outline" disabled={isPending}>
          {isPending ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          GitHub
        </Button>
      </div>
    </div>
  );
}

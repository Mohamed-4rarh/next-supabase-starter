"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signup } from "../actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useRouter } from "next/navigation";

const signupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long" })
    .max(50, { message: "Full name can't exceed 50 characters" }),

  email: z.string().email({ message: "Invalid email format" }),

  phone: z
    .string()
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number can't exceed 15 digits" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must include at least one number" })
    .regex(/[\W_]/, {
      message: "Password must include at least one special character",
    }),
});

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    startTransition(async () => {
      const response = await signup(values);

      if (response.error) {
        toast.error(
          "Something went wrong with your credintials! try again later."
        );
        return;
      }

      toast.success("Just a step away! check your inbox for activation link.");
      router.push("/");
    });
  }
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="grid gap-6">
        <Button variant="outline" type="button" disabled={isPending}>
          <Icons.google className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="my name is..."
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pnone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+123456789"
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
                        type="password"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="mt-8 w-full">
              {isPending ? (
                <div className="flex items-center justify-center gap-1">
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  <span>Becomming a member...</span>
                </div>
              ) : (
                "Become a member"
              )}
            </Button>
          </form>
        </Form>
      </div>
      <div className="text-center">
        <Link href="/login" className="w-full">
          <Button variant="outline" className="w-full">
            Back to Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

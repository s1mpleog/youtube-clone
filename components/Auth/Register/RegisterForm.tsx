"use client";
import * as z from "zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { RegisterUserToDb } from "@/server/actions/register";
import { FormError } from "@/components/FormError";

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid Field" };
    }
    startTransition(() => {
      RegisterUserToDb(values).then((data) => {
        setError(data?.error);
      });
      form.reset();
    });
  };
  return (
    <Form {...form}>
      <form
        className="space-y-6 sm:min-w-[500px] flex-col items-center justify-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  className="h-12"
                  {...field}
                  placeholder="your Name goes here."
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                  disabled={isPending}
                  className="h-12"
                  {...field}
                  type="email"
                  placeholder="your email goes here."
                />
              </FormControl>
              <FormDescription>
                This is your public display email.
              </FormDescription>
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
                <Input
                  disabled={isPending}
                  className="h-12"
                  {...field}
                  type="password"
                  placeholder="your password goes here."
                />
              </FormControl>
              <FormDescription>Make it at least 6 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <Link
          className="text-center flex items-center justify-center"
          href="/login"
        >
          <Button variant="link" size="sm">
            Already have an account?
          </Button>
        </Link>
        <Button disabled={isPending} type="submit" size="lg" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
}

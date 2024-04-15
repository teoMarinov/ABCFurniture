/* eslint-disable @typescript-eslint/no-unused-vars */
import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schemas";

import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import CardWrapper from "./CardWrapper";
import { Button } from "../ui/button";
import axios from "axios";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";

import { useAuth } from "@/context/AuthProvider";

const Login = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const auth = useAuth();

  console.log(auth.user)

  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {

    setError("");
    setSuccess("");

    startTransition(() => {
      axios
        .post("http://localhost:8080/auth/login", values)
        .then(({ data }) => {
          auth.singIn(data.user, data.jwt)
          setSuccess(data.success);
          setError(data.error);
        });
    });
  };

  return (
    <div className="w-full h-[92vh] flex justify-center items-center">
      <CardWrapper
        headerLabel="Welcome back"
        linkTo="/register"
        backButtonLabel="Don't have an account?"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
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
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="****"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default Login;

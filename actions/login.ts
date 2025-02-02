"use server";

import { signIn } from "@/auth";
import { getUserByUsername } from "@/lib";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { RedirectType, redirect } from "next/navigation";
import { z } from "zod";

export const LoginUser = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = await LoginSchema.parseAsync(values);
  const { username, password } = validatedFields;
  const user = await getUserByUsername(username);

  try {
    await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid Credentials. Check your username and password.",
          };
        case "AccessDenied":
          return {
            error:
              "Your email is not verified. A verification code was sent to your email.",
          };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }

  return redirect(user?.first_name ? "/" : "/settings", RedirectType.replace);
};

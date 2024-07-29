"use server";

import {
  PasswordSchema,
  UsernameSchema,
} from "@/schemas";
import { z } from "zod";

export const ForgotPassword = async (
  values: z.infer<typeof UsernameSchema>
) => {
  const validatedFields = await UsernameSchema.parseAsync(values);
  const { username } = validatedFields;
  console.log(username)
  return { data: username };
};

export const ResetPassword = async (values: z.infer<typeof PasswordSchema>) => {
  const validatedFields = await PasswordSchema.parseAsync(values);
  const { password, confirm_password } = validatedFields;
  return { data: { password, confirm_password } };
};

"use server";

import { LoginSchema, PasswordSchema, RegisterSchema, UsernameSchema } from "@/schemas";
import { z } from "zod";

export const LoginUser = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid!!!" };
  } else {
    const { username, password } = validatedFields.data;
    return { data: { username, password } };
  }
};

export const RegisterUser = async(values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid!!!" };
  } else {
    const { username, password, confirm_password } = validatedFields.data;
    return { data: { username, password, confirm_password } };
  }
}

export const ForgotPassword = async (
  values: z.infer<typeof UsernameSchema>
) => {
  const validatedFields = UsernameSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid!!!" };
  } else {
    const { username } = validatedFields.data;
    return { data: username };
  }
};

export const ResetPassword = async (values: z.infer<typeof PasswordSchema>) => {
  const validatedFields = PasswordSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid!!!" };
  } else {
    const { password, confirm_password } = validatedFields.data;
    return { data: { password, confirm_password } };
  }
};

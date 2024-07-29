"use server";

import {
  RegisterSchema,
} from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs"
import { db, getUserByUsername } from "@/lib";

export const RegisterUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = await RegisterSchema.parseAsync(values);
  const { username, password } = validatedFields;
  const hash = await bcrypt.hash(password, 10);

  const existingUser = await getUserByUsername(username);

  if (existingUser) {
    return {
      error: "That username is already taken.",
    };
  } else {
    await db.user.create({
      data: {
        username,
        password: hash,
      },
    });
  }
  return;
};
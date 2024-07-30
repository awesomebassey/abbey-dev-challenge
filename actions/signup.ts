"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db, getUserByUsername } from "@/lib";
import { createApi } from "unsplash-js";

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
    const unsplash = createApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY!,
    });

    const data = await unsplash.photos.getRandom({ count: 1 });
    const bgImage = (data?.response as any)?.[0].urls.regular;

    await db.user.create({
      data: {
        username,
        password: hash,
        bgImage,
      },
    });
  }
  return;
};

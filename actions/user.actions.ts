"use server";

import { db } from "@/lib";
import { UserSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const GetUserById = async (id: string) => {
  try {
    const data = await db.user.findUnique({ where: { id } });
    return { data };
  } catch (error) {
    return { error };
  }
};

export const UpdateProfile = async (values: z.infer<typeof UserSchema>) => {
  const validatedFields = await UserSchema.parseAsync(values);
  const { id } = validatedFields;
  try {
    await db.user.update({
      where: {
        id,
      },
      data: validatedFields,
    });
  } catch (error) {
    return { error };
  }
  revalidatePath("/profile");
  return;
};

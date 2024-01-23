"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/get-user-by-email";
import { RegisterSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const RegisterUserToDb = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }
  const { email, name, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already in use." };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  revalidatePath("/");
};

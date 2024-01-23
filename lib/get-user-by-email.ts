import { db } from "./db";

export const getUserByEmail = async (email: string) => {
  try {
    const existingUser = await db.user.findFirst({
      where: {
        email,
      },
    });
    return existingUser;
  } catch {
    return null;
  }
};

import { db } from "@/lib/db";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/register",
  },
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(db),
  ...authConfig,
});

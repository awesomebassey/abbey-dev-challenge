import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db, getUserById, getUserByUsername } from "@/lib";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: { signIn: "/auth/login", error: "/auth/login" },
  callbacks: {
    async signIn({ user }) {
      const existingUser = await getUserById(user.id!);
      if (!existingUser) return false;
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await getUserById(token.sub);
      if (!user) return token;
      token.username = user.username;

      return token;
    },
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { username, password } = await LoginSchema.parseAsync(
            credentials
          );
          const user = await getUserByUsername(username);

          if (!user) {
            throw new Error("Account does not exist.");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});

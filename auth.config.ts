import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { getUserByUsername } from "@/lib";

export default {
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
} satisfies NextAuthConfig;

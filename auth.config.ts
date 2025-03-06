import Credentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import { CustomError } from "./types/types";
import { prisma } from "./prisma/prisma";
import { compare } from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const email = credentials.email as string | undefined;
          const password = credentials.password as string | undefined;
          if (!email || !password)
            throw new CustomError("Both email and password are required");

          //? Find user in database by email
          const user = await prisma.user.findFirst({
            where: {
              email,
            },
          });
          if (!user || !user.password || !user.email || !user.role) {
            throw new CustomError("Email not found!");
          }

          //? Check password
          const passwordMatched = await compare(password, user.password);
          if (!passwordMatched) throw new CustomError("Invalid password!");

          return {
            name: user.name,
            email: user.email,
            role: user.role,
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          throw new CustomError(
            error.message || "An unexpected error occurred."
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

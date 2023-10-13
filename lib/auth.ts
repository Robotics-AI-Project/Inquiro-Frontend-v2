import { DefaultSession, DefaultUser, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { type DefaultJWT } from "next-auth/jwt";
import { env } from "@/env/server.mjs";
import { whitelistedEmails } from "@/constants/whitelist";

declare module "next-auth" {
  interface Session extends DefaultSession {
    email: string;
  }

  interface User extends DefaultUser {
    username: string; // the user will now have the property
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    username: string; // also my jwt will have the property, I can access this property within the JWT using the getToken() helper
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.email,
          name: profile.email,
          username: profile.email,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      return { ...session, ...token };
    },
    signIn: async ({ user }) => {
      return (
        // Only whitelist on production
        env.NODE_ENV !== "production" ||
        whitelistedEmails.includes(user.email ?? "")
      );
    },
  },
  secret: env.NEXTAUTH_SECRET ?? "",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
};

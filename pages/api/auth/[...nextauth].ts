import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";
import { user } from "../../../src/utils/types";

import CredentialsProvider from "next-auth/providers/credentials";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const authUser: user = {
          id: 1,
          name: "J Smith",
          email: "jsmith@example.com",
          password: "12345",
        };
        return authUser;
      },
    }),
  ];

  return await NextAuth(req, res, {
    providers: providers,
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 Days
    },
    pages: {
      signIn: "/login",
    },
    events: {
      async signIn(message) {
        console.log(message);
      },
      async signOut(message) {
        console.log(message);
      },
      async session(message) {
        console.log(message);
      },
    },
    callbacks: {
      // called after sucessful signin
      jwt: async ({ token, user }) => {
        if (user) token.id = user.id;
        return token;
      }, // called whenever session is checked
      session: async ({ session, token }) => {
        if (token) session.id = token.id;
        return session;
      },
    },
    secret: "SECRET_HERE",
    jwt: {
      secret: "SECRET_HERE",
    },
  });
}

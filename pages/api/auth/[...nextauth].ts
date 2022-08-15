import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userLogin } from "../../../src/apollo/hooks/useLogin";
import jwt_decode from "jwt-decode";
import { ERRORS } from "../../../src/utils/enums";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const { data, error }: any = await userLogin({
            source: credentials["source"],
            password: credentials["password"],
          });
          if (!data && error) {
            throw new Error(error);
          }
          return {
            name: data.login.token,
          };
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  events: {},
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.id = user.id;
      return token;
    },
    signIn: async ({ user }) => {
      const decodeData = jwt_decode(user.name);
      if (decodeData["isMobileVerified"]) {
        return true;
      } else {
        throw new Error(ERRORS.MOBILE_NOT_VERIFIED);
      }
    },
    session: async ({ session }) => {
      const token = session.user.name;
      const _user = jwt_decode(token);
      session.user = _user;
      session.user["token"] = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userLogin } from "./../../../src/apollo/queries/useLogin";
import jwt_decode from "jwt-decode";

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
      },
    }),
  ],
  events: {
    // async signIn(message) {},
    // async signOut(message) {},
    async session(message) {
      console.log(message);
    },
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.id = user.id;
      return token;
    },
    session: async ({ session }) => {
      const token = session.user.name;
      const user = jwt_decode(token);
      session.user = user;
      session.user["token"] = token;
      return session;
    },
  },
});

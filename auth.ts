import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { authConfig } from "./auth.config";
import { dbquery } from "./utils/db";
import bcrypt from "bcrypt";

const getUser = async (email: string) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const values = [email];
  const res = await dbquery(query, values);
  console.log("getuser auth.ts", res);
  return res[0];
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        //for adding inputs on default signin page
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("auth.ts ", "credentials input", credentials); //credentials.get
        const user = await getUser(credentials.email);
        console.log(user, "auth.ts, getuser with", credentials);
        //compare the password here
        const passwordCheck = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        console.log("compared", passwordCheck);
        if (passwordCheck) return user;
        return null; // will throw this CredentialsSignin error type
        //throw new Error("invalid pwd");
        // will throw, error type CallbackRouteError adn the "invalid pwd" error
      },
    }),
  ],
});

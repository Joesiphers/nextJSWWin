/*
*"use server";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
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
/*
class InvalidLoginError extends CredentialsSignin {
  code = "InvalidLoginError check usr or pwd";
}*/

/*export const { handlers,auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GitHub,
    Credentials({
      async authorize(credentials) {
        console.log("email", "credentials", credentials, credentials?.email); //credentials.get
        const user = await getUser(credentials.email);
        console.log(user, "auth.ts, getuser");
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
*/
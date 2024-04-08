'use server'
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { dbquery } from "./utils/db";

import bcrypt from 'bcrypt';

const getUser = async (email: string) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const values = [email];
  const res = await dbquery(query, values);
  return res[0];
};


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("email", "credentials", credentials,credentials?.email); //credentials.get
        const user = await getUser(credentials.email);
        console.log(user, "auth.ts, getuser")
        //compare the password here
        const passwordCheck= await bcrypt.compare (credentials.password,user.password)
        console.log ( "compared", passwordCheck)
        if (passwordCheck)  return user;
        return null
      },
    }),
  ],
});

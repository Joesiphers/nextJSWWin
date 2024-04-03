import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { dbquery } from "./utils/db";

/*const getUser = async (email: string) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const values = [email];
  const res = await dbquery(query, values);
  return res;
};*/

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("email", "credentials", credentials); //credentials.get
        //const user = await getUser(credentials.email);

        return { email: "xxx", password: "yyy" };
      },
    }),
  ],
});

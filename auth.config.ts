import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/pages/contact",
  },
  // basepath: "https://v9qy5n-3000.csb.app",
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  session: {
    maxAge: 60 * 60,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log(" authConfig.ts auth:", auth);
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/pages/admin");
      console.log(
        "authConfig.ts isOnDashboard isLoggedIn",
        isOnDashboard,
        isLoggedIn,
        nextUrl.pathname,
      );
      if (isOnDashboard) {
        if (isLoggedIn) {
          console.log("ist");
          return true;
        }
        //console.log("2nd")
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        //console.log("redirect nextUrl afte login", nextUrl);
        return true; // Response.redirect(new URL("", nextUrl));
      }
      return true;
    },
    jwt({ token, user, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name;
      if (account?.provider === "keycloak") {
        return { ...token, accessToken: account.access_token };
      }
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("session !!", session, token);
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      session.user.id = token.id;
      return session;
    },
    /* async redirect(url) {
      return "https://v9qy5n-3000.csb.app/pages/admin";
    },*/
  },
} satisfies NextAuthConfig;

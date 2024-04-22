import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/pages/admin/nextauth",
  },
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
      );
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        console.log("redirect nextUrl afte login", nextUrl);
        /* return Response.redirect(
          "https://w7csnp-3000.csb.app/pages/admin/edit",
        );
        */
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

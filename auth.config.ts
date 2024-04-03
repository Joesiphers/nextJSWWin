import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/pages/admin/nextauth",
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ] /*/
  session: {
    maxAge: 24 * 60 * 60,
  },*/,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("email", " authConfig", auth);
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/pages/admin");
      console.log("isOnDashboard", isOnDashboard, isLoggedIn, nextUrl.pathname);
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/pages/admin", nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

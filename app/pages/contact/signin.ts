"use server";
import { signIn, signOut } from "@/auth";

export async function signInS() {
       await signIn("google", {
          callbackUrl: "https://localhost:3000",
        });
      };
    

export async function signOutS() {
  return await signOut();
}

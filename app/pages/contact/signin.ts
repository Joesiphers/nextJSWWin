"use server";
import { signIn, signOut } from "@/auth";

export async function signInGithub() {
  await signIn("github", {
    callbackUrl: "https://3jkjdm-3000.csb.app",
  });
}
export async function signInGoogle() {
  await signIn("google", {
    callbackUrl: "https://3jkjdm-3000.csb.app",
  });
}
export async function signOutS() {
  return await signOut();
}

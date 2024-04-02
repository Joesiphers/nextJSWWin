"use server";
import { signIn, signOut } from "@/auth";

export async function signInS(formdata) {
  return await signIn("credentials", formdata);
}

export async function signOutS(formdata) {
  return await signOut();
}

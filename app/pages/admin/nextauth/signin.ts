"use server";
import { signIn, signOut } from "@/auth";

export default async function signInCredentials(formdata) {
  return await signIn("credentials", formdata);
}

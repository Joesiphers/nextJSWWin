"use server";
import { signIn, signOut } from "@/auth";

export async function signInS(formdata) {
  //  return await signIn("credentials", formdata);
  try {
    await signIn("credentials", formdata);
  } catch (error) {
    console.log("login again", error);
    return "invalid pwd/usr";
  }
}

export async function signOutS() {
  return await signOut();
}

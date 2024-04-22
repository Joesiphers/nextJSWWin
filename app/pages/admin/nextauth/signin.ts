"use server";
import { signIn, signOut } from "@/auth";

export async function signInS(formdata) {
  //  return await signIn("credentials", formdata);
  try {
    const result = await signIn("credentials", formdata);
    console.log("signIns result", result);
  } catch (error) {
    console.log("signInS error received", error);
    return "error"; //return the message to login page nextAuth/page
  }
}

export async function signOutS() {
  return await signOut();
}

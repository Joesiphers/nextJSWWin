"use server";
import { signIn } from "@/auth";

export default async function action() {
  return await signIn("github");
}

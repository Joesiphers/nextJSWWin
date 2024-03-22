"use client";
import { signIn, signOut } from "@/auth";
import { useFormState } from "react-dom";
import { useSession } from "next-auth/react";
import sic from "./signin";
export default function Component() {
  const initState = new FormData();
  initState.append("email", "init");
  initState.append("password", "");

  const action = async (prevdata, formdata) => {
    return await sic(formdata);
  };

  /*const action = async (prevdata, formdata) => {
    console.log(prevdata, formdata.get("email"));
    try {
      console.log("start credentials");
      ("use server");
      await signIn("credentials", formdata);
    } catch (error) {
      console.log(error, "credentials error");
    }
  };*/

  const [formdata, formAction] = useFormState(action, null); // [formdata, formAction]
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <form action={formAction}>
        <label>email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => signOut()}>Sign in</button>
    </>
  );
}

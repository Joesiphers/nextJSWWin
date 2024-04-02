"use client";
import { auth } from "@/auth";
import { useFormState } from "react-dom";
//import { useSession } from "next-auth/react";
import { signInS, signOutS } from "./signin";
export default function Component() {
  const initState = new FormData();
  initState.append("email", "init");
  initState.append("password", "");

  const action = async (prevdata, formdata) => {
    return await signInS(formdata);
  };

  const [formdata, formAction] = useFormState(action, null); // [formdata, formAction]
  // const { data: session, status } = useSession();

  console.log("nextaut page.ts");
  if (false) {
    return (
      <div>
        Signed in as {auth.user} <br />
        <button onClick={() => signOutS()}>Sign out</button>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <div>user: {toString(auth.user)}</div>
      <form action={formAction}>
        <label>email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

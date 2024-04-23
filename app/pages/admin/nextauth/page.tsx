"use client";
import { useFormState } from "react-dom";
//import { useSession } from "next-auth/react";
import { signInS, signOutS } from "./signin";
import Notice from './notice'
import { useState } from "react";

export default function Component() {
  const initState = new FormData();
  initState.append("email", "init");
  initState.append("password", "");
  let [content, setContent]=useState("")
  let [isOpen, setIsOpen] = useState(true)

  const action = async (prevdata, formdata) => {
    const res = await signInS(formdata);
    console.log("signIn Nextauth page", res);
    setIsOpen(true)
    setContent(res)
    
   // alert( res); // res from signIn()
    //return res;
  };

  const [formdata, formAction] = useFormState(action, null); // [formdata, formAction]
  // const { data: session, status } = useSession();

  //  console.log("nextauth page.ts");

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
       {content?<Notice title={"signIn "} content={content} isOpen={isOpen} setIsOpen={setIsOpen}/>:null}
    </>
  );
}

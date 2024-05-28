//import styles from "./admin.module.css";

import Link from "next/link";
import Register from "./register";
//import LoginPage from "./login";
import { signOutS } from "./nextauth/signin";
export default async function AdminPage() {
  return (
    <>
      <div className="relative  ">
        navbar
        <div className="  top-0 right-0 "></div>
      </div>
      <div>
        manage/edit <Link href="admin/mg">product</Link>
        <Link href="admin/editproject">
          <p> project</p>
        </Link>
        <br />
        {/*session?.user ?. (
          <div>Signed In as {session.user.email} </div>
        ) : (
          <div>Not sign in</div>
        )*/}
        <form
          action={async () => {
            "use server";
            await signOutS();
          }}
        >
          <button type="submit">SignOut</button>
        </form>
        <br />
        <Register />
      </div>
    </>
  );
}

//import styles from "./admin.module.css";
import Link from "next/link";
import Navbar from "@/app/layouts/navbar/Navbar";
import Register from "./register";
//import LoginPage from "./login";
import { signOutS } from "./nextauth/signin";

export default function AdminPage() {
  //const loggedIn = true;
  return <AdminDash />;
}
export function AdminDash() {
  {
    /** */
  }
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
        <Register />
      </div>
      <form
        action={async () => {
          "use server";
          await signOutS();
        }}
      >
        <button type="submit">SignOut</button>
      </form>
    </>
  );
}

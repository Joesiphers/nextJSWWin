"use client";
import styles from "./admin.module.css";
import Link from "next/link";
import Navbar from "@/app/layouts/navbar/Navbar";
//import LoginPage from "./login";

export default function AdminPage() {
  const loggedIn = true;
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
        <Link href="admin/editmg"></Link>
        <Link href="admin/editproject">
          <p> project</p>
        </Link>
      </div>
    </>
  );
}

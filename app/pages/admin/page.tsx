"use client";
import styles from "./admin.module.css";
import Link from "next/link";
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
      <div className={styles.input}>navbar</div>
      <div>
        manage/edit <Link href="admin/mg">product</Link>
        <Link href="admin/editmg">
          
        </Link>
        <Link href="admin/editproject"
        >
        <p> project</p>


        </Link>
      </div>
    </>
  );
}

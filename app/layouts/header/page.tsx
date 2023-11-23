import Navbar from "../navbar/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed z-50 w-full  bg-slate-100">
      <Link href="/">
        <div className="w-full justify-center relative z-20 m-2 inline-flex">
          <Image src="/logo.jpg" alt="WanWei" width={25} height={25} />
          <h1> GuangZhou WanWei</h1>
        </div>
      </Link>
      <div class="absolute top-0 right-0 w-full block text-zinc=950 z-20 text-center">
        <Navbar />
      </div>
    </div>
  );
}

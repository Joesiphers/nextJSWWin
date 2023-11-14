"use client";
import Link from "next/link";
import Image from "next/image";
import MobiMenu from "./MobileMenu";
import { useState } from "react";
import menuItems from "./menuItems";

export default function Navbar() {
  const bar = (
    <ul class=" gap-6 text-sm md:flex md:items-end">
      {menuItems.map((item) => {
        return (
          <Link href={item.href} key={item.name}>
            <li>{item.name}</li>
          </Link>
        );
      })}
    </ul>
  );
  //const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div class="md:hidden text-right">{<MobiMenu />}</div>
      <container class="hidden md:flex bg-slate-100 px-2   relative top-10 pt-2 justify-end">
        {bar}
      </container>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import MobiMenu from "./MobileMenu";
import menuItems from "./menuItems.ts";

export default function Navbar() {
  const bar = (
    <ul className=" gap-6 text-sm md:flex md:items-end">
      {menuItems.map((item) => {
        return (
          <Link href={item.href} key={item.name}>
            <li className="px-1 rounded border-dot border-2">{item.name}</li>
          </Link>
        );
      })}
    </ul>
  );
  //const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className="md:hidden text-right">{<MobiMenu />}</div>
      <div className="hidden md:flex  px-0.5  relative top-4 pt-2 justify-end">
        {bar}
      </div>
    </>
  );
}

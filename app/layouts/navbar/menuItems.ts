import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  {
    name: "About - us",
    description: "Along understanding ",
    href: "/pages/about",
    icon: ChartPieIcon,
  },
  {
    name: "Products and Services",
    description: "Speak  customers",
    href: "/pages/products",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Tech behide",
    description: "Market leader trust",
    href: "/pages/tech",
    icon: FingerPrintIcon,
  },
  {
    name: "Project Experience",
    description: "Proven fact",
    href: "/pages/projects",
    icon: SquaresPlusIcon,
  },
  {
    name: "Contact",
    description: "Build strategic funnels that will convert",
    href: "/pages/contact",
    icon: ArrowPathIcon,
  },
];
export default menuItems;

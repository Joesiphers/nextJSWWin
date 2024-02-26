import Image from "next/image";
import Link from "next/link";
export interface IPcard {
  id: string;
  name: string;
  title: string;
  imgUrl: string;
}
export default function Procard({
  project,
}: {
  id: string;
  name: string;
  title: string;
  imgUrl: string;
}) {
  const { id, name, title, imgUrl } = project;
  return (
    
}

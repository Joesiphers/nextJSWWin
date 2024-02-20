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
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link
        href={{ pathname: `/pages/projects/projectDetails`, query: { id: id } }}
      >
        <p className={`mb-3 text-2xl font-semibold`}>
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </p>
        <div className="relative ">
          <Image
            alt={name}
            src={imgUrl}
            width={300}
            height={300}
            className="inline"
          />
        </div>
        <p className={`m-0  text-sm  opacity-50`}>{name}</p>
        <p>del</p>
      </Link>
    </div>
  );
}

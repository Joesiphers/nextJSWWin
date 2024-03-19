import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

      <div
        className="relative flex justify-center w-full
"
      >
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert relative"
          src="/image/offshore-platform.jpg"
          alt="wwin Logo"
          fill={true}
          style={{
            objectFit: "contain",
            position: "",
          }}
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/pages/products">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Internal Coatted Pipes{" samples"}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            src="/image/coated-pipe.jpg"
            alt="coated-pipe"
            width={600}
            height={401}
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            epoxy anti-corrosion coat ing for extrem condition.
          </p>
        </Link>

        <Link
          href="/pages/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            More about WWin
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about ePoxy coating and About!
          </p>
        </Link>
        <Link href="/us">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tech Behind - Cemaric Epoxy Coating
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Reports and Certificate
          </p>
        </Link>

        <Link href="pages/projects">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Successful Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sino Off-Shore Petro
          </p>
        </Link>
      </div>
      <Link href="./pages/admin/login">login</Link>
    </main>
  );
}

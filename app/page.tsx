import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* original header as fixed
       <p className="fixed left-0 top-0 flex w-full justify-center 
       border-b border-gray-300 
       bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl 
       dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
       lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WWin PiPe and Coating&nbsp;
          <code className="font-mono font-bold">app </code>
  </p>*/}
        {/* was footer
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center 
        bg-gradient-to-t from-white via-white dark:from-black dark:via-black 
        lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target=""
            rel="noopener noreferrer"
          >
            By{" footter"}
            <Image
              src="/m.svg"
              alt="footer Logo"
              className="dark:invert"
              width={20}
              height={20}
              priority
            />
          </a>
        </div>*/}
      </div>

      <div
        className="relative flex justify-center w-full
"
      >
        {" "}
        {/* before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 
after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 
after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] 
before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 
before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] 
after:dark:opacity-40 before:lg:h-[360px]*/}
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
          <Image src="/image/coated-pipe.jpg" width={600} height={401} />
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
    </main>
  );
}

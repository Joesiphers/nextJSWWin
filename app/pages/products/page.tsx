import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div className="w-5/6 m-auto">
      <div>
        <p className="text-4xl m-2">Pre-Coated Pipes</p>
      </div>
      <Image
        src="/image/coatedpipes.jpg"
        alt="coated pips"
        fill={true}
        style={{
          objectFit: "contain",
          position: "",
        }}
        className=""
      />
      <div className="flex justify-between mt-4 grid grid-cols-4 gap-2">
        {productList.map((product, index) => (
          <div
            className="m-2  shadow border-solid border-2 border-slate-300 rounded-md"
            key={index}
          >
            <Link
              href={{
                pathname: `./products/detail`,
                query: { title: ` ${product.title}` },
              }}
            >
              <div>{product.title}</div>
              <Image
                src={`${product.imgUrl}`}
                alt=""
                width={38}
                height={38}
                className="inline"
              />
              <p>{product.subtitle}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
const productList = [
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
  {
    title: "CP250",
    imgUrl: "/image/m.svg",
    subtitle: "offshore",
  },
];

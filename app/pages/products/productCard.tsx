import Image from "next/image";

export default function ProductCard({ productList }) {
  return (
      {productList.map((product) => (
        <div className="m-2 w-1/6 shadow" key={product.title}>
          <div>{product.title}</div>
          <Image
            src={`${product.imgUrl}`}
            alt=""
            width={38}
            height={38}
            className="inline"
          />
          <p>{product.subtitle}</p>
        </div>
      ))}
  );
}

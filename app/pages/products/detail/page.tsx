import getProduct from "api/getProduct";
export default function Page({ searchParams }) {
  //const res = getProduct(params);
  const result = getProduct({ id: "1" });
  return (
    <div>
      My Postsss:{searchParams.title} {UI(result)}
    </div>
  );
}
const UI = (res) => (
  <>
    <div className="text-4xl p-4">{res.title} </div>
    <div>---- {res.sbuTitle}: </div>

    <div className="text-xl md:grid md:grid-cols-2 m-4 ">
      <div className="">{res.features}</div>
      <div>Image {res.imgUrl}</div>
    </div>
    <div className="text-4xl p-4 w-5/6 m-auto">{res.description}</div>
    <div>{res.productApplication}</div>
  </>
);

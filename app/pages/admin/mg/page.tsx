import { getProduct } from "api/getAPI";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const products = await getProduct("all");
  /** */
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>SubTitle</th>
            <th>image</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            let cells = [];
            for (let property in item) {
              if (property === "imgurl") {
                cells.push(
                  <td className="border-solid border-2 border-indigo-600">
                    <Image
                      src={`${item[property]}`}
                      alt="img"
                      width={38}
                      height={38}
                      className="inline"
                    />
                  </td>,
                );
              } else {
                cells.push(
                  <td className="border-solid border-2 border-indigo-600">
                    {item[property]}
                  </td>,
                );
              }
            }

            return (
              <tr key={index}>
                {cells}
                <td className="border-solid border-2 border-indigo-600">
                  <Link
                    href={{
                      pathname: "./edit",
                      query: { products: JSON.stringify(products) },
                    }}
                  >
                    <button>edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button>Add New</button>
      <button>Delete</button>
    </>
  );
}

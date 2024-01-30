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
              cells.push(
                <td
                  key={item.id}
                  className="border-solid border-2 border-indigo-600"
                >
                  {item[property]}
                </td>,
              );
            }
            return (
              <tr key={item.id}>
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

import useSWR from "swr";
import { dbquery } from "utils/db"; /*import from absolute path need to edit jsconfig.json*/
export async function getProject(id: number) {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { project, error, isLoading } = useSWR(`/api/project/${id}`, fetcher);
  const query = `SELECT * FROM projects WHERE id=$1`;
  const values = [id];
  // console.log("dbquery", dbquery);
  return dbquery(query, values);
}
export async function getProduct(id: number | "all" = "all") {
  // const { project, error, isLoading } = useSWR(`/api/project/${id}`, fetcher);
  const query = `SELECT * FROM products WHERE id=$1`;
  let values;
  if (id == "all") {
    return dbquery(`SELECT * FROM products`);
  } else {
    values = [id];
    // console.log("dbquery", dbquery);
    return dbquery(query, values);
  }
}
export function SwrTry(url: string) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, error } = useSWR(url, fetcher);
  return { data, isLoading, error };
}

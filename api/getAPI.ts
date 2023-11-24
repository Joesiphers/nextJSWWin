import useSWR from "swr";
import { dbquery } from "utils/db";
export function getProject(id: string) {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { project, error, isLoading } = useSWR(`/api/project/${id}`, fetcher);
  console.log("dbquery", dbquery);
  return id;
}

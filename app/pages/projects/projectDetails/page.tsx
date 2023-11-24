import Loading from "app/layouts/loading";
import { getProject } from "api/getAPI";
export default function Page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;
  console.log("id,", id);
  const project = getProject(id);
  console.log(searchParams, "project is", project);
  if (project.isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>Project Case Study id {id}</div>
    </>
  );
}

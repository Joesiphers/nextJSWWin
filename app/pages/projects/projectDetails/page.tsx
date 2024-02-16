import { getProject } from "api/getAPI";

export default async function Page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;
  console.log("id,", id);
  const project = await getProject(parseInt(id));
  const { title, subtitle, description, imgurl } = project[0];
  //console.log(searchParams, "project is", title);

  return (
    <>
      <div>Project Case Study id {id}</div>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{imgurl}</div>
      <div>{description}</div>
    </>
  );
}

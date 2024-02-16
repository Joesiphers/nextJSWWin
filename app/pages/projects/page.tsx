import Link from "next/link";
import ProjectCard from "./projectCard";
const projects = [
  {
    id: 1,
    name: "sinopec",
    title: "sinopec tank coated",
    imgUrl: "/image/sinopec.png",
    description:"....."
  },
];
export default function Projects() {
 // console.log(projects);
  return (
    <div className="">
      <div>
        <p className="text-4xl m-2">
          20 Years with Ceramic Epoxy Coting {projects[0].name}
        </p>
      </div>

      {projects.map((item) => {
        return <ProjectCard project={item} key={item.id} />;
      })}
    </div>
  );
}

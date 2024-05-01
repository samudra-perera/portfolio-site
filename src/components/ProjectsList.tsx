import { Link } from "react-router-dom";
import ProjectData from "../data/projects/projects";

const ProjectsList = () => {
  return (
    <ul className="pb-8 pl-8 list-disc text-slate-100">
      {ProjectData.map((project) => (
        <li className="text-white-100 font-light p-1">
          <Link
            className="text-sky-300 underline pr-1 font-normal"
            key={project.name}
            to={`/${project.url}`}
          >
            {project.name}
          </Link>
          {" - "}
          {project.description}
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;

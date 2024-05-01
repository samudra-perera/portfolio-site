import { Link } from "react-router-dom";
import ProjectData from "../data/projects/projects";

type Props = {};

const ProjectsList = (props: Props) => {
  return (
    <ul className="pb-8">
      {ProjectData.map((project) => (
        <li>
          <Link key={project.name} to={`/${project.url}`}>
            {project.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;

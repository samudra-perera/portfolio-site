import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ProjectData from "../data/projects/projects";

const ProjectsList = () => {
  const { accentTheme } = useTheme();
  return (
    <ul className="pb-8 pl-8">
      {ProjectData.map((project) => (
        <li className="text-black text-xxs font-light">
          <Link
            className={`decoration-accent-${accentTheme} underline pr-1 font-normal`}
            key={project.name}
            to={`/${project.url}`}
          >
            {project.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;

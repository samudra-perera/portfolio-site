import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ProjectData from "../data/projects/projects";

const ProjectsList = () => {
  const { accentTheme } = useTheme();
  return (
    <ul className="pb-8 pl-8 list-disc text-slate-100">
      {ProjectData.map((project) => (
        <li className="text-black text-xs font-light p-1">
          <Link
            className={`decoration-accent-${accentTheme} underline pr-1 font-normal`}
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

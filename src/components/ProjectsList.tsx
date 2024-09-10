import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ProjectData from "../data/projects/projects";

const ProjectsList = () => {
  const { accentTheme } = useTheme();
  return (
    <ul className="pb-8 pl-8">
      {ProjectData.map((project) => (
        <li className="text-black text-xxs font-light pb-1" key={project.name}>
          <Link
            className={`relative inline-block font-normal group transition-colors duration-500`}
            to={`/${project.url}`}
          >
            <span
              className={`relative z-10 underline decoration-accent-${accentTheme} pr-1 group-hover:text-white`}
            >
              {project.name}
            </span>
            <span
              className={`absolute inset-0 bg-accent-${accentTheme} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left`}
            ></span>
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;

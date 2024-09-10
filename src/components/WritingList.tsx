import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import writingData from "../data/writing/writing";

const WritingList = () => {
  const { accentTheme } = useTheme();
  return (
    <ul className="pb-8 pl-8 text-black">
      {writingData.map((topic) => (
        <li
          className="text-black text-xxs font-light flex justify-between pb-1"
          key={topic.name}
        >
          <Link
            className={`relative inline-block font-normal group transition-colors duration-500`}
            to={`/${topic.url}`}
          >
            <span
              className={`relative z-10 underline decoration-accent-${accentTheme} pr-1 group-hover:text-white`}
            >
              {topic.name}
            </span>
            <span
              className={`absolute inset-0 bg-accent-${accentTheme} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left`}
            ></span>
          </Link>{" "}
          {topic.date}
        </li>
      ))}
    </ul>
  );
};

export default WritingList;

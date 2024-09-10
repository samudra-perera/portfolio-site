import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import writingData from "../data/writing/writing";

const WritingList = () => {
  const { accentTheme } = useTheme();
  return (
    <ul className="pb-8 pl-8 text-black">
      {writingData.map((topic) => (
        <li className="text-black text-xxs font-light flex justify-between">
          <Link
            className={`decoration-accent-${accentTheme} underline pr-1 font-normal`}
            to={`${topic.url}`}
          >
            {topic.name}
          </Link>
          {topic.date}
        </li>
      ))}
    </ul>
  );
};

export default WritingList;

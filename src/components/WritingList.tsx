import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import writingData from "../data/writing/writing";

const WritingList = () => {
  const { accentTheme } = useTheme();
  return (
    <ul className="pb-8 pl-8 list-disc text-slate-100">
      {writingData.map((topic) => (
        <li className="text-black text-xs p-1 font-light">
          <Link
            className={`decoration-accent-${accentTheme} underline pr-1 font-normal`}
            to={`${topic.url}`}
          >
            {topic.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default WritingList;

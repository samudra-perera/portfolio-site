import { Link } from "react-router-dom";
import writingData from "../data/writing/writing";

const WritingList = () => {
  return (
    <ul className="pb-8 pl-8 list-disc text-slate-100">
      {writingData.map((topic) => (
        <li className="text-white-100  p-1 font-light">
          <Link
            className="text-sky-300 underline pr-1 font-normal"
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

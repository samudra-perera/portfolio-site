import { Link } from "react-router-dom";

const BackToMainButton = () => {
  return (
    <Link to="/" className="text-black font-semibold text-xs">
      <span>&#8592;</span> Samudra Perera^^
    </Link>
  );
};

export default BackToMainButton;

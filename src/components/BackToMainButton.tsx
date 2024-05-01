import { Link } from "react-router-dom";

const BackToMainButton = () => {
  return (
    <Link to="/" className="text-slate-300 text-sm">
      <span>&#8592;</span> Samudra Perera*
    </Link>
  );
};

export default BackToMainButton;

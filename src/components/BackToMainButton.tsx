import { useNavigate } from "react-router-dom";

const BackToMainButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-black font-semibold text-xs"
    >
      <span>&#8592;</span> Samudra Perera
    </button>
  );
};

export default BackToMainButton;

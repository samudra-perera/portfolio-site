import { useTheme } from "../context/ThemeContext";

const ToggleTheme = () => {
  const { backgroundTheme, setBackgroundTheme, accentTheme, setAccentTheme } =
    useTheme();

  return (
    <div className="p-4">
      <div>
        <p>Select Background Theme:</p>
        <button onClick={() => setBackgroundTheme("light")} className="btn">
          Light
        </button>
        <button onClick={() => setBackgroundTheme("medium")} className="btn">
          Medium
        </button>
        <button onClick={() => setBackgroundTheme("dark")} className="btn">
          Dark
        </button>
      </div>

      <div className="mt-4">
        <p>Select Accent Theme:</p>
        <button onClick={() => setAccentTheme("red")} className="btn">
          Red
        </button>
        <button onClick={() => setAccentTheme("blue")} className="btn">
          Blue
        </button>
        <button onClick={() => setAccentTheme("green")} className="btn">
          Green
        </button>
        <button onClick={() => setAccentTheme("orange")} className="btn">
          Orange
        </button>
        <button onClick={() => setAccentTheme("purple")} className="btn">
          Purple
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;

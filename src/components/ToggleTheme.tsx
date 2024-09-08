import { useTheme } from "../context/ThemeContext";
//TODO: Add function to filter accent theme based on the background theme

const ToggleTheme = () => {
  const { setBackgroundTheme, setAccentTheme } = useTheme();

  // Array of background colors with their respective keys
  const backgroundColors = [
    { name: "Light", color: "light", className: "bg-beige-light" },
    { name: "Medium", color: "medium", className: "bg-beige-medium" },
    { name: "Dark", color: "dark", className: "bg-beige-dark" },
  ];

  // Array of accent colors with their respective keys
  const accentColors = [
    { name: "Red", color: "red", className: "bg-accent-red" },
    { name: "Blue", color: "blue", className: "bg-accent-blue" },
    { name: "Green", color: "green", className: "bg-accent-green" },
    { name: "Orange", color: "orange", className: "bg-accent-orange" },
    { name: "Purple", color: "purple", className: "bg-accent-purple" },
  ];

  const circleButtonClasses =
    "w-6 h-6 rounded-full border border-gray-300 cursor-pointer";

  const accentButtonClasses = "w-4 h-4 rounded-full cursor-pointer";

  return (
    <div className="p-4 text-xs">
      <div>
        <p>Select Background Theme:</p>
        <div className="flex space-x-2 mt-2">
          {backgroundColors.map((bg) => (
            <button
              key={bg.color}
              onClick={() => setBackgroundTheme(bg.color)}
              className={`${circleButtonClasses} ${bg.className}`}
              title={bg.name}
            />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p>Select Accent Theme:</p>
        <div className="flex space-x-2 mt-2 items-center">
          {accentColors.map((accent) => (
            <button
              key={accent.color}
              onClick={() => setAccentTheme(accent.color)}
              className={`${accentButtonClasses} ${accent.className}`}
              title={accent.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToggleTheme;

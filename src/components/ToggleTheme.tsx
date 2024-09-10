import { useTheme } from "../context/ThemeContext";
//TODO: Add function to filter accent theme based on the background theme

const ToggleTheme = () => {
  const { setAccentTheme } = useTheme();

  // Array of accent colors with their respective keys
  const accentColors = [
    { name: "wood", color: "wood", className: "bg-accent-wood" },
    { name: "charcoal", color: "charcoal", className: "bg-accent-charcoal" },
    { name: "Green", color: "green", className: "bg-accent-green" },
    { name: "Orange", color: "orange", className: "bg-accent-orange" },
    {
      name: "rusticBlue",
      color: "rusticBlue",
      className: "bg-accent-rusticBlue",
    },
  ];

  const accentButtonClasses = "w-2 h-2 rounded-full cursor-pointer";

  return (
    <div className="p-1 text-xs">
      <div className="flex space-x-1 items-center">
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
  );
};

export default ToggleTheme;

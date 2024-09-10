import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

// Define the shape of the context
interface ThemeContextProps {
  backgroundTheme: string;
  accentTheme: string;
  setBackgroundTheme: (theme: string) => void;
  setAccentTheme: (theme: string) => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [backgroundTheme, setBackgroundTheme] = useState<string>(
    localStorage.getItem("backgroundTheme") || "dark",
  );
  const [accentTheme, setAccentTheme] = useState<string>(
    localStorage.getItem("accentTheme") || "wood",
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Update background theme class
    root.classList.remove("light", "medium", "dark");
    root.classList.add(backgroundTheme);

    // Save to localStorage
    localStorage.setItem("backgroundTheme", backgroundTheme);
  }, [backgroundTheme]);

  useEffect(() => {
    // Save accent theme to localStorage
    localStorage.setItem("accentTheme", accentTheme);
  }, [accentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        backgroundTheme,
        accentTheme,
        setBackgroundTheme,
        setAccentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };

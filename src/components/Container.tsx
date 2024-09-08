import { useTheme } from "../context/ThemeContext";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  const { backgroundTheme } = useTheme();
  console.log(backgroundTheme);

  return (
    <div
      className={`bg-beige-${backgroundTheme} min-h-screen flex justify-center`}
    >
      <div className="max-w-xl p-4 py-14">{children}</div>
    </div>
  );
};

export default Container;

type Props = {
  children: React.ReactNode;
  theme: string;
};

const Container = ({ children, theme }: Props) => {
  return (
    <div className={`bg-beige-${theme} min-h-screen flex justify-center`}>
      <div className="max-w-3xl p-4 py-14">{children}</div>
    </div>
  );
};

export default Container;

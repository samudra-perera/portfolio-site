type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="bg-zinc-800 h-screen flex justify-center">
      <div className="max-w-3xl p-4 py-14">{children}</div>
    </div>
  );
};

export default Container;

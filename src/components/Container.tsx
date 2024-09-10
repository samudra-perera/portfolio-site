type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-beige-light max-w-xl p-6 py-14 mt-8 mb-8 mr-96 h-fit">
        {children}
      </div>
    </div>
  );
};

export default Container;

import { Link } from "react-router-dom";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-zinc-700 h-screen flex justify-center">
      <div className="max-w-4xl p-4">
        <h2 className="font-bold text-3xl tracking-wide">Samudra Perera</h2>
        <p>
          Software engineer, creative thinker and maker of things. I write about
          my journey in technology,{" "}
          <a
            href="https://www.goodreads.com/user/show/151382546-samudra-perera"
            target="_blank"
          >
            books
          </a>
          , fashion and random things I get interested in. Based in Toronto,
          Canada. <Link to="/about">More about me.</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;

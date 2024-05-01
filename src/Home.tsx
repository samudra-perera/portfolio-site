import { Link } from "react-router-dom";
import Container from "./components/Container";
import ProjectsList from "./components/ProjectsList";
import projectData from "./data/projects/projects";
import WritingList from "./components/WritingList";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container>
      <h2 className="font-bold text-4xl tracking-wide text-slate-50 pb-8">
        Samudra Perera*
      </h2>
      <p className="text-slate-100 pb-8">
        Software engineer, creative thinker and maker of things. I write about
        my journey in technology,{" "}
        <a
          href="https://www.goodreads.com/user/show/151382546-samudra-perera"
          target="_blank"
          className="underline decoration-sky-500 font-semibold"
        >
          books
        </a>
        , fashion and random things I get interested in. Based in Toronto,
        Canada.{" "}
        <Link
          to="/about"
          className="underline decoration-orange-500 font-semibold"
        >
          More about me.
        </Link>
      </p>
      <h3 className="text-slate-100 text-2xl font-bold pb-2">Projects</h3>
      <ProjectsList />
      <h3 className="text-slate-100 text-2xl font-bold pb-2">Writing</h3>
      <WritingList />
    </Container>
  );
};

export default Home;

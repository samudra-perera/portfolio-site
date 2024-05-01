import { Link } from "react-router-dom";
import BackToMainButton from "../components/BackToMainButton";
import Container from "../components/Container";
import resumePDF from "../assets/Samudra_Perera_Resume_2024.pdf";

const About = () => {
  return (
    <Container>
      <BackToMainButton />
      <h2 className="font-bold text-4xl tracking-wide text-slate-50 pb-8 pt-4">
        About Me
      </h2>
      <p className="text-slate-100 pb-4">
        Hi! Im Samudra, and I am a software engineer from Toronto, Canada. I am
        currently studying Systems Design Engineering at the{" "}
        <a
          className="underline decoration-yellow-500 font-semibold"
          href="https://uwaterloo.ca/systems-design-engineering/"
          target="_blank"
        >
          University of Waterloo.
        </a>{" "}
        Before I ventured on this developer journey I was a Civil Engineer for a
        few years.
      </p>
      <p className="text-slate-100 pb-4">
        Outside of my professional life, I love spending time with freinds,
        working out, playing soccer blah blah blah
      </p>
      <p className="text-slate-100 pb-4">
        This is what I am up to{" "}
        <Link to="/now" className="underline text-sky-300">
          now
        </Link>
      </p>
      <h3 className="font-bold text-2xl tracking-wide text-slate-50">
        Contact
      </h3>
      <ul className="text-slate-100 decoration-white list-disc pl-8">
        <li>
          <a
            href="/Samudra_Perera_Resume_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <a href="https://github.com/samudra-perera" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/samudraperera/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/theRealSamudra" target="_blank">
            Twitter
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default About;

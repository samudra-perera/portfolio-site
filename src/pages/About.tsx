import { Link } from "react-router-dom";
import BackToMainButton from "../components/BackToMainButton";
import Container from "../components/Container";

const AboutLinks = [
  { name: "Resume", href: "/Samudra_Resume.pdf" },
  { name: "Github", href: "https://github.com/samudra-perera" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/samudraperera/" },
  { name: "Twitter", href: "https://twitter.com/theRealSamudra" },
];

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
        Before I ventured into the world of tech I was a Civil Engineer for a
        few years working on major infrastruture projects.
      </p>
      <p className="text-slate-100 pb-4">
        Outside of my professional life, I'm passionate about staying active and
        embracing the joys of life with friend and family. I find balance by
        regularly hitting the gym, playing soccer with the boys or going for
        runs.
        <br />
        <br />
        Im also an avid reader, and currently trying to reconnect with my
        creative side through different forms of digital and physical mediums.
      </p>
      <p className="text-slate-100 pb-4">
        See what I am up to{" "}
        <Link to="/now" className="underline text-sky-300">
          now.
        </Link>
      </p>
      <h3 className="font-bold text-2xl tracking-wide text-slate-50 pb-2">
        Contact
      </h3>
      <ul className="text-slate-100 decoration-white list-disc pl-8">
        {AboutLinks.map((link) => {
          return (
            <li className="pb-2">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300"
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default About;

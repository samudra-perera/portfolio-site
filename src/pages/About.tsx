import { Link } from "react-router-dom";
import BackToMainButton from "../components/BackToMainButton";
import Container from "../components/Container";
import { useTheme } from "../context/ThemeContext";

const AboutLinks = [
  { name: "Resume", href: "/Samudra_Resume.pdf" },
  { name: "Github", href: "https://github.com/samudra-perera" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/samudraperera/" },
  { name: "Twitter", href: "https://twitter.com/theRealSamudra" },
];

interface AboutProps {
  children: React.ReactNode;
}

const AboutParagraphs: React.FC<AboutProps> = ({ children }) => {
  return <p className="text-black text-xxs pb-4 leading-tight">{children}</p>;
};

const About = () => {
  const { accentTheme } = useTheme();
  return (
    <Container>
      <BackToMainButton />
      <h2
        className={`font-bold text-2xl tracking-wide text-accent-${accentTheme} pb-4 pt-4`}
      >
        About Me
      </h2>
      <AboutParagraphs>
        {" "}
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
      </AboutParagraphs>{" "}
      <AboutParagraphs>
        Outside of my professional life, I'm passionate about staying active and
        embracing the joys of life with friend and family. I find balance by
        regularly hitting the gym, playing soccer with the boys or going for
        runs.
        <br />
        <br />
        Im also an avid reader, and currently trying to reconnect with my
        creative side through different forms of digital and physical mediums.
      </AboutParagraphs>
      <AboutParagraphs>
        See what I am up to{" "}
        <Link
          to="/now"
          className={`underline decoration-accent-${accentTheme} text-black`}
        >
          now.
        </Link>
      </AboutParagraphs>
      <h3 className="font-bold text-lg tracking-wide pb-2">Contact</h3>
      <ul className="text-black text-xs list-disc pl-8">
        {AboutLinks.map((link) => {
          return (
            <li className="pb-2">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-accent-${accentTheme} text-black`}
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

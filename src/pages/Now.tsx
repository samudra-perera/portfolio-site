import BackToMainButton from "../components/BackToMainButton";
import { useTheme } from "../context/ThemeContext";
import Container from "../components/Container";

const Now = () => {
  const { accentTheme } = useTheme();

  return (
    <Container>
      <BackToMainButton />
      <span className="text-black block pt-4 text-xxs">
        (This page is inspired by the{" "}
        <a
          className={`text-accent-${accentTheme} underline`}
          href="https://nownownow.com/about"
          target="_blank"
        >
          now
        </a>{" "}
        initiative)
      </span>
      <h2
        className={`font-bold text-xl tracking-wide text-accent-${accentTheme} pb-2 pt-2`}
      >
        Now
      </h2>
      <h3 className={`text-accent-${accentTheme} font-bold pb-2`}>Work</h3>
      <p className="text-black pb-2 text-xxs leading-tight">
        Currently working at{" "}
        <a
          href="https://spingle.ai/"
          target="_blank"
          className="text-sky-300 underline"
        >
          Spingle.ai
        </a>{" "}
        as a Software Enginering Intern for the summer.
      </p>
      <h3 className={`text-accent-${accentTheme} font-bold pb-1`}>Life</h3>
      <p className="text-black pb-2 text-xxs leading-tight">
        Grateful to be able to live at home while I am back in school. After
        graduation lets see where the wind takes me.
      </p>
      <h3 className={`text-accent-${accentTheme} font-bold pb-1`}>Doing</h3>
      <p className="text-black pb-2 text-xxs leading-tight">
        Focussing on my health and mental wellbeing by doing the following.
      </p>
      <ul className="list-disc pl-8 text-black text-xxs pb-4">
        <li className="pb-2">Daily Physical Activiy</li>
        <li className="pb-2">Writing</li>
        <li className="pb-2">Spending time with loved ones</li>
      </ul>
      <span className={`text-accent-${accentTheme} font-semibold text-xxs`}>
        Last Updated: May 2024
      </span>
    </Container>
  );
};

export default Now;

import BackToMainButton from "../components/BackToMainButton";
import Container from "../components/Container";

const Now = () => {
  return (
    <Container>
      <BackToMainButton />
      <span className="text-slate-400 block pt-4 text-sm">
        (This page is inspired by the{" "}
        <a
          className="text-sky-300 underline"
          href="https://nownownow.com/about"
          target="_blank"
        >
          now
        </a>{" "}
        initiative)
      </span>
      <h2 className="font-bold text-4xl tracking-wide text-slate-50 pb-8 pt-4">
        Now
      </h2>
      <h3 className="text-slate-100 text-2xl font-bold pb-2">Work</h3>
      <p className="text-slate-100 pb-6">
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
      <h3 className="text-slate-100 text-2xl font-bold pb-2">Life</h3>
      <p className="text-slate-100 pb-6">
        Grateful to be able to live at home while I am back in school. After
        graduation lets see where the wind takes me.
      </p>
      <h3 className="text-slate-100 text-2xl font-bold pb-2">Doing</h3>
      <p className="text-slate-100 pb-2">
        Focussing on my health and mental wellbeing by doing the following.
      </p>
      <ul className="list-disc pl-8 text-slate-100 pb-8">
        <li className="pb-2">Daily Physical Activiy</li>
        <li className="pb-2">Writing</li>
        <li className="pb-2">Spending time with loved ones</li>
      </ul>
      <span className="text-slate-400 text-xs">Last Updated: May 2024</span>
    </Container>
  );
};

export default Now;

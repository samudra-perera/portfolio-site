import BackToMainButton from "../components/BackToMainButton";
import Container from "../components/Container";

const ErrorPage = () => {
  return (
    <Container>
      <BackToMainButton />
      <h1 className="text-3xl text-slate-100 font-bold my-6">Error 404</h1>
      <p className="text-slate-100 pb-2">
        Oops! It looks like someone let the intern code again. Something went
        wrong so Im gonna send my best coding detective out to resolve this
        mystery A S A P!
      </p>
    </Container>
  );
};

export default ErrorPage;

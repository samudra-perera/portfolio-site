import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import BackToMainButton from "../components/BackToMainButton";

const MarkdownComponent = () => {
  const { markdown } = useParams();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const markdownURL = `/markdown/${markdown}.md`;

    fetch(markdownURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch md file");
        }
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => {
        console.error("Error fetching markdown", err);
        setContent("Failed to load the content");
      });
  }, [markdown]);

  return (
    <Container>
      <BackToMainButton />
      <Markdown
        options={{
          overrides: {
            h1: {
              component: "h1",
              props: {
                className: "text-3xl text-slate-100 font-bold my-6",
              },
            },
            h2: {
              component: "h2",
              props: {
                className: "text-2xl text-slate-100 font-bold my-4",
              },
            },
            h3: {
              component: "h3",
              props: {
                className: "text-xl text-slate-100 font-bold my-4",
              },
            },
            p: {
              component: "p",
              props: {
                className: "text-slate-100 font-light",
              },
            },
            a: {
              component: "a",
              props: {
                className: "text-sky-300 underline pt-4",
                target: "_blank",
              },
            },
            img: {
              component: "img",
              props: {
                className: " w-3/4 rounded-sm my-4",
              },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </Container>
  );
};

export default MarkdownComponent;

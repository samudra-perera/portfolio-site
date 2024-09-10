import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Container from "../components/Container";
import Markdown from "markdown-to-jsx";
import BackToMainButton from "../components/BackToMainButton";
import SyntaxHighlightedCode from "../utils/SyntaxHighligher";

const MarkdownComponent = () => {
  const { markdown } = useParams();
  const { accentTheme } = useTheme();
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

  const h1Styles = `text-lg black font-bold my-2`;
  const h2Styles = `text-md black font-bold`;
  const h3Styles = `text-sm black font-bold`;
  const h4Styles = `text-xs black font-bold`;
  const pStyles = `text-black font-light my-1 text-xxs pb-1 leading-tight`;
  const aStyles = `text-black text-xxs font-semibold decoration-accent-${accentTheme} underline pt-2 mb-2`;
  const spanStyles = `text-accent-${accentTheme} text-xxs font-bold`;

  return (
    <Container>
      <BackToMainButton />
      <Markdown
        options={{
          overrides: {
            h1: {
              component: "h1",
              props: {
                className: h1Styles,
              },
            },
            h2: {
              component: "h2",
              props: {
                className: h2Styles,
              },
            },
            h3: {
              component: "h3",
              props: {
                className: h3Styles,
              },
            },
            h4: {
              component: "h4",
              props: {
                className: h4Styles,
              },
            },
            p: {
              component: "p",
              props: {
                className: pStyles,
              },
            },
            a: {
              component: "a",
              props: {
                className: aStyles,
                target: "_blank",
              },
            },
            img: {
              component: "img",
              props: {
                className: " w-3/4 rounded-sm my-2",
              },
            },
            code: {
              component: SyntaxHighlightedCode,
              props: {
                className: "text-slate-100",
              },
            },
            pre: {
              component: "pre",
              props: {
                className: "text-xs my-6 whitespace-pre-wrap",
              },
            },
            span: {
              component: "span",
              props: {
                className: spanStyles,
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

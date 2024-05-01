import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

type Props = {};

const MarkdownComponent = (props: Props) => {
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
      <Markdown>{content}</Markdown>
    </Container>
  );
};

export default MarkdownComponent;

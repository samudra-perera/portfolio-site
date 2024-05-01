import ReactMarkdown from "react-markdown";

type MarkDownProps = {
  markdown: string;
};

const MarkDownRenderer = ({ markdown }: MarkDownProps) => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkDownRenderer;

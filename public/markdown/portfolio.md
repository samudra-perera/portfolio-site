# Portfolio Site

I finally got around to rebuilding my portfolio site. My first time around, did not go as well as I hoped (2 years ago). I was heavily inspired by Rory Flint's simple website design for my own. It was straight to the point and everything I wanted out of my own portfolio site.

## Tech Stack

This site was built using TypeScript, React, and Vite with Tailwind used to style the frontend.

## Something Interesting

All the Projects and Writing pages are written in markdown then rendered into HTML with tailwind styles by the Markdown.tsx component. This was done using [markdown-to-jsx](https://markdown-to-jsx.quantizor.dev/).

```javascript
const MarkdownComponent = () => {
  const { markdown } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const markdownURL = `/link to markdown`;

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
```

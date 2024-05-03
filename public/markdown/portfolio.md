# Portfolio Site

I finally got around to rebuilding my portfolio site. The first time around, did not go as well as I hoped. You can take a look at that [repo here](https://github.com/samudra-perera/React-Portfolio-Site/tree/main/portfolio-site) (2 years ago). I was heavily inspired by Rory Flint's simple website design for my own. It was straight to the point and everything I wanted out of my own portfolio site.

## Tech Stack

This site was built using TypeScript, React, and Vite with Tailwind used for styling.

## Something Interesting

All the "Projects" and "Writing" pages are written in markdown then rendered into HTML with tailwind styles by the Markdown.tsx component. This was done using [markdown-to-jsx](https://markdown-to-jsx.quantizor.dev/). Below is a bare bones version of how this was implemented.

```js
const MarkdownComponent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const markdownURL = `/{link to markdown}`;

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
  });

  return (
    <Container>
      <Markdown>{content}</Markdown>
    </Container>
  );
};
```

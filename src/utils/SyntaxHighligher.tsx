import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";
import "highlight.js/lib/languages/javascript";

declare global {
  interface Window {
    hljs: typeof hljs;
  }
}
window.hljs = hljs;

interface SyntaxHighlightedCodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

function SyntaxHighlightedCode({
  className,
  children,
  ...rest
}: SyntaxHighlightedCodeProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && className?.includes("lang-") && window.hljs) {
      window.hljs.highlightElement(ref.current);
    }
  }, [className, children]);

  return (
    <code ref={ref} className={className} {...rest}>
      {children}
    </code>
  );
}

export default SyntaxHighlightedCode;

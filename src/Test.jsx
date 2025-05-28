import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownListWithCopy = () => {
  const markdownText = `
- First item
- Second item
- Third item with **bold** text
- Fourth item with [link](https://example.com)
`;

  const ulRef = useRef(null);

  const handleCopy = () => {
    if (!ulRef.current) return;
    // This copies only the rendered text (like "link" for [link](...))
    const textToCopy = ulRef.current.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied rendered text!");
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <ul
        ref={ulRef}
        style={{
          maxHeight: 200,
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: 10,
          backgroundColor: "#f9f9f9",
          listStyleType: "disc",
          whiteSpace: "pre-wrap",
        }}
      >
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </ul>
      <button onClick={handleCopy} style={{ marginTop: 10 }}>
        Copy All Rendered Text
      </button>
    </div>
  );
};

export default MarkdownListWithCopy;

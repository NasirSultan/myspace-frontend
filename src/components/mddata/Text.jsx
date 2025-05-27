import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import markdownContent from './Text.md?raw';

export default function MarkdownDisplay() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const replacedContent = markdownContent.replace(
      /'([\w]+(?:\s[\w]+)?)([.,!?:;])?'/g,
      (_, text, punctuation = '') => `**${text}**${punctuation}`
    );
    setContent(replacedContent);
  }, []);

  return (
    <div
      className="max-w-5xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans leading-relaxed
                 sm:max-w-3xl sm:p-6 sm:text-base
                 xs:max-w-full xs:p-4 xs:text-sm"
    >
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="border-b-2 border-purple-700 pb-1 mt-6 font-extrabold
                         text-5xl lg:text-6xl md:text-4xl sm:text-3xl xs:text-2xl text-purple-700"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-purple-700 mt-5 text-2xl font-semibold" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h1 className="text-black mt-4 font-bold text-3xl" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="my-4 text-lg sm:text-base xs:text-sm" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-none p-0 mb-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-4" {...props} />
          ),
          li: ({ node, children, ...props }) => (
            <li className="flex items-center space-x-2 mb-2" {...props}>
              <span className="inline-block w-2 h-2 bg-purple-700 rounded-full flex-shrink-0" />
              <span>{children}</span>
            </li>
          ),
          code({ node, inline, className, children, ...props }) {
            if (inline) {
              return (
                <code
                  className="bg-gray-200 rounded px-1.5 py-0.5 text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            const match = /language-(\w+)/.exec(className || '');
            return (
              <SyntaxHighlighter
                style={atomDark}
                language={match ? match[1] : ''}
                PreTag="div"
                showLineNumbers
                wrapLines
                customStyle={{
                  borderRadius: 12,
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem',
                  maxHeight: '400px',
                  overflowY: 'auto',
                  scrollbarWidth: 'thin',
                }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          },
          a: ({ node, ...props }) => (
            <a
              className="text-purple-700 underline hover:text-purple-900 transition-colors cursor-pointer"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-purple-700 pl-4 italic text-gray-600 bg-purple-50 rounded mb-4"
              {...props}
            />
          ),
          hr: ({ node, ...props }) => (
            <hr className="border-gray-300 my-8" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Info, Search } from 'lucide-react';

export default function MarkdownDisplay() {
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState('first'); // Track which markdown to show
  const [searchTerm, setSearchTerm] = useState('');

  // Article metadata for buttons
  const articles = [
    {
      key: 'first',
      title: 'Tailwind CSS',
      description: 'Install Tailwind CSS in a React + Vite Project',
      markdown: markdownContent,
    },
    {
      key: 'second',
      title: 'Article Title',
      description: 'Click to read the full article Click to read the full article',
      markdown: markdownContent2,
    },
  ];

  // Function to process and set markdown content with bold formatting
  function loadContent(md) {
    const replacedContent = md.replace(
      /'([\w]+(?:\s[\w]+)?)([.,!?:;])?'/g,
      (_, text, punctuation = '') => `**${text}**${punctuation}`
    );
    setContent(replacedContent);
  }

  // Load content based on currentContent state
  useEffect(() => {
    const article = articles.find(a => a.key === currentContent);
    if (article) {
      loadContent(article.markdown);
    }
  }, [currentContent]);

  // Filter articles by search term on title or description (case-insensitive)
  const filteredArticles = articles.filter(({ title, description }) => {
    const search = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(search) ||
      description.toLowerCase().includes(search)
    );
  });

  return (
    <>
      {/* Search Input */}
      {!visible && (
       
<div className="fixed left-1/2 transform -translate-x-1/2 z-50 w-3/4 md:w-1/2 p-2">
  <div className="relative">
    <input
      type="text"
      placeholder="Search articles..."
      className="w-full pr-10 px-4 py-2 rounded-lg border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Search
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-700 pointer-events-none"
      size={20}
    />
  </div>
</div>
      )}

      {/* Top buttons when article is hidden */}
      {!visible && (
        <div className="fixed left-1/2 transform -translate-x-1/2 z-50 flex flex-col space-y-4 w-3/4 md:w-1/2 mt-16">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(({ key, title, description }) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentContent(key);
                  setVisible(true);
                }}
                className="w-full cursor-pointer h-24 bg-purple-800 text-white font-semibold px-2 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-purple-900 transition-colors flex items-center"
              >
                {/* Icon Section - 25% */}
                <div className="w-1/4 flex justify-center">
                  <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Text Section - 75% */}
                <div className="w-3/4 flex flex-col items-start justify-center text-left pl-3 sm:pl-4">
                  <h3 className="text-base sm:text-lg font-semibold truncate w-full">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal">{description}</p>
                </div>
              </button>
            ))
          ) : (
            <p className="text-center text-purple-700 mt-10 font-semibold">
              No articles match your search.
            </p>
          )}
        </div>
      )}

      {/* Markdown content */}
      <div
        className={`max-w-5xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans leading-relaxed
                    sm:max-w-3xl sm:p-6 sm:text-base
                    xs:max-w-full xs:p-4 xs:text-sm
                    transition-all duration-300 ${visible ? 'block' : 'hidden'}`}
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

      {/* Bottom buttons (when visible) */}
      {visible && (
        <div className="fixed md:bottom-15 md:right-20 z-50 flex justify-center bottom-35 right-4">
          <button
            onClick={() => setVisible(false)}
            className="w-12 h-12 bg-purple-800 text-white font-semibold rounded-full shadow-lg hover:bg-purple-900 transition-colors flex items-center justify-center text-sm cursor-pointer"
          >
            ←
          </button>
        </div>
      )}
    </>
  );
}

// src/components/Homepage.jsx
import React from "react";

export default function Homepage() {
  return (
 <main className="text-black flex flex-col items-center justify-center px-6 py-20 overflow-y-auto hide-scrollbar ">

      {/* Welcome Section */}
      <section className="max-w-3xl space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg ">
          Welcome to My World
        </h1>

        {/* Left aligned name section */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg text-purple-900 text-left">
          Hi, I'm <span className="underline decoration-purple-400">Nasir Sultan</span> — Freelancer, Full Stack Developer & Writer
        </div>

        {/* Left aligned welcome text */}
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 text-left">
          <p className="mb-4">
            Crafting innovative solutions, designing elegant experiences, and sharing valuable insights through blogs and detailed documentation.
          </p>
          <p>
            Whether you're looking for a skilled freelancer, a showcase of my portfolio, or thoughtful articles, you've come to the right place. Join me on this journey where technology meets creativity and knowledge empowers growth.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mt-6 justify-center">
          <a
            href="/Contact"
            className="w-full md:w-auto lg:w-64 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-purple-100 transition text-center text-sm md:text-base"
            aria-label="Contact Me"
          >
            Contact Me
          </a>
          <a
            href="/information"
            className="w-full md:w-auto lg:w-64 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-purple-100 transition text-center text-sm md:text-base"
            aria-label="Information"
          >
            Information
          </a>
        </div>
      </section>
    </main>
  );
}

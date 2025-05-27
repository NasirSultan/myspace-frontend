// src/components/Homepage.jsx
import React from "react";

export default function Homepage() {
  return (
 <main className="text-black flex flex-col items-center justify-center px-6 py-20 lg:mt-40 md:mt-40 ">

      {/* Welcome Section */}
      <section className="max-w-3xl space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg ">
        Welcome to My Space
        </h1>

        {/* Left aligned name section */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg text-purple-900 text-left">
         Hi, I’m <span className="underline decoration-purple-400 font-semibold">Nasir Sultan</span> — a Freelance Full Stack Developer, Creative Writer, and Problem Solver.
        </div>

        {/* Left aligned welcome text */}
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 text-left">
  <p className="mb-4">
    Building robust full-stack applications, crafting seamless user experiences, and sharing technical insights through in-depth blogs and comprehensive documentation.
  </p>
  <p>
    Whether you’re seeking a dedicated freelancer, exploring my portfolio, or diving into practical development articles, you’re in the right place. Let’s embark on a journey where cutting-edge technology meets creativity, and knowledge drives innovation.
  </p>
</div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mt-6 justify-center">
          <a
            href="/Contact"
            className="w-full md:w-auto lg:w-64 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg shadow-xl hover:bg-purple-100 transition text-center text-sm md:text-base"
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

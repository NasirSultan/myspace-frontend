// src/components/Homepage.jsx
import React from "react"
import { useEffect, useRef } from 'react';

export default function Homepage() {
  const projectRef = useRef(null);
    useEffect(() => {
      const countUp = (element, target, duration = 1400) => {
        let start = 0;
        const increment = target / (duration / 50);
  
        const interval = setInterval(() => {
          start += increment;
          if (start >= target) {
            element.textContent = `${target}+`;
            clearInterval(interval);
          } else {
            element.textContent = `${Math.floor(start)}+`;
          }
        }, 50);
      };
  
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target.querySelector('#project-count');
              countUp(el, 7);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
  
      if (projectRef.current) {
        observer.observe(projectRef.current);
      }
    }, []);
  return (
 <main className="text-black flex flex-col items-center justify-center px-6 py-20   ">

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
  Building robust full-stack applications, crafting seamless user experiences, sharing technical insights through in-depth blogs and comprehensive documentation, and ensuring web applications are secure and protected against cyber attacks.
</p>

  <p>
    Whether you’re seeking a dedicated freelancer, exploring my portfolio, or diving into practical development articles, you’re in the right place. Let’s embark on a journey where cutting-edge technology meets creativity, and knowledge drives innovation.
  </p>
</div>


<div className="flex flex-col md:flex-row justify-center items-center gap-12">
  {/* Projects Completed */}
  <div
    className="flex items-center bg-purple-300 rounded-2xl shadow-xl p-4 md:p-5 w-full md:w-1/2 max-w-md"
    ref={projectRef}
  >
    <div className="text-green-900">
      <svg
        className="w-20 md:w-24 h-20 md:h-24 mr-5 md:mr-6"
        fill="currentColor"
        viewBox="0 0 384 512"
      >
        <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 
          26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 
          40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 
          231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 
          285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 
          .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"/>
      </svg>
    </div>
    <div>
      <h3 id="project-count" className="text-4xl font-extrabold text-white">0</h3>
      <p className="text-sm md:text-sm whitespace-nowrap text-purple-900 mt-1">Projects Completed</p>
    </div>
  </div>

  {/* Years of Experience */}
  <div className="flex items-center bg-purple-300 rounded-2xl shadow-xl p-6 md:p-5 w-full md:w-1/2 max-w-md">
    <div className="text-black-900">
      <svg
        className="w-20 md:w-24 h-20 md:h-24 mr-5 md:mr-6"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 
          012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 
          012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 
          011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 
          24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold text-white">3+ Year</h3>
      <p className="text-sm md:text-sm whitespace-nowrap text-purple-900 mt-1">Years of Experience</p>
    </div>
  </div>
</div>


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

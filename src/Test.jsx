import React from "react";

const ExperienceSection = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h2>

      {/* 1. Present */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">1. Present</h3>

        {/* Software House */}
        <div className="mb-4 ml-6">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            ABC Tech Solutions, New York, USA
          </h4>
          <p className="italic text-sm text-gray-600 dark:text-gray-400 mb-3">June 2021 – Present</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Developed responsive web applications using React.js and Redux, improving user engagement by 25%.</li>
            <li>Collaborated with backend developers to integrate RESTful APIs and enhance application performance.</li>
            <li>Implemented unit and integration tests with Jest and React Testing Library, increasing code coverage by 40%.</li>
            <li>Participated in Agile ceremonies including sprint planning and daily stand-ups.</li>
            <li>Technologies used: React.js, Redux, JavaScript, HTML5, CSS3, REST API, Git.</li>
          </ul>
        </div>

        {/* Freelance */}
        <div className="ml-6">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Freelance</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Building client projects and consulting on full stack web development.
          </p>
        </div>
      </div>

      {/* 2. Internship */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">2. Internship</h3>
        <p className="ml-6 text-gray-700 dark:text-gray-300">
          Completed internship at XYZ company focusing on backend development and API integrations.
        </p>
      </div>

      {/* 3. Self */}
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">3. Self</h3>
        <p className="ml-6 text-gray-700 dark:text-gray-300">
          Self-learning projects and contributions to open source, experimenting with new technologies.
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;

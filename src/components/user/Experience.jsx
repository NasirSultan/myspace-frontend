import React from "react";

const ExperienceSection = () => {
    return (
        <section className="max-w-4xl mx-auto p-6">
           <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 border-b pb-2 text-black">
  Full Stack Development Experience
</h2>
<p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2">
  I have worked on multiple end-to-end web applications, handling both client and server-side development. My experience includes building user-friendly interfaces, managing backend logic, and ensuring responsive, seamless performance across devices.
</p>
<p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed">
  I'm also exploring the field of cybersecurity, focusing on building secure applications and understanding common vulnerabilities to improve system resilience.
</p>


            <div className="mb-10">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Present</h3>


                {/* Container with more left padding */}
                <div className="ml-12 space-y-8">

                    {/* i) Software House */}
                    <div>
                        <h4 className="text-xl font-bold text-black">Software House</h4>

                        <p className="text-sm text-gray-900 font-bold">Frontend Developer – ABC Tech Solutions, New York, USA</p>
                        <p className="text-sm text-gray-600 mb-4">June 2021 – Present</p>

                        <div className="space-y-2 text-gray-800 ml-6">
                            <i>Developed responsive web apps using <strong>React.js</strong> & <strong>Redux</strong>, increasing user engagement by 25%.</i><br />
                            <i>Integrated <strong>REST APIs</strong> with backend team for optimized performance.</i><br />
                            <i>Implemented testing using <strong>Jest</strong> and <strong>React Testing Library</strong>, boosting code coverage by 40%.</i><br />
                            <i>Engaged in Agile ceremonies like sprint planning & stand-ups.</i>
                        </div>

                        <div className="mt-4">
                            <span className="text-sm font-semibold text-black-800 font-bold">Technologies used:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["React.js", "Redux", "JavaScript", "HTML5", "CSS3", "REST API", "Git"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ii) Freelance */}
                    <div>
                        <h4 className="text-xl font-bold text-black">Freelance</h4>
                        <p className="text-sm text-gray-900 font-bold">Frontend Developer – Remote</p>
                        <p className="text-sm text-gray-600 mb-4">June 2021 – Present</p>

                        <div className="space-y-2 text-gray-800 ml-6">
                            <i>Delivered responsive UIs using <strong>React.js</strong> & <strong>Redux</strong>.</i><br />
                            <i>Worked directly with clients for rapid prototyping & deployment.</i><br />
                            <i>Set up CI/CD and Git workflows for small-scale freelance projects.</i><br />
                            <i>Provided consultation on performance & SEO improvements.</i>
                        </div>

                        <div className="mt-4">
                            <span className="text-sm font-semibold text-black-800 font-bold">Technologies used:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["React.js", "Redux", "JavaScript", "HTML5", "CSS3", "REST API", "Git"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Internship */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Internship</h3>
                <h4 className="text-xl font-bold text-black">ABC Tech Solutions, New York, USA</h4>
                <p className="text-sm text-gray-600 mb-4">June 2021 – Sept 2021</p>

                <div className="space-y-2 text-gray-800 ml-4">
                    <i>Built reusable components using <strong>React</strong>.</i><br />
                    <i>Worked in a team to integrate <strong>REST APIs</strong>.</i><br />
                    <i>Learned best practices of frontend performance and code quality.</i>
                </div>

                <div className="mt-4">
                    <span className="text-sm font-semibold text-black-800 font-bold">Technologies used:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["React.js", "Redux", "JavaScript", "HTML5", "CSS3", "REST API", "Git"].map((tech) => (
                            <span
                                key={tech}
                                className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Self */}
            <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Independent </h3>
                <h4 className="text-xl font-bold text-black">Personal Projects</h4>
                <p className="text-sm text-gray-600 mb-4">Ongoing</p>

                <div className="space-y-2 text-gray-800 ml-4">
                    <i>Built MERN stack apps to manage finance, portfolios, and personal tools.</i><br />
                    <i>Practiced TDD using <strong>Jest</strong>.</i><br />
                    <i>Published open-source UI kits and component libraries.</i>
                </div>

                <div className="mt-4">
                    <span className="text-sm font-semibold text-black-800 font-bold">Technologies used:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["React.js", "Redux", "JavaScript", "HTML5", "CSS3", "REST API", "Git"].map((tech) => (
                            <span
                                key={tech}
                                className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

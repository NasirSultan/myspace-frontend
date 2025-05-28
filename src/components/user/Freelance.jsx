import React from "react";
        import { Link } from 'react-router-dom';
import {
  FaLaptopCode,
  FaShieldAlt,
  FaHandshake,
  FaClipboardList,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const FreelanceSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 font-sans text-gray-900">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          Freelance Full Stack & Cybersecurity Expert
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto">
          Delivering cutting-edge web development and top-notch security to
          protect your digital assets.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">


<Link
  to="/Experience"
  className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition duration-300"
>
Experience
</Link>

<Link
  to="/portfolio"
  className="flex items-center justify-center gap-2 border border-purple-700 text-purple-700 hover:bg-purple-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-sm transition duration-300"
>
 Portfolio
</Link>

        </div>
      </header>

      {/* Services */}
      <section className="flex flex-col gap-10 sm:gap-12 mb-16 sm:mb-20 max-w-5xl mx-auto">
        <article className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <FaLaptopCode className="text-purple-700 w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold">Web & Software Development</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 px-2 sm:px-5">
            <li><strong>Full-Stack Development:</strong> MERN stack and Laravel for scalable, robust web applications.</li>
            <li><strong>Responsive Design:</strong> Mobile-first websites and dashboards optimized for all devices.</li>
            <li><strong>RESTful API Development:</strong> Secure APIs using Node.js and Express.js.</li>
            <li><strong>Frontend Frameworks:</strong> React.js, Vue.js 3, Tailwind CSS, Bootstrap.</li>
            <li><strong>WordPress Development:</strong> Custom themes and plugins as per client needs.</li>
            <li><strong>Debugging & Optimization:</strong> Bug fixing and performance enhancement.</li>
            <li><strong>Deployment & Hosting:</strong> Hostinger, AWS, Docker containers.</li>
            <li><strong>Version Control & CI/CD:</strong> Git with GitHub Actions or GitLab CI.</li>
          </ul>
        </article>

        <article className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <FaShieldAlt className="text-purple-700 w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold">Cybersecurity Services</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 px-2 sm:px-5">
            <li><strong>Security Audits:</strong> Identify vulnerabilities in sites and servers.</li>
            <li><strong>Penetration Testing:</strong> Simulate attacks to find and fix weaknesses.</li>
            <li><strong>OWASP Compliance:</strong> Patch top 10 vulnerabilities.</li>
            <li><strong>Malware Removal:</strong> Eliminate backdoors and malicious scripts.</li>
            <li><strong>API & Auth Security:</strong> Use JWT, OAuth for secure access control.</li>
            <li><strong>Code Review:</strong> Identify insecure coding patterns.</li>
            <li><strong>Secure Deployment:</strong> Harden servers with HTTPS, Docker, and firewalls.</li>
            <li><strong>WordPress Hardening:</strong> Secure plugins, logins, and configurations.</li>
          </ul>
        </article>

        <article className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <FaGlobe className="text-purple-700 w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold">Website Security Coverage</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 px-2 sm:px-5">
            <li><strong>Security assessments</strong> with scans and ethical hacking.</li>
            <li><strong>Code audits</strong> to catch insecure logic or poor practices.</li>
            <li><strong>Secure auth systems:</strong> JWT, OAuth2.</li>
            <li><strong>WAF configuration:</strong> Against DDoS, XSS, SQLi.</li>
            <li><strong>Incident response:</strong> Forensics, resolution, containment.</li>
            <li><strong>Training:</strong> Educate developers/staff on secure practices.</li>
            <li><strong>Threat modeling & compliance:</strong> OWASP, GDPR, PCI-DSS aligned.</li>
          </ul>
        </article>
      </section>

      {/* Skills */}
      <section className="grid gap-8 sm:gap-12 mb-16 sm:mb-20 max-w-5xl mx-auto sm:grid-cols-2">
        <div className="bg-purple-50 rounded-3xl p-6 sm:p-8 shadow-inner">
          <div className="flex items-center gap-3 mb-4">
            <FaHandshake className="text-purple-700 w-7 h-7" />
            <h3 className="text-xl sm:text-2xl font-semibold">Flexible Engagement Models</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg text-purple-800">
            <li>Hourly Consulting & Development</li>
            <li>Fixed-Price Project Delivery</li>
            <li>Security Audits & Pen Testing</li>
            <li>Ongoing Support & Retainers</li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-3xl p-6 sm:p-8 shadow-inner">
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardList className="text-purple-700 w-7 h-7" />
            <h3 className="text-xl sm:text-2xl font-semibold">Streamlined Development</h3>
          </div>
          <ol className="list-decimal list-inside space-y-2 sm:space-y-3 text-base sm:text-lg text-purple-800">
            <li>Discovery & Assessment</li>
            <li>Proposal & Planning</li>
            <li>Agile Dev / Security Review</li>
            <li>Deployment & Support</li>
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-purple-100 rounded-3xl p-8 sm:p-12 text-center shadow-lg max-w-5xl mx-auto mb-16 sm:mb-20">
        <FaEnvelope className="mx-auto mb-4 sm:mb-6 text-purple-700 w-10 h-10 sm:w-14 sm:h-14" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
        <p className="text-base sm:text-lg text-purple-900 mb-1">
          Email:{" "}
          <a href="mailto:ahmad@gmail.com" className="underline">
            ahmad@gmail.com
          </a>
        </p>
        <p className="text-base sm:text-lg text-purple-900 mb-4 sm:mb-6">
          Phone:{" "}
          <a href="tel:+1456566" className="underline">
            +1456566
          </a>
        </p>
       
<Link
  to="/Contact"
  className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition duration-300 md:w-1/2 mx-auto"
>
  Contact form
</Link>


      </section>

      {/* Why Me */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Why Work With Me?</h2>
        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-8 text-base sm:text-lg text-gray-800 list-disc list-inside">
          <li>Full Stack + Cybersecurity Expertise</li>
          <li>Build scalable, secure apps</li>
          <li>Clear communication & delivery</li>
          <li>Confidential & ethical approach</li>
        </ul>
      </section>
    </div>
  );
};

export default FreelanceSection;

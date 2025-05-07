import React from "react";
import resume from "../assets/Alvin-Zondi-CV.pdf";
import { FaDownload } from "react-icons/fa";

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
  >
    <div className="max-w-3xl text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        About Me
      </h2>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors duration-300 ">
        <p className=" dark:text-gray-300 text-lg mb-8 leading-relaxed text-black">
          I'm a Full Stack Developer who loves JavaScript, React, and clean
          code. I build scalable apps that solve real problems. With experience
          in both frontend and backend technologies, I enjoy creating responsive
          and performant web applications that deliver exceptional user
          experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "HTML/CSS",
                "Tailwind CSS",
                "Bootstrap",
                "RestFul API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href={resume}
        download="Alvin-Zondi-CV.pdf"
        className="text-center flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-md font-medium transition-colors mt-4 md:mt-0 shadow-sm"
      >
        <FaDownload /> Download CV
      </a>

      <div className="animate-bounce mt-12 hidden md:block container">
        <a
          href="#projects"
          className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default About;


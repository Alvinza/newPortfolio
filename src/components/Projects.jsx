import React from "react";
import projectOne from "../assets/project_1.png";
import projectTwo from "../assets/project_2.png";
import projectThree from "../assets/project_3.png";
import projectFour from "../assets/project_4.png";
import projectFive from "../assets/project_5.png";

const projectList = [
  {
    name: "Beat Store",
    image: projectTwo,
    live: "https://vinkid-beatz.onrender.com/",
    github: "https://github.com/Alvinza/vinkid-beatz",
    tech: "React, Node.js, MongoDB",
    challenge:
      "Implementing real-time audio previews while maintaining performance",
  },
  {
    name: "Modeling Agency",
    image: projectFour,
    live: "https://d-a-models.vercel.app/",
    github: "https://github.com/Alvinza/D-A-Models",
    tech: "React, Node.js, MongoDB",
    challenge:
      "Implementing real-time audio previews while maintaining performance",
  },
  {
    name: "E-commerce",
    image: projectOne,
    live: "https://zara-store-1ctr.onrender.com/",
    github: "https://github.com/Alvinza/zara-store",
    tech: "React, Firebase, Tailwind CSS",
    challenge:
      "Optimizing API calls to reduce latency and improve user experience",
  },
  {
    name: "Coding Bootcamp",
    image: projectThree,
    live: "https://nextcode-ddkg.onrender.com/",
    github: "https://github.com/Alvinza/nextcode",
    tech: "Next.js, Framer Motion, Sanity CMS",
    challenge:
      "Creating smooth animations while maintaining accessibility standards",
  },
  {
    name: "Estate",
    image: projectFive,
    live: "https://rsa-estate.onrender.com/",
    github: "https://github.com/Alvinza/rsa-estate",
    tech: "Next.js, Framer Motion, Sanity CMS",
    challenge:
      "Creating smooth animations while maintaining accessibility standards",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen px-4 py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
  >
    <h2 className="mt-5 text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400 transition-colors duration-300">
      Projects
    </h2>

    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {projectList.map(({ name, image, live, github, tech, challenge }) => (
        <div
          key={name}
          className="bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-hidden transition-colors duration-300"
        >
          <div className="relative overflow-hidden rounded-md mb-4 group">
            <img
              src={image}
              alt={`${name} preview`}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 text-white">
              <p className="font-medium mb-2">
                <span className="text-blue-400">Tech:</span> {tech}
              </p>
              <p className="text-sm">
                <span className="text-blue-400">Challenge:</span> {challenge}
              </p>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white transition-colors duration-300">
            {name}
          </h3>
          <div className="flex gap-4 mt-2">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
            >
              Live Site
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>

    <div className="animate-bounce mt-12 hidden md:block container mx-auto text-center">
      <a
        href="#achievements"
        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
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
  </section>
);

export default Projects;

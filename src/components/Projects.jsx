import React, { useState } from "react";
import projectList from "../assets/projects/projectsData";

const Projects = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="mt-5 text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map(({ name, image, live, github, tech, challenge }) => (
          <div
            key={name}
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-md mb-4">
              <img
                src={image}
                alt={`${name} preview`}
                className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105 hover:brightness-75"
              />
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-white">{name}</h3>

            {/* Tech */}
            <p className="text-gray-300 mt-2">
              <span className="text-blue-400 font-medium">Tech:</span> {tech}
            </p>

            {/* Project Links */}
            <div className="flex gap-4 mt-3">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Site
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                GitHub
              </a>
            </div>
            {/* View Challenge Button */}
            <button
              onClick={() => setSelectedChallenge({ name, challenge })}
              className="mt-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded"
            >
              View Challenge
            </button>
          </div>
        ))}
      </div>

      {/* Challenge Modal */}
      {selectedChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full relative">
            <h3 className="text-xl font-semibold text-white mb-4">
              {selectedChallenge.name} Challenge
            </h3>
            <p className="text-gray-300">{selectedChallenge.challenge}</p>
            <button
              onClick={() => setSelectedChallenge(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

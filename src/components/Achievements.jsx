import React from "react";
import { FaTrophy, FaExternalLinkAlt } from "react-icons/fa";
import myCertificate from "../assets/certificate.png";
import udemy from "../assets/udemy.png"; // udemy Certificate

const Achievements = () => {
  // Array of certificate data
  const certificates = [
    {
      id: 1,
      title: "HyperionDev Full Stack Web Development",
      image: myCertificate,
      description:
        "Completed an intensive bootcamp focusing on modern web development technologies and practices, including JavaScript, React, Node.js, and database management.",
      link: "https://www.hyperiondev.com/certificate/6381/certificate-of-completion?intent=view",
    },
    {
      id: 2,
      title: "JavaScript Advanced Certification",
      image: udemy,
      description:
        "Advanced course covering complex JavaScript concepts including closures, prototypal inheritance, async programming, and modern ES6+ features.",
      link: "https://www.hyperiondev.com/portfolio/108878/",
    },
  ];
  
// Array of accomplishments data
const accomplishments = [
  {
    id: 1,
    title: "Full Stack Web Development Graduate",
    description:
      "Successfully completed HyperionDev’s intensive Full Stack Web Development program in 2024, gaining hands-on experience in building responsive, user-friendly web applications using the MERN stack.",
  },
  {
    id: 2,
    title: "Web Application Performance Optimization",
    description:
      "Improved website performance through code splitting, lazy loading, and image optimization, achieving faster load times and higher Lighthouse performance scores.",
  },
  {
    id: 3,
    title: "Practical Problem-Solving",
    description:
      "Applied modern development practices such as Git/GitHub version control, debugging, and clean coding principles to solve real-world coding challenges and deliver reliable web solutions.",
  },
];


  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-100 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3 transition-colors duration-300">
            My Achievements
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-blue-600 mr-2"></div>
            <FaTrophy className="text-blue-600 text-xl" />
            <div className="h-1 w-12 bg-blue-600 ml-2"></div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A showcase of my certifications, accomplishments, and professional
            milestones that reflect my skills and dedication.
          </p>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white transition-colors duration-300">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                      View Certificate <FaExternalLinkAlt className="ml-1" />
                    </a>
                  </div>
                </div>

                {/* Certificate details */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">
                    {cert.title}
                  </h4>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    View Certificate <FaExternalLinkAlt className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Accomplishments */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white transition-colors duration-300">
            Professional Accomplishments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accomplishments.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll down arrow */}
        <div className="animate-bounce mt-12 hidden md:block text-center">
          <a
            href="#contact"
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
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
};

export default Achievements;

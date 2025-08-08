import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Socail media Icons
import profile from "../assets/about_profile.png"; // Profile picture

// Custom hook to create typing animation effect
const useTypingEffect = (text, duration = 150) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, duration);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, duration]);

  return displayedText;
};

const Home = () => {
  const fullName = "Alvin Zondi";
  const fullTitle = "Full Stack Developer";

  const displayedName = useTypingEffect(fullName);
  const displayedTitle = useTypingEffect(fullTitle, 100);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-3xl">
        <img
          src={profile}
          alt="Alvin Zondi"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full mb-4 border-2 border-blue-600 dark:border-blue-400 mx-auto"
        />

        {/* Typing effect for name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
          I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {displayedName}
          </span>
          {displayedName.length < fullName.length && (
            <span className="animate-pulse">|</span>
          )}
        </h1>
        

        {/* Typing effect for title */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4">
          {displayedTitle}
          {displayedTitle.length < fullTitle.length && (
            <span className="animate-pulse">|</span>
          )}
        </h2>

        <p className="mt-4 mb-8 max-w-lg text-gray-700 dark:text-gray-300 mx-auto text-lg">
          As a passionate Full Stack Developer based in the vibrant tech hub of
          Cape Town, I've spent the last year crafting seamless digital
          experiences from front-end to back-end, turning complex problems into
          elegant solutions.
        </p>

          {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://github.com/Alvinza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/alvin-zondi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Scroll-down arrow */}
        <div className="animate-bounce mt-12 hidden md:block">
          <a
            href="#about"
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

export default Home;

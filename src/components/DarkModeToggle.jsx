// DarkModeToggle.jsx
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, toggleDark }) => {
  return (
    <button
      onClick={toggleDark}
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-700" />
      )}
    </button>
  );
};

export default DarkModeToggle;

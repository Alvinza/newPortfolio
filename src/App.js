import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Dark mode state, initialized from localStorage or false by default
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === null ? false : JSON.parse(stored);
  });

  // Toggle dark mode state, between true/false
  const toggleDark = () => setDarkMode((prev) => !prev);

   /**
   * Effect: Sync darkMode state to localStorage and update <html> class.
   * - Ensures the preference persists between page reloads.
   * - Adds/removes the "dark" class from the HTML element for Tailwind dark mode styling.
   */
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    // Main app container with dark/light styles and page sections
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar toggleDark={toggleDark} darkMode={darkMode} />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;

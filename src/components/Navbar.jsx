import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ toggleDark, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", icon: <FaHome className="mr-2" />, href: "#home" },
    { name: "About", icon: <FaUser className="mr-2" />, href: "#about" },
    { name: "Projects", icon: <FaCode className="mr-2" />, href: "#projects" },
    {
      name: "Contact",
      icon: <FaEnvelope className="mr-2" />,
      href: "#contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 dark:bg-gray-900 shadow-md transition-colors duration-300 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-blue-500 text-2xl font-bold cursor-pointer">
              {`</ Alvin >`}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle darkMode={darkMode} toggleDark={toggleDark} />

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-800 dark:hover:bg-gray-800 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 dark:bg-gray-900 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center text-gray-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

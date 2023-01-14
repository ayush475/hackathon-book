import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button onClick={toggleDarkMode} className="text-white mr-0 focus:outline-none hover:text-yellow-400">
      {isDarkMode 
      ? 
      (
        <FaSun size={20} className="inline-block h-6 w-6" />
      ) : 
      (
        <FaMoon size={20} className="inline-block h-6 w-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;

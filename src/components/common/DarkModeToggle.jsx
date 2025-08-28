import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // lucide-react ikonları

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className={`group duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full 
        ${darkMode ? "bg-black text-yellow-400" : "bg-white text-gray-700"} 
        hover:bg-amber-950 hover:text-white`}
      style={{ boxShadow: "2px 3px 0 0 #FABE17" }}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default DarkModeToggle;

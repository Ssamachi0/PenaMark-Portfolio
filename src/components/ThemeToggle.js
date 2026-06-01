import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {

  const {
    darkMode,
    toggleTheme
  } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Sun, Moon } from "lucide-react";

const LightDarkMode = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? (
          <Moon className="moon" size={22} />
        ) : (
          <Sun size={22} className="sun" />
        )}
      </button>
    </div>
  );
};

export default LightDarkMode;

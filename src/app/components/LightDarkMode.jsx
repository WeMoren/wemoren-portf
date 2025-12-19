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
      <button onClick={toggleTheme} style={{width:"auto",height:"auto", padding:"6px", display:"flex", alignItems:"center", justifyContent:"center"}}  aria-label="Toggle theme">
        {theme === "dark" ? (
          <Moon color="var(--soft-silver)" size={30} />
        ) : (
          <Sun size={30} color="goldenrod"  />
        )}
      </button>
    </div>
  );
};

export default LightDarkMode;

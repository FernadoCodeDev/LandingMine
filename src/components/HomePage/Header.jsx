import React, { useState, useEffect } from "react";
import Logo from "../../img/LandingMineWeb.webp";
import DarkModeIcon from "../../img/DarkMode.webp";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(storedMode === "true");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <header className="bg-blue-950">
      <div className="flex justify-between m-5">
        <a href="/">
          <img
            src={Logo}
            alt="LandingMine Logo"
            className="object-contain h-auto cursor-pointer w-36"
          />
        </a>
        <img
          src={DarkModeIcon}
          alt="Dark Mode Icon"
          className="object-contain w-24 h-auto cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />{" "}
      </div>
    </header>
  );
};

export default Header;

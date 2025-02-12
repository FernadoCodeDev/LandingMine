import React, { useState, useEffect } from "react";
import DarkModeIcon from "../../../img/DarkMode.webp";
import MobileMenu from "../../../img/MobileMenu.webp";
import CloseMenuIcon from "../../../img/CloseMenuIcon.webp";

const Navegation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Small Screen Check

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Menu Status
  };

  return (
    <div>
      <img
        src={MobileMenu}
        alt="Mobile Menu"
        className="h-auto cursor-pointer w-f"
        onClick={toggleMenu}
      />

      <nav className="p-5 text-white">
          <a href="/#" className="">
            Home
          </a>
          <a href="/#" className="">
            Colletion
          </a>
          <a
            href="/#"
            className=""
          >
            LandigMine
          </a>
      </nav>
    </div>
  );
};

export default Navegation;

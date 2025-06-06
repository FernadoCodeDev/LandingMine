import React, { useState, useEffect } from "react";
import DarkModeIcon from "../../assets/img/DarkMode.webp";
import MobileMenu from "../../assets/img/MobileMenu.webp";
import CloseMenuIcon from "../../assets/img/CloseMenuIcon.webp";
import LanguageSelectorButton from "./languageSelectorButton";
import { Trans, useTranslation } from "react-i18next";

const Navegation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Small Screen Check

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
    <div className="flex flex-row ">
      {/*Menu sizes less than 720 px */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-blue-950 transition-transform duration-500 ease-in-out transform z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close menu */}
          <img
            src={CloseMenuIcon}
            alt="Close Menu"
            className="absolute w-20 h-auto cursor-pointer top-5 right-5"
            onClick={toggleMenu}
          />
          <nav className="p-5 text-white">
            <div className="flex flex-row items-center justify-between mb-4">
              <img
                src={DarkModeIcon}
                alt="Dark Mode Icon"
                className="object-contain w-24 h-auto cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>
            <LanguageSelectorButton />
            <div className="flex flex-col justify-between m-2 ">
              <a href="/" className="px-4 py-2 rounded hover:bg-blue-800">
                <Trans  i18nKey="homeNav" />
              </a>
              <a
                href="/Collection"
                className="px-4 py-2 rounded hover:bg-blue-800"
              >
                <Trans i18nKey="collectionNav" />
              </a>
              <a href="/About" className="px-4 py-2 rounded hover:bg-blue-800">
                LandigMine
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* menu larger than 72px*/}
      {!isMobile && (
        <nav className="w-64 h-auto text-white bg-blue-950">
          <div className="flex flex-row items-center m-5">
            <img
              src={DarkModeIcon}
              alt="Dark Mode Icon"
              className="object-contain w-24 h-auto cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>

          <div className="flex flex-col justify-between m-2">
            <LanguageSelectorButton />

            <a href="/" className="px-4 py-2 rounded hover:bg-blue-800">
              <Trans i18nKey="homeNav" />
            </a>
            <a
              href="/Collection"
              className="px-4 py-2 rounded hover:bg-blue-800"
            >
             <Trans i18nKey="collectionNav" />
            </a>
            <a href="/About" className="px-4 py-2 rounded hover:bg-blue-800">
              LandigMine
            </a>
          </div>
        </nav>
      )}

      {/* Button to open menu on screens smaller than 768 px */}
      {/* menuOpen makes sure that when the menu is opened the image is hidden */}
      {isMobile && !menuOpen && (
        <img
          src={MobileMenu}
          alt="Mobile Menu"
          className="absolute z-10 w-16 h-auto cursor-pointer top-5 left-5 invert dark:invert-0"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navegation;

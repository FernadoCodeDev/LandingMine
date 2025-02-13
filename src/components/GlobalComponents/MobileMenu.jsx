import React, { useState, useEffect } from "react";
import MobileMenuIcon from "../../img/MobileMenu.webp";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Show Menu Icon when in mobile device size */}
      {isMobile && (
        <img
          src={MobileMenuIcon}
          alt="Mobile Menu"
          className="w-24 h-auto cursor-pointer invert dark:invert-0"
          onClick={toggleMenu}
        />
      )}

      <nav
        className={`w-full text-center text-gray-500 dark:text-white transition-all duration-500 ease-in-out overflow-hidden 
        ${menuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"} 
        ${isMobile ? "flex flex-col" : "flex flex-row max-h-none opacity-100"}`}
      >
        <a href="/#" className="p-2 text-[1rem] md:text-[2rem] font-bold hover:text-gray-700 dark:hover:text-gray-400">
          Home
        </a>
        <a href="/#" className="p-2 text-[1rem] md:text-[2rem] font-bold hover:text-gray-700 dark:hover:text-gray-400">
          Contact
        </a>
        <a href="/#" className="p-2 text-[1rem] md:text-[2rem] font-bold hover:text-gray-700 dark:hover:text-gray-400">
          Us
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;

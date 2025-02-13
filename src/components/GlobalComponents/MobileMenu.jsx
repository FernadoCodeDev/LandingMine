import React, { useState, useEffect } from "react";
import MobileMenuIcon from "../../img/MobileMenu.webp";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Show Menu Icon when in mobile device size */}
      {isMobile && (
        <img
          src={MobileMenuIcon}
          alt="Mobile Menu"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleMenu}
        />
      )}

      <nav
        className={` left-0 w-full bg-gray-800 text-white p-5 transition-all duration-700 ${
          menuOpen ? "flex" : "hidden"
        } ${isMobile ? "flex-col" : "flex-row"} md:flex md:static md:w-auto`}
      >
        <a href="/#" className="p-2 hover:text-gray-300">
          Home
        </a>
        <a href="/#" className="p-2 hover:text-gray-300">
          Contact
        </a>
        <a href="/#" className="p-2 hover:text-gray-300">
          Us
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;

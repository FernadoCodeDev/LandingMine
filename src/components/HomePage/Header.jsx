// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import DarkModeIcon from "../../img/DarkMode.webp";
import MobileMenu from "../../img/MobileMenu.webp";
import Home from "./Home";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto
  const [isMobile, setIsMobile] = useState(false); // Estado para controlar si es pantalla pequeña

  // Detectar cambios de tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720); // Si el ancho es menor a 720px es móvil
    };

    // Agregar event listener para cambios de tamaño
    window.addEventListener("resize", handleResize);
    handleResize(); // Llamar la función al cargar para asegurarse del tamaño actual

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el event listener
    };
  }, []);

  // Manejar el cambio de tema oscuro
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

  // Función para abrir/cerrar el menú en pantallas móviles
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row">
    
      <nav className="w-64 h-screen text-white bg-blue-950">
      <div className="flex flex-row items-center m-5">
        <img
          src={DarkModeIcon}
          alt="Dark Mode Icon"
          className="object-contain w-24 h-auto cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />

      </div>
        <ul className="p-4 space-y-4">
          <li>
            <a href="#" className="px-4 py-2 rounded hover:bg-gray-600">
              About
            </a>
          </li>

          <li>
            <a href="#" className="px-4 py-2 rounded hover:bg-gray-600">
              About
            </a>
          </li>

          <li>
            <a href="#" className="px-4 py-2 rounded hover:bg-gray-600">
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <Home />
     
    </div>

  );
};

export default Header;

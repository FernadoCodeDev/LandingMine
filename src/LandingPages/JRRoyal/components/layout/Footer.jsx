import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-zinc-950">
      <div className="max-w-6xl mx-auto">

        <p className="mb-4 text-lg leading-relaxed">
          <span className="font-bold">JR Hotel</span> no es un
          hotel real y fue creado únicamente con fines de desarrollo y diseño.
          Además, yo diseñé el logotipo de{" "}
          <span className="font-bold">JR Hotel</span> y utilicé imágenes de uso
          libre en su construcción.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Esta ha sido una de las landing pages de{" "}
          <span className="font-bold">LandingMine</span>
        </p>
      </div>

      <div className="mt-8 border-t-2 opacity-50 border-beige-100"></div>

      <p className="mt-6 text-sm text-center">
        © 2025 JR Hotel.{" "}
        <a
          href="/"
          className="ml-1 transition duration-300 ease-in-out font-bol hover:text-beige-300"
        >
          Regresar a LandingMine
        </a>
      </p>
    </footer>
  );
};

export default Footer;

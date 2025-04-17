import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
          Pig Bank expresa su más sincero agradecimiento a{" "}
          <a
            href="https://dribbble.com/dipauix"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold text-white transition duration-300 ease-in-out dark:hover:text-red-500 hover:text-red-500"
          >
            Dipa UI/UX
          </a>{" "}
          cuya obra sirvió de inspiración para la creación de la landing page{" "}
          <span className="font-bold">Pig Bank</span>. Utilicé su diseño como
          referencia para desarrollar esta interpretación propia, respetando
          siempre su estilo.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Cabe aclarar que <span className="font-bold">Pig Bank</span> no es un
          Banco real y fue creado únicamente con fines de desarrollo y diseño.
          Además, yo diseñé el logotipo de{" "}
          <span className="font-bold">Pig Bank</span> y utilicé imágenes de uso
          libre en su construcción.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Esta ha sido una de las landing pages de{" "}
          <span className="font-bold">LandingMine</span>
        </p>
      </div>

      <div className="mt-8 border-white border-t-2opacity-50"></div>

      <p className="mt-6 text-sm text-center">
        © 2025 Pig Bank.{" "}
        <a
          href="/"
          className="ml-1 text-white transition duration-300 ease-in-out font-bol dark:hover:text-red-500 hover:text-red-500"
        >
          Regresar a LandingMine
        </a>
      </p>
    </footer>
  );
};

export default Footer;

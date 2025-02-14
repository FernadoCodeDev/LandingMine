import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 mt-8 text-white bg-red-600">
      <div className="max-w-6xl mx-auto">
        {/* Texto con más espacio entre párrafos */}
        <p className="mb-4 text-lg leading-relaxed">
          PizzaPizza expresa su más sincero agradecimiento a la talentosa
          diseñadora{" "}
          <a
            href="https://dribbble.com/shots/25581417-Piznek-Dashboard-Restaurant-POS"
            className="ml-1 font-bold text-white transition duration-300 ease-in-out hover:text-yellow-400"
          >
            Azie Melasari,
          </a>{" "}
          cuya obra sirvió de inspiración para la creación de la landing page{" "}
          <span className="font-bold">PizzaPizza</span>. Utilicé su diseño como
          referencia para desarrollar esta interpretación propia, respetando
          siempre su estilo.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Cabe aclarar que <span className="font-bold">PizzaPizza</span> no es
          un establecimiento real y fue creado únicamente con fines de
          desarrollo y diseño. Además, yo diseñé el logotipo de{" "}
          <span className="font-bold">PizzaPizza</span> y utilicé imágenes de
          uso libre en su construcción.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Esta ha sido una de las landing pages de{" "}
          <span className="font-bold">LandingMine</span>
        </p>
      </div>

      {/* Separador visual (opcional) */}
      <div className="mt-8 border-t-2 border-white opacity-50"></div>

      {/* Texto pequeño y alineado al centro */}
      <p className="mt-6 text-sm text-center">
        © 2025 PizzaPizza.{" "}
        <a
          href="/"
          className="ml-1 font-bold text-white transition duration-300 ease-in-out hover:text-yellow-400"
        >
          Regresar a LandingMine
        </a>
      </p>
    </footer>
  );
};

export default Footer;

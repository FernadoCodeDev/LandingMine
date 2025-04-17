import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-black bg-orange-300">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
          Good Trip expresa su más sincero agradecimiento al talentoso diseñador{" "}
          <a
            href="https://dribbble.com/dhiradanuarta"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold text-black transition duration-300 ease-in-out hover:text-white"
          >
            Dhira Danuarta
          </a>{" "}
          cuya obra sirvió de inspiración para la creación de la landing page{" "}
          <span className="font-bold">Good Trip</span>. Utilicé su diseño como
          referencia para desarrollar esta interpretación propia, respetando
          siempre su estilo.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Cabe aclarar que <span className="font-bold">Good Trip</span> no es
          una agencia real y fue creado únicamente con fines de desarrollo y
          diseño. Además, yo diseñé el logotipo de{" "}
          <span className="font-bold">Good Trip</span> y utilicé imágenes de uso
          libre en su construcción.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Esta ha sido una de las landing pages de{" "}
          <span className="font-bold">LandingMine</span>
        </p>
      </div>

      <div className="mt-8 border-t-2 border-black opacity-50"></div>

      <p className="mt-6 text-sm text-center">
        © 2025 Good Trip.{" "}
        <a
          href="/"
          className="ml-1 font-bold text-black transition duration-300 ease-in-out hover:text-white"
        >
          Regresar a LandingMine
        </a>
      </p>
    </footer>
  );
};

export default Footer;

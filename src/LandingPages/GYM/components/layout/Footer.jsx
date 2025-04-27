import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
          GYM expresa su más sincero agradecimiento a la talentosa diseñadora{" "}
          <a
            href="https://www.behance.net/nixy_nina"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold text-white transition duration-300 ease-in-out hover:text-yellow-400"
          >
            Nikolina Šegan,
          </a>{" "}
          cuya obra sirvió de inspiración para la creación de la landing page{" "}
          <span className="font-bold">GYM</span>. Utilicé su diseño como
          referencia para desarrollar esta interpretación propia, respetando
          siempre su estilo.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Cabe aclarar que <span className="font-bold">GYM</span> no es un
          gimnasio real y fue creado únicamente con fines de desarrollo y
          diseño. Además, yo diseñé el logotipo de{" "}
          <span className="font-bold">GYM</span> y utilicé imágenes de uso libre
          en su construcción.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Esta ha sido una de las landing pages de{" "}
          <span className="font-bold">LandingMine</span>
        </p>
      </div>

      <div className="mt-8 border-t-2 border-white opacity-50"></div>

      <p className="mt-6 text-sm text-center">
        © 2025 GYM.{" "}
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

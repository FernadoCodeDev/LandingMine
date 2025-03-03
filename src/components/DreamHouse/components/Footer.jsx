import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
        <span className="font-bold">Dream House</span> expresa su más sincero agradecimiento al talentoso diseñador
   {" "}
          <a
            href="https://dribbble.com/MahmuduR"
            className="ml-1 font-bold text-white transition duration-300 ease-in-out hover:text-blue-400"
          >
            Mahmudur Rahman
          </a>{" "}
          cuya obra sirvió de inspiración para la creación de la landing page{" "}
          <span className="font-bold">Dream House</span>. Utilicé su diseño como
          referencia para desarrollar esta interpretación propia, respetando
          siempre su estilo.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Cabe aclarar que <span className="font-bold">Dream House</span> no es
          una Agencia real y fue creado únicamente con fines de
          desarrollo y diseño. Además, yo diseñé el logotipo de{" "}
          <span className="font-bold">Dream House</span> y utilicé imágenes de
          uso libre en su construcción.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Esta ha sido una de las landing pages de{" "}
          <span className="font-bold">LandingMine</span>
        </p>
      </div>

      <div className="mt-8 border-t-2 border-black opacity-50"></div>

      <p className="mt-6 text-sm text-center">
        © 2025 Dream House.{" "}
        <a
          href="/"
          className="ml-1 font-bold text-white transition duration-300 ease-in-out hover:text-blue-400"
        >
          Regresar a LandingMine
        </a>
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-black border-t-2 border-purple-300">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
          <span className="font-bold">Web Call</span> expresa su más sincero
          agradecimiento al talentoso diseñador{" "}
          <a
            href="https://dribbble.com/akibtanjil"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold transition duration-300 ease-in-out hover:text-purple-300"
          >
            Akib Tanjil
          </a>{" "}
          cuya obra sirvió de inspiración para la creación de la landing page{" "}
          <span className="font-bold">Web Call</span>. Utilicé su diseño como
          referencia para desarrollar esta interpretación propia, respetando
          siempre su estilo.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Cabe aclarar que <span className="font-bold">Web Call</span> no es una
          Agencia real y fue creado únicamente con fines de desarrollo y diseño.
          Además, yo diseñé el logotipo de{" "}
          <span className="font-bold">Web Call</span> y utilicé imágenes de uso
          libre en su construcción.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Esta ha sido una de las landing pages de{" "}
          <span className="font-bold">LandingMine</span>
        </p>
      </div>

      <div className="mt-8 border-t-2 border-white opacity-50"></div>

      <p className="mt-6 text-sm text-center">
        © 2025 Web Call.{" "}
        <a
          href="/"
          className="ml-1 font-bold transition duration-300 ease-in-out hover:text-purple-300"
        >
          Regresar a LandingMine
        </a>
      </p>
    </footer>
  );
};

export default Footer;

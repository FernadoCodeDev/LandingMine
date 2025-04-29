import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
          <span className="font-bold">Charla Con Bot</span> es un proyecto
          personal inspirado en una idea explicada por{" "}
          <a
            href="https://www.javascript100.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold transition duration-300 ease-in-out hover:text-emerald-800 "
          >
            midudev
          </a>{" "}
          quien presenta en su video el desarrollo de un asistente
          conversacional utilizando modelos de lenguaje que funcionan
          localmente. Esta versión,{" "}
          <span className="font-bold">Charla Con Bot</span>, fue construida
          respetando el enfoque educativo y experimental.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Cabe aclarar que el modelo utilizado en esta landing funciona
          completamente de forma local. Si decidís interactuar con él, recordá
          que la información generada puede no ser precisa, por lo que siempre
          se recomienda verificar los datos antes de tomar decisiones basadas en
          las respuestas del bot.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Esta ha sido una de las landing pages de{" "}
          <span className="font-bold">LandingMine</span>, desarrollada con fines
          de aprendizaje y práctica de desarrollo web.
        </p>
      </div>

      <div className="mt-8 border-t-2 border-white opacity-50"></div>

      <p className="mt-6 text-sm text-center">
        © 2025 Charla Con Bot.{" "}
        <a
          href="/"
          className="ml-1 transition duration-300 ease-in-out font-bol hover:text-emerald-800 "
        >
          Regresar a LandingMine
        </a>
      </p>
    </footer>
  );
};

export default Footer;

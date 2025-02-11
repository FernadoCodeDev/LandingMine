import React from "react";
import Logo from "../../../img/LandingMineWeb.webp";
import Navegation from "../TempladeComponents/Navegation";
import Footer from "../TempladeComponents/Footer";
import Advertisement from "./LandingPageAd";

const CollectionPage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Navegation />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {" "}
          <section className="items-center py-16 text-center">
            <img
              src={Logo}
              alt="Landing"
              className="object-contain w-40 h-auto mx-auto lg:w-60"
            />
            <h1 className="mb-4 text-4xl font-bold text-blue-950 dark:text-orange-300">
              L
              <span className="text-4xl font-bold text-transparent stroke-blue-950 dark:stroke-orange-300">
                anding
              </span>
              M
              <span className="text-4xl font-bold text-transparent stroke-blue-950 dark:stroke-orange-300">
                ine
              </span>
            </h1>

            <h2 className="mb-4 text-4xl font-bold text-blue-950 dark:text-orange-300">
              Explora la Mina de Landing Pages
            </h2>

            <p className="text-center w-full p-2 m-2 text-lg md:max-w-[70rem] md:mx-auto dark:text-white">
              Bienvenido a{" "}
              <strong className="text-blue-950 dark:text-orange-300">
                LandingMine,
              </strong>{" "}
              tu mina digital de aterrizajes exclusivos y cuidadosamente
              seleccionados. Aquí encontrarás una vasta colección de {" "}
              <span className="font-bold text-blue-950 dark:text-orange-300">
                landing pages
              </span>{" "}
              diseñadas con
              <span className="font-bold text-cyan-400"> React </span>y
              <span className="font-bold text-sky-400"> Tailwind CSS, </span>
              inspiradas en las últimas tendencias de plataformas como
              CollectUI, Dribbble y Behance. Cada página es una pieza única,
              perfecta para dar vida a tu proyecto con una base sólida y
              moderna.
            </p>

            <p className="text-center w-full p-2 m-2 text-lg md:max-w-[70rem] md:mx-auto dark:text-white">
              Desde aterrizajes minimalistas hasta estructuras complejas,{" "}
              <strong className="text-blue-950 dark:text-orange-300">
                LandingMine,
              </strong>{" "}
              te ofrece una selección curada que te permitirá encontrar el
              diseño ideal para tu próximo proyecto. Ya sea que estés buscando
              una presentación de producto impactante, una página de captura de
              leads o una solución innovadora, aquí puedes encontrar las mejores
              opciones creadas con tecnologías que marcan la diferencia.
            </p>

            <p className="text-center w-full p-2 mb-2 text-lg md:max-w-[70rem] md:mx-auto dark:text-white">
              Entra y explora, descubre nuevas ideas y encuentra la inspiración
              que tu proyecto necesita, todo en un solo lugar.
            </p>

            <Advertisement />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CollectionPage;

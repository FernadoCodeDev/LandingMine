import React from "react";
import useScrollAnimation from "../hook/ScrollAnimation";
import laptop from "../../assets/img/laptop.webp";

const SecondSection = () => {
  const isVisible = useScrollAnimation("second-section");

  return (
    <div id="second-section" className="w-full h-auto pb-2 bg-gray-100">
      <div
        className={`grid justify-center m-auto max-w-[90rem] grid-cols-1 p-4 md:justify-between md:grid-cols-2 transition-all duration-1000 ease-in ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="order-2 p-4 md:order-1">
          <h1 className="font-bold text-[2rem] lg:text-[3rem]">
            Elegance Jewelry
          </h1>
          <p className="text-[1rem] ">
            El objetivo de este proyecto era crear una presentación digital de
            alto impacto para Elegance Jewelry, una tienda especializada en
            joyería fina y exclusiva. El sitio web debía capturar la esencia del
            lujo y la sofisticación de sus piezas, al mismo tiempo que ofrecía
            una experiencia de usuario impecable para atraer clientes, aumentar
            las ventas en línea y fortalecer la presencia de la marca en el
            mercado.
          </p>

          <div className="flex flex-row justify-start gap-2 mt-4">
            <button className="p-2 transition-all duration-700 ease-out bg-yellow-300 border-2 border-yellow-400 rounded-full hover:border-yellow-500 hover:bg-yellow-400">
              Explorar más
            </button>
            <button className="p-2 transition-all duration-700 ease-out border-2 border-gray-600 rounded-full hover:bg-gray-200">
              Ver nuestro trabajo
            </button>
          </div>
        </div>

        <div className="order-1 p-4 md:order-2">
          <img src={laptop} alt="laptop" className="drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
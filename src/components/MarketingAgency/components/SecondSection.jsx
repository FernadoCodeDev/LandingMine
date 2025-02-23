import React from "react";
import useScrollAnimation from "../../hooks/ScrollAnimation"; 
import laptop from "../img/laptop.webp";
import KeysHome from "../img/KeysHome.webp";
import CosmicPizza from "../img/CosmicPizza.webp";
import LandingMine from "../img/LandingMine.webp";
import PizzaPizza from "../img/PizzaPizza.webp";
import GYMLogo from "../img/GYMLogo.webp";
import Pig from "../img/Pig Bank.webp";

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
          <h1 className="font-bold text-[2rem]">Stonewood Grill & Tavern</h1>
          <p className="text-[1rem]">
            El objetivo de este proyecto era crear una presentación digital de alto
            impacto para Stonewood Grill & Tavern, un restaurante especializado
            en carnes de primera calidad. El sitio web debía reflejar el
            ambiente exclusivo del restaurante y, al mismo tiempo, ofrecer una
            experiencia de usuario perfecta para impulsar las reservas y la
            participación de los clientes.
          </p>

          <div className="flex flex-row justify-start gap-2 mt-4">
            <button className="p-2 bg-yellow-400 rounded-full">Explorar más</button>
            <button className="p-2 border-2 border-gray-600 rounded-full">
              Ver nuestro trabajo
            </button>
          </div>
        </div>

        <div className="order-1 p-4 md:order-2">
          <img src={laptop} alt="laptop" className="drop-shadow-2xl" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 m-auto p-4 max-w-[90rem]">
        {[CosmicPizza, KeysHome, LandingMine, PizzaPizza, GYMLogo, Pig].map(
          (image, index) => (
            <div
              key={index}
              className={`p-2 bg-white rounded-xl transition-all duration-700 ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Retraso progresivo
            >
              <img src={image} alt="Project" className="object-contain w-40 h-40 m-auto" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SecondSection;

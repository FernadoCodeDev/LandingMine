import React from "react";
import imageN1 from "../img/imageN1.webp";
import imageN2 from "../img/imageN2.webp";
import imageN3 from "../img/imageN3.webp";
import GoodTripLogo from "../img/GoodTripLogo.webp";

const SecondSection = () => {
  return (
    <div className="relative w-full min-h-screen pt-20 text-black border-b-2 border-gray-300 min-h-auto bg-yellow-50">
      <div className="w-1/3 p-2 mx-auto mb-4 text-center border-2 border-black rounded-full md:w-1/6">
        <h1>Nuestros servicios</h1>
      </div>

      <h1 className="font-serif text-3xl md:text-5xl text-center mb-6 mx-auto max-w-[70rem]">
        Descubra un mundo de posibilidades con nuestro Servicio
      </h1>

      <div className="grid justify-center grid-cols-1 gap-4 p-2 m-auto md:grid-cols-2 max-w-[80rem]">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={imageN1}
            alt="imageN1"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative z-10 flex flex-col h-full p-4 m-auto text-white">
            <h1 className="pb-2 font-serif text-3xl">Logística impecable</h1>
            <p className="pb-2">
              Nos encargamos de todos los datos logísticos, desde la reserva de
              vuelos y alojamientos hasta la organización de traslados y
              excursiones. Nuestro objetivo es hacer que su experiencia de viaje
              sea lo más placentera posible.
            </p>
            <button className="w-1/3 p-2 transition-all duration-700 ease-out border-2 border-white rounded-full hover:bg-white hover:text-black">
              Ver detalles
            </button>{" "}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={imageN2}
            alt="imageN2"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative z-10 flex flex-col p-4 m-auto text-white">
            <h1 className="pb-2 font-serif text-3xl">Orientación experta</h1>
            <p className="pb-2">
              Nuestro equipo está formado por apasionados trotamundos que
              conocen a fondo varios destinos. Ofrecen consejos de expertos,
              consejos de expertos y recomendaciones para mejorar su viaje.
            </p>
            <button className="w-1/3 p-2 transition-all duration-700 ease-out border-2 border-white rounded-full hover:bg-white hover:text-black">
              Ver detalles
            </button>{" "}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl md:col-span-2">
          <img
            src={imageN3}
            alt="imageN3"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative z-10 flex flex-col h-full text-center max-w-[30rem] p-4 m-auto text-white">
            <h1 className="pb-2 font-serif text-3xl">
              Asociaciones exclusivas
            </h1>
            <p className="pb-2">
              A través de nuestra extensa red y asociaciones, ofrecemos acceso
              exclusivo a experiencias y alojamientos únicos, brindándole
              aventuras únicas.
            </p>
            <button className="w-1/3 p-2 transition-all duration-700 ease-out border-2 border-white rounded-full hover:bg-white hover:text-black">
              Ver detalles
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

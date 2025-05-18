import React from "react";
import imageN1 from "../../assets/img/imageN1.webp";
import imageN2 from "../../assets/img/imageN2.webp";
import imageN3 from "../../assets/img/imageN3.webp";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto gap-4 p-4 text-black border-b-2 border-gray-300 dark:text-white min-h-auto bg-yellow-50 dark:bg-neutral-800">
      <div className="p-2 text-center border-2 border-black rounded-full dark:border-white md:w-1/6">
        <h1>Nuestros servicios</h1>
      </div>

      <h1 className="font-serif text-2xl md:text-4xl text-center  max-w-[70rem]">
        Descubra un mundo de posibilidades con nuestro Servicio
      </h1>


      <div className="grid justify-center grid-cols-1 gap-4 p-2 m-auto md:grid-cols-2 max-w-[80rem]">
        <div className="relative overflow-hidden group rounded-3xl">
          <img
            src={imageN1}
            alt="imageN1"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="flex flex-col w-full h-full bottom-0 left-0 rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[1px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="font-serif text-3xl">Logística impecable</h1>
            <p className="">
              Nos encargamos de todos los datos logísticos, desde la reserva de
              vuelos y alojamientos hasta la organización de traslados y
              excursiones. Nuestro objetivo es hacer que su experiencia de viaje
              sea lo más placentera posible.
            </p>
            <button className="w-full p-2 transition-all duration-700 ease-out border-2 border-white rounded-full md:w-1/3 hover:bg-white hover:text-black">
              Ver detalles
            </button>{" "}
          </div>
        </div>

        <div className="relative overflow-hidden group rounded-3xl">
          <img
            src={imageN2}
            alt="imageN2"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="w-full h-full bottom-0 left-0 rounded-xl md:rounded-none md:rounded-tr-xl flex flex-col justify-center text-start gap-2 backdrop-blur-[1px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="pb-2 font-serif text-3xl">Orientación experta</h1>
            <p className="pb-2">
              Nuestro equipo está formado por apasionados trotamundos que
              conocen a fondo varios destinos. Ofrecen consejos de expertos,
              consejos de expertos y recomendaciones para mejorar su viaje.
            </p>
            <button className="w-full p-2 transition-all duration-700 ease-out border-2 border-white rounded-full md:w-1/3 hover:bg-white hover:text-black">
              Ver detalles
            </button>{" "}
          </div>
        </div>

        <div className="relative overflow-hidden group rounded-3xl md:col-span-2">
          <img
            src={imageN3}
            alt="imageN3"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="flex flex-col w-full h-full bottom-0 left-0 rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[1px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 md:text-center">
            <h1 className="font-serif text-3xl ">
              Asociaciones exclusivas
            </h1>
            <p className="mx-auto md:max-w-[30rem]">
              A través de nuestra extensa red y asociaciones, ofrecemos acceso
              exclusivo a experiencias y alojamientos únicos, brindándole
              aventuras únicas.
            </p>
            <button className="w-full p-2 transition-all duration-700 ease-out border-2 border-white rounded-full md:mx-auto md:w-1/3 hover:bg-white hover:text-black">
              Ver detalles
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

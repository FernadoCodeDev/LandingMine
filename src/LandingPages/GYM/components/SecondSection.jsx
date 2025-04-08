import React from "react";
import ImageGym3 from "../img/ImageGym3.webp";
import ImageGym4 from "../img/ImageGym4.webp";
import ImageGym5 from "../img/ImageGym5.webp";
import ImageGym6 from "../img/ImageGym6.webp";

const SecondSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-auto  text-white  bg-neutral-800">
     <div className="grid items-center grid-cols-2 md:grid-cols-4 gap-4 p-4 text-center max-w-[90rem]">

      <h1 className="text-[2rem] col-span-2 font-mono font-bold md:col-span-4 ">
        Ofrecemos algo para <span className="text-yellow-300">todos</span>
      </h1>

      <div className="flex flex-col">
        <img src={ImageGym3} alt="ImageGym2" className="w-full h-auto" />
        <p className="font-mono font-bold text-white text-center text-[1rem] lg:text-[2rem] p-4">
          SOLO PARA MIEMBROS
        </p>
      </div>
      <div className="flex flex-col">
        <img src={ImageGym4} alt="ImageGym2" className="w-full h-auto" />

        <p className="font-mono font-bold text-white text-center text-[1rem] lg:text-[2rem] p-4">
          ENTRENAMIENTO PERSONAL
        </p>
      </div>

      <div className="flex flex-col">
        <img src={ImageGym5} alt="ImageGym2" className="w-full h-auto" />
        <p className="font-mono font-bold text-white text-center text-[1rem] lg:text-[2rem] p-4">
          CLASES GRUPALES DE CROSSFIT
        </p>
      </div>

      <div className="flex flex-col">
        <img src={ImageGym6} alt="ImageGym2" className="w-full h-auto" />
        <p className="font-mono font-bold text-white text-center text-[rem] lg:text-[2rem] p-4">
          ENTRENAMIENTO DE FUERZA
        </p>
      </div>
      </div>
    </div>
  );
};

export default SecondSection;

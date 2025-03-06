import React from "react";
import imgN1 from "../img/imgN1.webp";

const FirstSection = () => {
  return (
    <div className="relative w-full min-h-screen  bg-orange-50  dark:bg-sky-900 text-amber-50">
      <div className="bg-orange-100 dark:bg-cyan-950  flex flex-row justify-around p-2">
        <h1 className="text-center text-black dark:text-white font-bold md:text-3xl">
          Nuevo Campeón
        </h1>
        <h1 className="text-center text-black dark:text-white font-bold md:text-3xl">
          |
        </h1>
        <h1 className="text-center text-black dark:text-white font-bold md:text-3xl">
          Nuevo RETADORES
        </h1>
        <h1 className="text-center text-black dark:text-white font-bold md:text-3xl">
          |
        </h1>
        <h1 className="text-center text-black dark:text-white font-bold md:text-3xl">
          Nuevo DESAFIOS
        </h1>
      </div>

      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-3xl md:text-5xl">
              Find Your Game Anytime
            </h1>
            <p className="text-start text-black dark:text-white  md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus praesentium fugiat, blanditiis impedit non quis.
              Voluptatum quos nulla earum consequatur porro nemo, facilis atque
              nam ipsa expedita animi amet vero!
            </p>
          </div>

          
            <button className=" m-auto w-full md:w-1/3 dark:text-black flex justify-center p-2 transition-all duration-700 ease-out bg-sky-900 dark:bg-orange-50 md:text-2xl font-antonio hover:bg-cyan-950 dark:hover:bg-orange-200">
              Learn More
            </button>
        
        </div>

        <div className="">
          <img src={imgN1} alt="imgN1" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

import React from "react";
import ArrowSVG from "../../assets/svg/ArrowSVG";
import UtensilSet from "../../assets/img/UtensilSet.webp";
import HalfMoonKnife from "../../assets/img/HalfMoonKnife.webp";
import KnifeSet from "../../assets/img/KnifeSet.webp";
import spatula from "../../assets/img/spatula.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 bg-stone-300 text-stone-700 dark:text-slate-200 bg-bg-stone-300 dark:bg-neutral-800">
      <h1 className="font-mono font-bold text-2xl md:text-4xl text-center max-w-[70rem]">
        DESCUBRE LA COLECCIÓN DURADERA
      </h1>

      <div className="h-auto flex flex-col gap-2 justify-between max-w-[70rem] m-auto p-2 md:flex-row dark:text-white md:col-span-3">
        <button className="p-2 font-bold border-b-2 cursor-pointer text-stone-800 dark:text-slate-100 border-stone-800 dark:border-slate-100">
          LOS MÁS VENDIDOS
        </button>
        <button className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer dark:border-neutral-700 hover:border-stone-800 dark:hover:hover:border-slate-100">
          EQUIPOS
        </button>
        <button className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer dark:border-neutral-700 hover:border-stone-800 dark:hover:hover:border-slate-100">
          UTENSILIOS
        </button>
        <button className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer dark:border-neutral-700 hover:border-stone-800 dark:hover:hover:border-slate-100">
          HERRAMIENTAS
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 max-w-[80rem] m-auto">
        <div className="relative grid items-center justify-center w-full h-auto grid-cols-1 p-2 bg-stone-800">
          {/* T background */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-stone-800"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
            <div className="flex flex-row justify-between w-full p-2">
              <h1 className="font-bold text-stone-200">Top vendido</h1>
              <div className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-stone-200">
                <ArrowSVG />
              </div>
            </div>

            {/* Image */}
            <img
              src={UtensilSet}
              alt="UtensilSet"
              className="w-full h-auto drop-shadow-2xl"
            />

            <div className="flex flex-row justify-between w-full p-2 ">
              <h1 className="font-bold text-stone-800">Juego de utensilios</h1>
              <p className=" text-stone-800">
                <span className="font-bold text-stone-800">$</span>
                24.99
              </p>
            </div>
          </div>

          {/* b background */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-stone-200"></div>
        </div>

        <div className="relative grid items-center justify-center w-full grid-cols-1 p-2 bg-stone-800">
          {/* T background */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-stone-800"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
            <div className="flex flex-row justify-between w-full p-2">
              <h1 className="font-bold text-stone-200">Nuevo</h1>
              <div className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-stone-200">
                <ArrowSVG />
              </div>
            </div>

            {/* Image */}
            <img
              src={HalfMoonKnife}
              alt="HalfMoonKnife"
              className="w-full h-auto drop-shadow-2xl"
            />

            <div className="flex flex-row justify-between w-full p-2 ">
              <h1 className="font-bold text-stone-800">Cuchillo Media Luna</h1>
              <p className=" text-stone-800">
                <span className="font-bold text-stone-800">$</span>
                29.99
              </p>
            </div>
          </div>

          {/* b background */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-stone-200"></div>
        </div>

        <div className="relative grid items-center justify-center w-full h-auto grid-cols-1 p-2 bg-stone-800">
          {/* T background */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-stone-800"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
            <div className="flex flex-row justify-between w-full p-2">
              <h1 className="font-bold text-stone-200">Top vendido</h1>
              <div className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-stone-200">
                <ArrowSVG />
              </div>
            </div>

            {/* Image */}
            <img
              src={KnifeSet}
              alt="KnifeSet"
              className="w-full h-auto drop-shadow-2xl"
            />

            <div className="flex flex-row justify-between w-full p-2 ">
              <h1 className="font-bold text-stone-800">Set de Cuchillos</h1>
              <p className=" text-stone-800">
                <span className="font-bold text-stone-800">$</span>
                24.99
              </p>
            </div>
          </div>

          {/* b background */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-stone-200"></div>
        </div>

        <div className="relative grid items-center justify-center w-full h-auto grid-cols-1 p-2 bg-stone-800">
          {/* T background */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-stone-800"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
            <div className="flex flex-row justify-between w-full p-2">
              <h1 className="font-bold text-stone-200">Nuevo</h1>
              <div className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-stone-200">
                <ArrowSVG />
              </div>
            </div>

            {/* Image */}
            <img
              src={spatula}
              alt="spatula"
              className="w-full h-auto drop-shadow-2xl"
            />

            <div className="flex flex-row justify-between w-full p-2 ">
              <h1 className="font-bold text-stone-800">Espatula</h1>
              <p className=" text-stone-800">
                <span className="font-bold text-stone-800">$</span>
                9.99
              </p>
            </div>
          </div>

          {/* b background */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-stone-200"></div>
        </div>
      </div>

      <button className="flex justify-center w-full p-2 m-auto my-4 font-mono font-bold text-white transition-all duration-700 ease-out bg-stone-700 hover:bg-stone-800 md:w-1/3">
        VER TODOS
      </button>
    </div>
  );
};

export default FirstSection;

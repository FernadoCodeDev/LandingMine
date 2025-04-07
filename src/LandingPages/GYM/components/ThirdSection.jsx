import React from "react";
import ImageTime1 from "../img/ImgTime1.webp";
import ImageTime2 from "../img/ImgTime2.webp";
import ImageTime3 from "../img/ImgTime3.webp";

const ThirdSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-800">
      <div className="flex flex-col justify-center w-full h-20 text-center bg-yellow-300 ">
        <h1 className="font-mono font-bold text-[1rem] lg:text-[2rem]">
          VIVE LA EXPERIENCIA DE FITNESS DEFINITIVA
        </h1>
      </div>

      <div className="grid justify-center grid-cols-1 md:grid-cols-3 gap-2 m-auto py-4 w-full md:max-w-[90rem] md:p-4">
        <div className="grid grid-cols-2 gap-4 m-auto md:col-span-3">
          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 transition-all duration-700 ease-out bg-transparent border border-yellow-400 rounded-full cursor-pointer hover:bg-yellow-400">
            <svg
              class="rotate-[270deg] md:rotate-180 w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
              data-slot="icon"
              aria-hidden="true"
              fill="#fffbeb"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 transition-all duration-700 ease-out bg-transparent border border-yellow-400 rounded-full cursor-pointer hover:bg-yellow-400">
            <svg
              class="rotate-90 md:rotate-[5deg] w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
              data-slot="icon"
              aria-hidden="true"
              fill="#fffbeb"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center py-4 bg-transparent">
          <div className="w-full h-auto p-4 opacity-25 bg-neutral-200">
            <h1 className="font-bold text-center text-[1rem]">FLEXIBLE</h1>
            <img
              src={ImageTime1}
              alt="ImageTime1"
              className="w-40 h-auto p-2 m-auto"
            />
            <h1 className="font-bold text-center text-[1rem]">$120</h1>

            <div className="m-auto my-2">
              <p className="text-center">12 Clases por mes </p>
              <p className="text-center">3 Clases por semana</p>
              <p className="text-center">Sin tarifas de inscripción</p>
            </div>

            <button className="w-full font-semibold text-[0.6rem] md:text-[1rem] p-2 text-black bg-yellow-300 rounded-tl-full rounded-br-full">
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 bg-white ">
          <h1 className="font-bold text-center text-[1rem]">TODO ACCESO</h1>
          <img
            src={ImageTime2}
            alt="ImageTime2"
            className="w-40 h-auto p-2 m-auto"
          />
          <h1 className="font-bold text-center text-[1rem]">$260</h1>

          <div className="m-auto my-2">
            <p className="text-center">Clases ilimitadas por mes</p>
            <p className="text-center">3 Clases por día</p>
            <p className="text-center">Sin tarifas de inscripción</p>
          </div>

          <button className="w-full font-semibold text-[0.6rem] md:text-[1rem] p-2 text-black transition-all duration-700 ease-out bg-yellow-300 rounded-tl-full rounded-br-full hover:bg-yellow-500">
            MÁS INFORMACIÓN
          </button>
        </div>

        <div className="flex flex-col justify-center py-4 bg-transparent">
          <div className="w-full h-auto p-4 opacity-25 bg-neutral-200">
            <h1 className="font-bold text-center text-[1rem]">FUERA DE PICO</h1>
            <img
              src={ImageTime3}
              alt="ImageTime3"
              className="w-40 h-auto p-2 m-auto"
            />
            <h1 className="font-bold text-center text-[1rem]">$160</h1>

            <div className="m-auto my-2">
              <p className="text-center">20 clases por mes</p>
              <p className="text-center">5 Clases por semana</p>
              <p className="text-center">Sin tarifas de inscripción</p>
            </div>

            <button className="w-full font-semibold text-[0.6rem] md:text-[1rem] p-2 text-black bg-yellow-300 rounded-tl-full rounded-br-full">
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

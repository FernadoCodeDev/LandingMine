import React from "react";
import CheckSVG from "./SVGComponents/CheckSVG";

const ThirdSection = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full min-h-screen p-2 text-black bg-gray-900">
      <div className="pt-20 md:pt-32 m-auto flex flex-col md:flex-row justify-between w-full border-b-2 my-2 border-amber-50 p-2 max-w-[100rem]">
        <p className="text-2xl md:text-5xl font-fantasy text-amber-50">
          CONSIGUE TUS ENTRADAS
        </p>

        <div className="flex flex-row items-end justify-end gap-2">
          <p className="text-base md:text-1xl text-amber-50">CONSIGUE TUS ENTRADAS</p>
          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 bg-transparent border border-purple-400 rounded-full cursor-pointer transition-all duration-700 ease-out hover:bg-purple-400">
            <svg
              class="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
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
      </div>

      <div className="grid justify-center grid-cols-1 gap-4 md:gap-0 md:grid-cols-3 m-auto py-4 w-full md:max-w-[100rem] md:p-4">
        <div className="m-auto grid grid-cols-2 gap-4 md:hidden">
        <div className="flex flex-col items-center justify-center w-8 h-8 p-1 bg-transparent border border-purple-400 rounded-full cursor-pointer transition-all duration-700 ease-out hover:bg-purple-400">
            <svg
              class="rotate-180 w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
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

          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 bg-transparent border border-purple-400 rounded-full cursor-pointer transition-all duration-700 ease-out hover:bg-purple-400">
            <svg
              class="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
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
        
        <div className="hidden md:flex flex-col justify-center py-4 bg-transparent">
          <div className="w-full h-auto p-4 opacity-25 bg-amber-50">
            <div className="py-1 border-b border-indigo-500 ">
              <p>Regular</p>
            </div>

            <h1 className="py-4 text-3xl md:text-6xl font-fantasy">$65</h1>

            <ul>
              <li className="flex items-center gap-2 md:text-2xl">
                <CheckSVG width="12" height="12" /> Evento de 1 día
              </li>
              <li className="flex items-center gap-2 md:text-2xl">
                <CheckSVG width="12" height="12" /> 5 Charlas
              </li>
              <li className="flex items-center gap-2 md:text-2xl">
                <CheckSVG width="12" height="12" /> Sesión de interacción
              </li>
              <li className="flex items-center gap-2 md:text-2xl">
                <CheckSVG width="12" height="12" /> Almuerzo y café
              </li>
            </ul>

            <button className="w-full p-2 mt-2 font-semibold text-white bg-purple-400 ">
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 bg-white ">
          <div className="py-1 border-b border-indigo-500 ">
            <p>PREMIUN</p>
          </div>

          <h1 className="py-4 text-3xl md:text-6xl font-fantasy">$95</h1>

          <ul>
            <li className="flex items-center gap-2 md:text-2xl">
              <CheckSVG width="12" height="12" /> Evento de 2 días
            </li>
            <li className="flex items-center gap-2 md:text-2xl">
              <CheckSVG width="12" height="12" /> 10 Charlas
            </li>
            <li className="flex items-center gap-2 md:text-2xl">
              <CheckSVG width="12" height="12" /> Sesión de interacción
            </li>
            <li className="flex items-center gap-2 md:text-2xl">
              <CheckSVG width="12" height="12" /> Almuerzo y café
            </li>
          </ul>

          <button className="w-full p-2 mt-2 font-semibold text-white transition-all duration-700 ease-out bg-purple-400 hover:bg-purple-500">
            AGREGAR AL CARRITO
          </button>
        </div>

        <div className="hidden md:flex flex-col justify-center py-4 bg-transparent">
          <div className="w-full h-full p-4 opacity-25 bg-amber-50">
            <div className="py-1 border-b border-indigo-500 ">
              <p>VIP</p>
            </div>

            <h1 className="py-4 text-3xl md:text-6xl font-fantasy">$150</h1>

            <ul>
              <li className="flex items-center gap-2 md:text-2xl">
                <CheckSVG width="12" height="12" /> Evento de 3 días
              </li>
              <li className="flex items-center gap-2 md:text-2xl">
                <CheckSVG width="12" height="12" /> 20 Charlas
              </li>
              <li className="flex items-center gap-2 md:text-2xl">
                <CheckSVG width="12" height="12" /> Sesión de interacción
              </li>
              <li className="flex items-center gap-2 md:text-2xl">
                <CheckSVG width="12" height="12" /> Almuerzo y café
              </li>
            </ul>

            <button className="w-full p-2 mt-2 font-semibold text-white bg-purple-400 ">
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 max-w-[100rem] m-auto">
        <button className="flex justify-center p-2 transition-all duration-700 ease-out bg-purple-400 md:text-3xl font-fantasy hover:bg-purple-500">
          COMPRAR ENTRADAS
        </button>

        <button className="flex justify-center p-2 text-black transition-all duration-700 ease-out md:text-3xl font-fantasy bg-amber-50 hover:bg-amber-100 ">
          REGISTRARSE
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;

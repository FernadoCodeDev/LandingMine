import React from "react";
import imgN1 from "../../assets/img/imgN1.webp";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";
import Location from "../../assets/svg/Location";
import Bed from "../../assets/svg/Bed";
import Bathtub from "../../assets/svg/Bathtub";
import CurrencySVG from "../../assets/svg/CurrencySVG";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto gap-4 p-4 text-black bg-white dark:text-white dark:bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 pb-4 border-slate-300 gap-2 m-auto max-w-[80rem]">
        <h1 className="text-2xl font-bold text-center md:text-6xl">
          Propiedades Populares
        </h1>

        <p className="text-start md:text-2xl ">
          brindamos un servicio completo para la venta, compra o alquiler de
          inmuebles, brindamos un brindamos un servicio completo para la venta.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 gap-4  max-w-[80rem]">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
          <button className="w-full p-2 font-bold text-white bg-blue-400">
            Residencial
          </button>
          <button className="w-full p-2 font-bold text-black transition-all duration-700 ease-out border border-gray-300 -2 bg-slate-100 hover:bg-slate-300">
            Residencial
          </button>

          <button className="w-full p-2 font-bold text-black transition-all duration-700 ease-out border border-gray-300 bg-slate-100 hover:bg-slate-300">
            Departamentos
          </button>
          <button className="w-full p-2 font-bold text-white transition-all duration-700 ease-out md:col-span-2 bg-neutral-900 hover:bg-black">
            Comercios
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 m-auto max-w-[80rem] md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md dark:bg-neutral-800">
          <img src={imgN1} alt="imgN1" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold md:text-2xl ">
              The Queen Inside - Type 1
            </h2>
            <div className="flex flex-row gap-2 mt-4 ">
              <Location width="20" />
              <p className="">Evergreen Chemists</p>
            </div>

            <div className="flex flex-row justify-between gap-2 mt-4 ">
              <div className="flex flex-row gap-2">
                <Bed width="20" />
                <p className="font-bold ">5</p>
              </div>

              <div className="flex flex-row gap-2">
                <Bathtub width="20" />
                <p className="font-bold ">3.5</p>
              </div>

              <div className="flex flex-row">
                <CurrencySVG width="20" />
                <p className="font-bold ">800,000</p>
              </div>
            </div>

            <button className="flex flex-row m-auto mt-4 font-bold text-blue-400 transition-all duration-700 ease-out hover:text-blue-600 ">
              Ver detalles
              <svg
                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md dark:bg-neutral-800">
          <img src={imgN2} alt="imgN2" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold md:text-2xl dark:text-white">
              The Queen Inside - Type 2
            </h2>
            <div className="flex flex-row gap-2 mt-4 ">
              <Location width="20" />
              <p className="">Evergreen Chemists</p>
            </div>

            <div className="flex flex-row justify-between gap-2 mt-4 ">
              <div className="flex flex-row gap-2">
                <Bed width="20" />
                <p className="font-bold ">6</p>
              </div>

              <div className="flex flex-row gap-2">
                <Bathtub width="20" />
                <p className="font-bold ">3.5</p>
              </div>

              <div className="flex flex-row">
                <CurrencySVG width="20" />
                <p className="font-bold ">1,000,000</p>
              </div>
            </div>

            <button className="flex flex-row m-auto mt-4 font-bold text-blue-400 transition-all duration-700 ease-out hover:text-blue-600 ">
              Ver detalles
              <svg
                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md dark:bg-neutral-800">
          <img src={imgN3} alt="imgN3" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold md:text-2xl dark:text-white">
              The Queen Inside - Type 3
            </h2>
            <div className="flex flex-row gap-2 mt-4 ">
              <Location width="20" />
              <p className="">Evergreen Chemists</p>
            </div>

            <div className="flex flex-row justify-between gap-2 mt-4 ">
              <div className="flex flex-row gap-2">
                <Bed width="20" />
                <p className="font-bold ">4</p>
              </div>

              <div className="flex flex-row gap-2">
                <Bathtub width="20" />
                <p className="font-bold ">2</p>
              </div>

              <div className="flex flex-row">
                <CurrencySVG width="20" />
                <p className="font-bold ">500,000</p>
              </div>
            </div>

            <button className="flex flex-row m-auto mt-4 font-bold text-blue-400 transition-all duration-700 ease-out hover:text-blue-600 ">
              Ver detalles
              <svg
                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button className="flex flex-col font-bold  text-center transition-all duration-700 ease-out bg-blue-400 hover:bg-blue-600 text-white md:w-1/2 dark:bg-neutral-900 dark:hover:bg-black my-12 p-2 w-full max-w-[70rem] m-auto">
        Ver todas
      </button>
    </div>
  );
};

export default SecondSection;

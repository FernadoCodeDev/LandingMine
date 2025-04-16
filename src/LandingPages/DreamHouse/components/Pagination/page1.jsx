import React from "react";
import imgN1 from "../../assets/img/imgN1.webp";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";
import Location from "../../assets/svg/Location";
import Bed from "../../assets/svg/Bed";
import Bathtub from "../../assets/svg/Bathtub";
import CurrencySVG from "../../assets/svg/CurrencySVG";

const page1 = () => {
    return(
        <div 
        className="grid grid-cols-1 m-auto max-w-[80rem] md:grid-cols-3 gap-4"
        id="page1"
        
        >
        <div className="relative rounded-lg shadow-md bg-slate-50 dark:bg-neutral-900">
          <img src={imgN1} alt="imgN1" className="w-full h-auto " />
          <div className="absolute top-0 left-0 z-10 p-2 bg-blue-400 rounded-br-lg">
            <h2 className="text-base font-bold text-white md:text-xl">Venta</h2>
          </div>
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

        <div className="relative rounded-lg shadow-md bg-slate-50 dark:bg-neutral-900">
          <img src={imgN2} alt="imgN2" className="w-full h-auto" />
          <div className="absolute top-0 left-0 z-10 p-2 bg-blue-400 rounded-br-lg">
            <h2 className="text-base font-bold text-white md:text-xl">Venta</h2>
          </div>
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

        <div className="relative rounded-lg shadow-md bg-slate-50 dark:bg-neutral-900">
          <img src={imgN3} alt="imgN3" className="w-full h-auto" />
          <div className="absolute top-0 left-0 z-10 p-2 rounded-br-lg bg-lime-400">
            <h2 className="text-base font-bold text-black md:text-xl">Alquiler</h2>
          </div>
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
                <p className="font-bold ">5,000</p>
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
    )
}
export default page1;
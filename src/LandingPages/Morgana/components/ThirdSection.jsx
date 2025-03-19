import React from "react";
import imgN5 from "../img/imgN5.webp";
import imgN6 from "../img/imgN6.webp";
import imgN7 from "../img/imgN7.webp";

const ThirdSection = () => {
  return (
    <div className="relative grid items-center justify-center w-full grid-cols-1 p-4 py-20 text-black min-h-auto bg-beige-50 dark:text-white dark:bg-neutral-900">
      <div className="m-auto grid grid-cols-1 md:grid-cols-2 gap-2  max-w-[80rem]">
        <div className="grid items-end grid-cols-2 gap-2 p-2 md:flex-row">
          <h1 className="text-6xl font-bold text-center text-beige-900 dark:text-beige-200">
            Autos
          </h1>
          <p className="text-xl">Colección de morgana</p>
        </div>

        <div className="flex flex-row items-end justify-end gap-2 ">
          <button className="flex flex-row items-center justify-center w-full p-1 font-bold text-white transition-all duration-700 ease-out md:w-12 md:h-12 rounded-xl md:rounded-full bg-neutral-800 hover:bg-black">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>

          <button className="flex flex-row items-center justify-center w-full p-1 font-bold text-white transition-all duration-700 ease-out border-2 md:w-12 md:h-12 rounded-xl md:rounded-full border-beige-700 hover:bg-beige-700">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:col-span-2">
          <div className="flex flex-col items-start justify-center gap-4 p-4 pb-8 bg-white rounded-xl">
            <div>
              <h1 className="font-bold text-start">Coupe Negro</h1>
              <p className="text-gray-400 text-start">
                <span className="font-bold text-black">$500</span>/day
              </p>
            </div>
            <img src={imgN5} alt="imgN5" className="w-full h-auto" />
          </div>

          <div className="flex flex-col items-start justify-center gap-4 p-4 pb-8 bg-white rounded-xl">
            <div>
              <h1 className="font-bold text-start">CHEVROLET BOLT EUV</h1>
              <p className="text-gray-400 text-start">
                <span className="font-bold text-black">$600</span>/day
              </p>
            </div>
            <img src={imgN6} alt="imgN5" className="w-full h-auto" />
          </div>

          <div className="flex flex-col items-start justify-center gap-4 p-4 pb-8 bg-white rounded-xl">
            <div>
              <h1 className="font-bold text-start">Nyobolt EV</h1>
              <p className="text-gray-400 text-start">
                <span className="font-bold text-black">$1,000</span>/day
              </p>
            </div>
            <img src={imgN7} alt="imgN5" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

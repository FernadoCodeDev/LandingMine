import React from "react";
import Carousel from "../ui/Carousel";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto gap-4 p-2 text-black bg-gray-900">
      <div className="m-auto flex flex-col md:flex-row justify-between w-full border-b-2 my-2 border-amber-50 p-2 max-w-[80rem]">
        <p className="text-2xl md:text-5xl font-fantasy text-amber-50">
          CONSIGUE TUS ENTRADAS
        </p>

        <div className="flex flex-row items-end justify-end gap-2">
      
          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 transition-all duration-700 ease-out bg-transparent border border-purple-400 rounded-full cursor-pointer hover:bg-purple-400">
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

      <Carousel />

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

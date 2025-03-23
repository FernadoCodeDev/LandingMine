import React from "react";
import imgN1 from "../img/imgN1.webp";
import imgN2 from "../img/imgN2.webp";
import imgN3 from "../img/imgN3.webp";
import imgN4 from "../img/imgN4.webp";
import imgN5 from "../img/imgN5.webp";
import imgN6 from "../img/imgN6.webp";
import imgN7 from "../img/imgN7.webp";
import imgN8 from "../img/imgN8.webp";

const FirstSection = () => {
  return (
    <div className="relative w-full min-h-screen p-2 bg-gray-900 text-amber-50">
      <div className="pt-20 md:pt-32 m-auto flex flex-col md:flex-row  justify-between w-full border-b-2 my-2 border-amber-50 p-2 max-w-[100rem]">
        <p className="md:text-3xl font-fantasy ">PATROCINADORES Y SOCIOS</p>

        <div className="flex flex-row items-end justify-end gap-2">
          <p className=" md:text-xl">VER TODOS LOS PATROCINADORES</p>
          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 border border-purple-400 rounded-full cursor-pointer">
            <svg
              class="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
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
          </div>
        </div>
      </div>

      <div className="m-auto max-w-[100rem] grid grid-cols-2 pt-4 md:grid-cols-4 gap-3">
        <div className="flex flex-col items-center justify-center p-4 bg-amber-50">
          <img src={imgN1} alt="imgN1" className="w-full h-auto " />
        </div>

        <div className="flex flex-col items-center justify-center p-4 border border-amber-50">
          <img src={imgN2} alt="imgN2" className="w-full h-auto " />
        </div>
        <div className="flex flex-col items-center justify-center p-4 border border-amber-50">
          <img src={imgN3} alt="imgN3" className="w-full h-auto " />
        </div>
        <div className="flex flex-col items-center justify-center p-4 border border-amber-50">
          <img src={imgN4} alt="imgN4" className="w-full h-auto " />
        </div>
        <div className="flex flex-col items-center justify-center p-4 border border-amber-50">
          <img src={imgN5} alt="imgN5" className="w-full h-auto " />
        </div>
        <div className="flex flex-col items-center justify-center p-4 border border-amber-50">
          <img src={imgN6} alt="imgN6" className="w-full h-auto " />
        </div>
        <div className="flex flex-col items-center justify-center p-4 border border-amber-50">
          <img src={imgN7} alt="imgN7" className="w-full h-auto " />
        </div>
        <div className="flex flex-col items-center justify-center p-4 border border-amber-50">
          <img src={imgN8} alt="imgN8" className="w-full h-auto " />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

import React from "react";
import imgN4 from "../img/imgN4.webp";
import HouseSVG from "./SVGComponents/HouseSVG";
import DateSVG from "./SVGComponents/DateSVG";
import PurchaseSVG from "./SVGComponents/PurchaseSVG";
import GuaranteeSVG from "./SVGComponents/guaranteeSVG";

const ThirdSection = () => {
  return (
    <div className="relative w-full min-h-screen p-4 text-black bg-slate-100 dark:text-white dark:bg-neutral-900">
      <h1 className="text-3xl font-bold text-center">Cómo funciona</h1>

      <div className="flex flex-col items-center justify-center mt-6">
        {/* Desktop Layout */}
        <div className="relative items-start hidden space-x-8 md:flex">
          <div className="relative flex items-center">
            <div className="flex flex-col items-center justify-center w-40 h-40 font-bold text-center text-white bg-blue-500">
              <HouseSVG width="40" />
              <p>Descubre la casa</p>
            </div>
            <div className="absolute w-16 h-1 -translate-y-1/2 bg-gray-400 left-full top-1/2"></div>
          </div>
          <div className="relative flex items-center">
            <div className="flex flex-col items-center justify-center w-40 h-40 font-bold text-center text-white bg-blue-500">
              <DateSVG width="40" />
              <p>Horario de visita</p>
            </div>
            <div className="absolute w-16 h-1 -translate-y-1/2 bg-gray-400 left-full top-1/2"></div>
          </div>
          <div className="relative flex items-center">
            <div className="flex flex-col items-center justify-center w-40 h-40 font-bold text-center text-white bg-blue-500">
              <PurchaseSVG width="40" />
              <p>Compra sin complicaciones</p>
            </div>
            <div className="absolute w-16 h-1 -translate-y-1/2 bg-gray-400 left-full top-1/2"></div>
          </div>
          <div className="z-10 flex flex-col items-center justify-center w-40 h-40 font-bold text-center text-white bg-blue-500 ">
            <GuaranteeSVG width="40" />
            <p>Garantía de recompra</p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="relative grid grid-cols-2 gap-4 md:hidden">
          <div className="relative flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-40 h-40 font-bold text-center text-white bg-blue-500">
              <HouseSVG width="40" />
              <p>Descubre la casa</p>
            </div>
            <div className="absolute w-16 h-1 -translate-y-1/2 bg-gray-400 left-full top-1/2"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-40 h-40 font-bold text-center text-white bg-blue-500">
              <DateSVG width="40" />
              <p>Horario de visita</p>
            </div>
            <div className="absolute w-1 h-12 -translate-x-1/2 bg-gray-400 top-full left-1/2"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-40 h-40 font-bold text-center text-white bg-blue-500">
              <GuaranteeSVG width="40" />
              <p>Garantía de recompra</p>
            </div>
            <div className="absolute w-16 h-1 -translate-y-1/2 bg-gray-400 left-full top-1/2"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-40 h-40 font-bold text-center text-white bg-blue-500">
              <PurchaseSVG width="40" />
              <p>Compra sin complicaciones</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative m-auto max-w-[70rem] mt-6 overflow-hidden">
        <img
          src={imgN4}
          alt="imgN4"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 flex flex-col h-auto p-4 m-4 text-black backdrop-blur-[2px] bg-white/20 md:bg-white md:w-1/3 md:ms-auto">
          <h1 className="pb-2 text-3xl font-bold">Find The Perfect House</h1>

          <p className="py-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            doloribus dignissimos aperiam officiis facere nisi doloremque alias
            minima asperiores hic odio ipsa dolorem molestiae praesentium nulla
            facilis, voluptates tempore maxime.
          </p>

          <div className="grid items-center grid-cols-3 gap-2">
            <div className="p-2 font-bold text-center text-white border border-gray-100 md:text-neutral-700">
              <p>1/4</p>
            </div>
            <div className="p-2 font-bold text-center text-white border border-gray-100 md:text-neutral-700">
              <p>Discover Houses</p>
            </div>

            <button className="flex flex-col font-bold text-center text-white transition-all duration-700 ease-out md:text-neutral-700 md:hover:text-black hover:text-slate-300 ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

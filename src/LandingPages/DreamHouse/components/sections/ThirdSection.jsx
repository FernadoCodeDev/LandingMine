import React from "react";
import imgN4 from "../../assets/img/imgN4.webp";
import HouseSVG from "../../assets/svg/HouseSVG";
import DateSVG from "../../assets/svg/DateSVG";
import PurchaseSVG from "../../assets/svg/PurchaseSVG";
import GuaranteeSVG from "../../assets/svg/guaranteeSVG";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto gap-4 p-4 text-black bg-slate-100 dark:text-white dark:bg-neutral-900">
      <h1 className="text-3xl font-bold text-center md:text-6xl">Cómo funciona</h1>

      <div className="flex flex-col items-center justify-center">
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

      <div className="relative m-auto max-w-[70rem] overflow-hidden">
        <img
          src={imgN4}
          alt="imgN4"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 flex flex-col h-auto p-4 m-4 text-black backdrop-blur-[2px] bg-white/20 md:bg-white md:w-1/3 md:ms-auto">
          <h1 className="pb-2 text-3xl font-bold">Encuentra la casa perfecta</h1>

          <p className="py-2">
            <span className="font-bold">DreamHouse</span> posee cientos de casas
            en venta cerca de usted. Vea las casas que están en venta o eche un
            vistazo a las que aún no han salido al mercado.
          </p>

          <div className="grid items-center grid-cols-1 gap-2">
           
            <button className="p-2 font-bold text-center text-white transition-all duration-700 ease-out bg-transparent border border-gray-100 md:hover:bg-blue-500 md:hover:text-white md:text-black hover:bg-white hover:text-black ">
              <p>Descubre tú nuevo Hogar</p>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

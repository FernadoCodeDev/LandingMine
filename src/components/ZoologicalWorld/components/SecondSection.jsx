import React from "react";
import PantheSVG from "./SVGComponents/pantheSVG";
import ElephantSVG from "./SVGComponents/elephantSVG";
import RhinocerosSVG from "./SVGComponents/rhinocerosSVG";
import HippopotamusSVG from "./SVGComponents/hippopotamus";
import DolphinSVG from "./SVGComponents/dolphinSVG";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-beige-500 md:text-2xl dark:text-white dark:bg-neutral-900">
      <div className="w-full h-[200px] gap-2 flex box-border absolute top-[50%] transform translate-y-[50%]">
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-orange-500 border-4 border-orange-600 hover:grow-[4] hover:max-w-full rounded-2xl hover:bg-orange-600 ">
          <h1 className="text-xl font-bold text-orange-400 ">VIP</h1>
          <PantheSVG />
          <h1 className="text-xl font-bold text-orange-400 ">text</h1>
          <h1 className="hidden text-xl font-bold text-white">Comprar</h1>
        </div>

        {/* Tarjeta de Elefante */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-yellow-500 border-4 border-yellow-600 hover:grow-[4]  hover:max-w-full rounded-2xl hover:bg-yellow-600 ">
          <h1 className="text-xl font-bold text-yellow-600 ">VIP</h1>
          <ElephantSVG />
          <h1 className="text-xl font-bold text-yellow-600 ">text</h1>
          <h1 className="hidden text-xl font-bold text-white">Comprar</h1>
        </div>

        {/* Tarjeta de Rinoceronte */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-orange-600 border-4 border-orange-700 hover:grow-[4]  hover:max-w-full rounded-2xl hover:bg-orange-700 ">
          <h1 className="text-xl font-bold text-orange-800 ">VIP</h1>
          <RhinocerosSVG />
          <h1 className="text-xl font-bold text-orange-800 ">text</h1>
          <h1 className="hidden text-xl font-bold text-white">Comprar</h1>
        </div>

        {/* Tarjeta de Hipopotamo */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-purple-700 border-4 border-purple-800 hover:grow-[4]  hover:max-w-full rounded-2xl hover:bg-purple-800 ">
          <h1 className="text-xl font-bold text-purple-400 ">VIP</h1>
          <HippopotamusSVG />
          <h1 className="text-xl font-bold text-purple-400 ">text</h1>
          <h1 className="hidden text-xl font-bold text-white">Comprar</h1>
        </div>

        {/* Tarjeta de Delfín */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all bg-blue-500 border-4 border-blue-600 durati hover:grow-[4]  hover:max-w-fullon-500 rounded-2xl hover:bg-blue-600 ">
          <h1 className="text-xl font-bold text-blue-600">VIP</h1>
          <DolphinSVG />
          <h1 className="text-xl font-bold text-blue-600">text</h1>
          <h1 className="hidden text-xl font-bold text-white">Comprar</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

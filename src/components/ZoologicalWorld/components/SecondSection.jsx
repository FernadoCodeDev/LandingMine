import React from "react";
import PantheSVG from "./SVGComponents/pantheSVG";
import ElephantSVG from "./SVGComponents/elephantSVG";
import RhinocerosSVG from "./SVGComponents/rhinocerosSVG";
import HippopotamusSVG from "./SVGComponents/hippopotamus";
import DolphinSVG from "./SVGComponents/dolphinSVG";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-beige-500 md:text-2xl dark:text-white dark:bg-neutral-900">
      <div className="m-auto max-w-[70rem] grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tarjeta VIP */}
        <div className="flex flex-col items-center justify-center p-4 text-center transition-all duration-700 ease-out bg-orange-500 border-4 border-orange-600 hover:col-span-2 rounded-2xl hover:bg-orange-600">
          <h1 className="text-xl font-bold text-orange-400">VIP</h1>
          <PantheSVG />
          <h1 className="text-xl font-bold text-orange-400">text</h1>
          <h1 className="text-xl font-bold text-white">Comprar</h1>
        </div>

        {/* Tarjeta de Elefante */}
        <div className="grid items-center justify-center grid-cols-2 p-4 text-center transition-all duration-500 bg-yellow-500 border-4 border-yellow-600 rounded-2xl hover:bg-yellow-600">
          <h1 className="col-span-2 text-xl font-bold text-yellow-600">text</h1>
          <ElephantSVG />
          <h1 className="text-xl font-bold text-yellow-600">text</h1>
          <h1 className="text-xl font-bold text-yellow-600">text</h1>
          <h1 className="col-span-2 text-xl font-bold text-white">Comprar</h1>
        </div>

        {/* Tarjeta de Rinoceronte */}
        <div className="flex flex-col items-center justify-center p-4 text-center transition-all duration-500 bg-orange-600 border-4 border-orange-700 rounded-2xl hover:bg-orange-700">
          <h1 className="text-xl font-bold text-orange-400 ">text</h1>
          <RhinocerosSVG />
          <h1 className="text-xl font-bold text-orange-400">text</h1>
          <h1 className="text-xl font-bold text-white">Comprar</h1>
        </div>

        {/* Tarjeta de Hipopotamo */}
        <div className="flex flex-col items-center justify-center p-4 text-center transition-all duration-500 bg-purple-700 border-4 border-purple-800 rounded-2xl hover:bg-purple-800">
          <h1 className="text-xl font-bold text-purple-500 ">text</h1>
          <HippopotamusSVG />
          <h1 className="text-xl font-bold text-purple-500 ">text</h1>
          <h1 className="text-xl font-bold text-white ">Comprar</h1>
        </div>

        {/* Tarjeta de Delfín */}
        <div className="grid items-center justify-center grid-cols-2 col-span-2 p-4 text-center transition-all duration-500 bg-blue-500 border-4 border-blue-600 rounded-2xl hover:bg-blue-600">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-blue-700 ">text</h1>
            <h1 className="text-xl font-bold text-blue-700 ">text</h1>
            <h1 className="text-xl font-bold text-blue-700 ">text</h1>
          </div>
          <DolphinSVG />
          <h1 className="col-span-2 text-xl font-bold text-white">Comprar</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

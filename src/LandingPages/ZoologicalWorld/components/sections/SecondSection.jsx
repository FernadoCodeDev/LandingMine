import React from "react";
import PantheSVG from "../../assets/svg/pantheSVG";
import ElephantSVG from "../../assets/svg/elephantSVG";
import RhinocerosSVG from "../../assets/svg/rhinocerosSVG";
import HippopotamusSVG from "../../assets/svg/hippopotamus";
import DolphinSVG from "../../assets/svg/dolphinSVG";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto gap-4 p-4 text-black bg-white md:flex md:text-2xl dark:text-white dark:bg-neutral-900">
      <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
        Aventura en Zoological World
      </h1>
      <p className="text-base text-center md:text-xl max-w-[40rem]">
        Elige la mejor opción para tu aventura en Zoological World y vive
        momentos inolvidables con la naturaleza.
      </p>

      {/* Content less than lg */}
      {/* On mobile devices, it wouldn't be possible to hover over images because you'd have to hold it down. */}

      <div className="grid items-center w-full grid-cols-1 gap-4 m-auto sm:grid-cols-2 lg:hidden ">
        <div className="flex flex-col items-center justify-center p-2 bg-orange-500 border-4 border-orange-600 ">
          <PantheSVG />
        </div>

        <div className="flex flex-col items-center justify-center p-2 bg-yellow-400 border-4 border-yellow-500 ">
          <ElephantSVG />
        </div>

        <div className="flex flex-col items-center justify-center p-2 bg-orange-600 border-4 border-orange-700">
          <RhinocerosSVG />
        </div>

        <div className="flex flex-col items-center justify-center p-2 bg-purple-600 border-4 border-purple-800">
          <HippopotamusSVG />
        </div>

        <div className="flex flex-col items-center justify-center p-2 bg-blue-500 border-4 border-blue-600 ">
          <DolphinSVG />
        </div>
      </div>

      {/* Content Greater than lg*/}
      <div className=" hidden lg:flex p-2 m-auto max-w-[100rem] w-full h-auto box-border transform ">
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-orange-500 border-4 border-orange-600 hover:grow-[4]">
          <div className="flex flex-col items-center">
            <PantheSVG width="80" height="auto"/>
          </div>
        </div>

        {/* Elephant Card */}
        <div className=" flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-yellow-400 border-4 border-yellow-500 hover:grow-[4]">
          <div className="flex flex-col items-center">
            <ElephantSVG width="80" height="auto"/>
          </div>
        </div>

        {/* Rhino Card */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-orange-600 border-4 border-orange-700 hover:grow-[4]">
          <div className="flex flex-col items-center">
            <RhinocerosSVG width="80" height="auto"/>
          </div>
        </div>

        {/* Hippopotamus Card */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-purple-700 border-4 border-purple-800 hover:grow-[4]">
          <div className="flex flex-col items-center">
            <HippopotamusSVG width="80" height="auto"/>
          </div>
        </div>

        {/* Dolphin Card */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all bg-blue-500 border-4 border-blue-600 duration hover:grow-[4] ">
          <div className="flex flex-col items-center">
            <DolphinSVG width="80" height="auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

import React from "react";
import TrayFoodSVG from "./SVGComponents/TrayFoodSVG";
import ParkingSVG from "./SVGComponents/ParkingSVG";
import GateSVG from "./SVGComponents/GateSVG";
import OpenGateSVG from "./SVGComponents/OpenGateSVG";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen gap-4 p-4 text-black bg-white md:text-2xl dark:text-white dark:bg-neutral-900">
      <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
        TEXT
      </h1>
      <div className=" max-w-[80rem] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-4">
          <TrayFoodSVG />
          <h1 className="font-bold text-center">Text</h1>
          <p className="text-center">Text</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <ParkingSVG />
          <h1 className="font-bold text-center">Text</h1>
          <p className="text-center">Text</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
        TEXT
      </h1>
      <div className=" max-w-[80rem] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-4">
          <GateSVG />
          <h1 className="font-bold text-center">Text</h1>
          <p className="text-center">Text</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <OpenGateSVG />
          <h1 className="font-bold text-center">Text</h1>
          <p className="text-center">Text</p>
        </div>
      </div>

    
    </div>
  );
};

export default ThirdSection;
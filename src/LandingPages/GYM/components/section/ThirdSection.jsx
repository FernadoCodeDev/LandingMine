import React from "react";
import Carousel from "../ui/Carousel";

const ThirdSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-neutral-800">
      <div className="flex flex-col justify-center w-full h-20 text-center bg-yellow-300 ">
        <h1 className="font-mono font-bold text-[1rem] lg:text-[2rem]">
          VIVE LA EXPERIENCIA DE FITNESS DEFINITIVA
        </h1>
      </div>

      <Carousel />
    </div>
  );
};

export default ThirdSection;

import React from "react";
import Carousel from "../ui/Carousel";

const ThirdSection = () => {
  return (
    <div className="relative w-full p-4 text-black bg-white md:text-2xl dark:text-white min-h-auto dark:bg-neutral-900">
      <div className="grid grid-cols-1 gap-4 m-auto max-w-[70rem] ">
        <Carousel />

        <div className="absolute inset-0 z-10 flex-row items-start justify-center hidden mt-40 text-center pointer-events-none md:flex">
          <h1 className="text-5xl font-extrabold text-transparent stroke-white">
            Lo Mejor De La Naturaleza
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

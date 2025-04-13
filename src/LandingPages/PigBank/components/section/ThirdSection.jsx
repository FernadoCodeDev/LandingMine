import React from "react";
import Carousel from "../ui/Carousel";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto p-4 text-black bg-gray-100 dark:text-white dark:bg-neutral-800">
      <div className="flex flex-col items-center justify-center text-center gap-4 m-auto max-w-[80rem]">
        <h1 className="text-2xl md:text-4xl font-bold text-[1rem] lg:text-[2rem]">
          Descubre las tarjetas de <span className="text-red-400">Pig Bank</span>
        </h1>

        <Carousel />
      </div>
    </div>
  );
};

export default ThirdSection;

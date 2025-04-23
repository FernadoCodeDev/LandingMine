import React from "react";
import Package from "./Package";

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

      <Package />
    </div>
  );
};

export default SecondSection;

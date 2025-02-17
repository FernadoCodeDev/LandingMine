import React from "react";
import ImageGym2 from "../img/ImageGym2.webp";

const FirstSection = () => {
  return (
    <div className="relative grid grid-cols-1 p-4 md:grid-cols-2">
      <div>
        <img src={ImageGym2} alt="ImageGym2" className="w-full h-auto" />
      </div>

      <div className="relative p-4 text-white">
        <h1 className="absolute leading-none inset-0 font-mono font-bold text-center opacity-10 text-neutral-500 text-[6rem] lg:text-[10rem] z-1 translate-y-6">
          WHO WE ARE?
        </h1>

        <h1 className="font-mono font-bold text-start text-[2rem] lg:text-[4rem] z-2">
          WHO WE ARE?
        </h1>
        <p className="text-start text-[1rem] lg:text-[1.4rem] p-1 z-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          laboriosam sunt repudiandae deserunt tenetur, odit error. Similique
          impedit, ea minus.
        </p>

        <p className="text-start text-[1rem] lg:text-[1.4rem] p-1 z-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          laboriosam sunt repudiandae deserunt tenetur, odit error. Similique
          impedit, ea minus.
        </p>
      </div>

    <div></div>

      <button className="w-full px-6 py-2 mt-4 font-semibold text-black transition-all duration-700 ease-out bg-yellow-300 rounded-tl-full rounded-br-full hover:bg-yellow-500">
        LEARN MORE
      </button>
    </div>
  );
};

export default FirstSection;

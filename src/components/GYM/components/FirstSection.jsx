import React from "react";
import ImageGym2 from "../img/ImageGym2.webp";

const FirstSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img src={ImageGym2} alt="ImageGym2" className="w-full h-auto" />
      </div>

      <div className="text-while">
        <h1 className="font-mono">WHO WE ARE?</h1>
        <p className="text-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          laboriosam sunt repudiandae deserunt tenetur, odit error. Similique
          impedit, ea minus.
        </p>

        <p className="text-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          laboriosam sunt repudiandae deserunt tenetur, odit error. Similique
          impedit, ea minus.
        </p>

        <button className="w-full px-6 py-2 mt-4 font-semibold text-black transition-all duration-700 ease-out bg-yellow-300 rounded-tl-full rounded-br-full md:w-60 lg:w-96 hover:bg-yellow-500">
            LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default FirstSection;

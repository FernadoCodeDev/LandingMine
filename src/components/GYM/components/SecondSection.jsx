import React from "react";
import ImageGym3 from "../img/ImageGym3.webp";
import ImageGym4 from "../img/ImageGym4.webp";
import ImageGym5 from "../img/ImageGym5.webp";
import ImageGym6 from "../img/ImageGym6.webp";


const SecondSection = () => {
  return (
    <div className="grid items-center grid-cols-2 gap-4 p-4 text-center text-white md:grid-cols-4">
      <h1 className="text-[2rem] col-span-2 font-mono font-bold md:col-span-4 ">
        Ofrecemos algo para <span className="text-yellow-300">todos</span>
      </h1>

      <img src={ImageGym3} alt="ImageGym2" className="w-full h-auto" />
      <img src={ImageGym4} alt="ImageGym2" className="w-full h-auto" />
      <img src={ImageGym5} alt="ImageGym2" className="w-full h-auto" />
      <img src={ImageGym6} alt="ImageGym2" className="w-full h-auto" />
    </div>
  );
};

export default SecondSection;

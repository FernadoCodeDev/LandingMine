import React from "react";
import PingBankCard from "../img/PingBankCard.webp";
import SVG1 from "./svgcomponets/svg1";
import SVG2 from "./svgcomponets/svg2";
import SVG3 from "./svgcomponets/svg3";
import SVG4 from "./svgcomponets/svg4";



const FirstSection = () => {
  return (
    <div className="relative w-full min-h-screen p-4 bg-gray-100 dark:bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            The Strategic choice
          </h1>
          <p className="text-black text-l dark:text-white text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            similique delectus expedita dolorum perspiciatis saepe ratione
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-3">
        <div>
          <div className="w-20 h-20 p-2 bg-red-400 rounded-full">
            <SVG1 />
          </div>
          <h1>Lorem</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est </p>
        </div>

        <div>
          <div className="w-20 h-20 p-2 bg-red-400 rounded-full">
            <SVG2 />
          </div>
          <h1>Lorem</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est </p>
        </div>

        <div>
          <div className="w-20 h-20 p-2 bg-red-400 rounded-full">
            <SVG3 />
          </div>
          <h1>Lorem</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est </p>
        </div>

        <div>
          <div className="w-20 h-20 p-2 bg-red-400 rounded-full">
            <SVG4 />
          </div>
          <h1>Lorem</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est </p>
        </div>


        <div className="md:order-2">
          <img
            src={PingBankCard}
            alt="PingBankCard"
            className="w-full h-auto md:rotate-[70deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

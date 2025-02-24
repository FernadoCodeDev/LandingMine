import React from "react";
import PingBankCard from "../img/PingBankCard.webp";

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

      <div className="grid grid-cols-1 mt-5 md:grid-cols-3">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
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

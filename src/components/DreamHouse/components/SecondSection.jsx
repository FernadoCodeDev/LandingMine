import React from "react";
import imgN1 from "../img/imgN1.webp";
import Location from "./SVGComponents/Location";

const SecondSection = () => {
  return (
    <div className="relative w-full min-h-screen p-4 text-black bg-white dark:text-white dark:bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2 m-auto max-w-[70rem]">
        <h1 className="m-auto text-2xl font-bold">Popular Property</h1>

        <p className="text-start text-slate-800 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim
          nemo necessitatibus neque optio hic recusandae cum soluta sed aliquid
          nihil explicabo, dignissimos velit provident? Beatae ab non error
          officiis.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-2 m-auto max-w-[70rem]">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <button className="p-2 bg-blue-400">Residencial</button>
          <button className="p-2 text-black transition-all duration-700 ease-out border border-gray-300 bg-slate-100 hover:bg-slate-300">
            Residencial
          </button>

          <button className="p-2 text-black transition-all duration-700 ease-out border border-gray-300 bg-slate-100 hover:bg-slate-300">
            Residencial
          </button>
        </div>

        <button className="w-full p-2 text-white transition-all duration-700 ease-out border md:ms-auto md:w-1/2 bg-neutral-900 hover:bg-black">
          Residencial
        </button>
      </div>

      <div className="grid grid-cols-1 mt-6 m-auto max-w-[70rem] md:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md dark:bg-neutral-800">
          <img src={imgN1} alt="imgN1" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold dark:text-white">
              The Queen Inside - Type 3
            </h2>
            <div className="flex flex-row gap-2 text-black dark:text-white">
              <Location width="20" />
              <p className="text-slate-600 dark:text-slate-300">
                Evergreen Chemists
              </p>
            </div>

            <button>see Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

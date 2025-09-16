import React from "react";
import Services from "./Services";

const FourthSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto text-black bg-zinc-950 md:text-2xl dark:text-white ">
      <div className="w-full bg-beige-300 dark:bg-zinc-900">
        <div className="max-w-[80rem] grid grid-cols-1 gap-4 p-2 m-auto md:grid-cols-2">
          <div className="grid grid-cols-2 gap-1 ">
            <h1 className="col-span-2 font-serif text-xl font-bold text-center md:text-2xl lg:text-3xl">
              EXPERIENCIAS DE LUJO
            </h1>
            <h1 className="col-start-2 font-serif text-xl font-bold text-center md:text-2xl lg:text-3xl">
              A TU ALCANCE
            </h1>
          </div>

          <div className="grid grid-cols-2">
            <button className="w-full col-span-2 p-2 font-serif text-xl font-bold text-blue-900 transition-all duration-700 ease-out bg-transparent border-2 border-blue-900 dark:text-beige-100 hover:dark:dark:text-blue-900 md:col-span-1 md:col-start-2 rounded-xl md:rounded-full md:w-32 md:h-32 hover:bg-blue-900 hover:text-beige-100 dark:border-beige-100 dark:hover:bg-beige-100 ">
              Descubrir más
            </button>
          </div>

        <Services />
        </div>
      </div>

      {/*Round container similar to an ellipse shape width 100% 100% height, and at the top 50% and 100% (100% for top 0% for bottom) */}
      <div
        className="flex items-center justify-center w-full h-[8rem] p-4 bg-beige-200 dark:bg-zinc-950"
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      ></div>
    </div>
  );
};

export default FourthSection;

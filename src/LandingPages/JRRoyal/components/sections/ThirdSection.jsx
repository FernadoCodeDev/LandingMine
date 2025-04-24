import React from "react";
import imgN4 from "../../assets/img/imgN4.webp";
import imgN5 from "../../assets/img/imgN5.webp";
import imgN6 from "../../assets/img/imgN6.webp";
import imgN7 from "../../assets/img/imgN7.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto text-black bg-slate-950 md:text-2xl dark:text-white ">
      <div className="w-full bg-beige-100 dark:bg-neutral-900">
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2">
            <div className="flex flex-col items-center w-full gap-2">
              <img
                src={imgN4}
                alt="imgN4"
                className="w-full h-auto rounded-xl"
              />

              <div className="flex flex-col w-full gap-2 px-2">
                <h1 className="font-serif text-start">Lorem</h1>
                <div className="flex flex-row gap-2">
                  <div className="pr-2 border-r-2 border-gray-500">SVG</div>
                  <div className="pr-2 border-r-2 border-gray-500">SVG</div>
                  <div className="">SVG</div>
                </div>
                <button className="w-full p-2 font-serif text-xl font-bold text-blue-900 transition-all duration-700 ease-out bg-transparent border-2 border-blue-900 md:w-1/3 dark:text-beige-100 hover:dark:dark:text-blue-900 rounded-xl hover:bg-blue-900 hover:text-beige-100 dark:border-beige-100 dark:hover:bg-beige-100 ">
                  Lorem
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <img
                src={imgN5}
                alt="imgN5"
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="flex flex-col items-center ">
              <img
                src={imgN6}
                alt="imgN6"
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="flex flex-col items-center">
              <img
                src={imgN7}
                alt="imgN7"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Round container similar to an ellipse shape width 100% 100% height, and at the top 50% and 100% (100% for top 0% for bottom) */}
      <div
        className="flex items-center justify-center w-full h-[8rem] p-4 bg-beige-100 dark:bg-neutral-900"
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      ></div>
    </div>
  );
};

export default ThirdSection;

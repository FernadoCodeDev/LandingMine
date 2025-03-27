import React from "react";
import ImgN1 from "../img/ImgN1.webp";
import ImgN2 from "../img/ImgN2.webp";
import ImgN3 from "../img/ImgN3.webp";
import ImgN4 from "../img/ImgN4.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full  p-4 bg-stone-300 text-stone-700 dark:text-slate-200 bg-bg-stone-300 dark:bg-neutral-800 min-h-auto ">
      <h1 className="font-mono font-bold text-2xl md:text-5xl text-start mb-6 mx-auto max-w-[70rem]">
        CONSIGUE TODO EN UN SOLO LUGAR
      </h1>

      <div className="h-auto grid justify-center grid-cols-2 gap-4 p-2 m-auto md:grid-cols-4 max-w-[80rem]">
        <div className="z-10 flex flex-col overflow-hidden">
          <img
            src={ImgN1}
            alt="ImgN1"
            className="object-cover w-full h-full md:pt-20"
          />

          <div className="p-4 text-center text-white border-2 border-stone-700 bg-stone-400">
            <h1 className="pb-2 font-mono text-xl font-bold lg:text-2xl text-stone-700">
              CONTÁCTENOS
            </h1>
          </div>
        </div>

        <div className="z-10 flex flex-col overflow-hidden">
          <img
            src={ImgN2}
            alt="ImgN2"
            className="object-cover w-full h-full md:pt-12"
          />

          <div className="p-4 text-center text-white border-2 border-stone-700 bg-stone-400">
            <h1 className="pb-2 font-mono text-base font-bold md:text-xl lg:text-2xl text-stone-700">
              CONTÁCTENOS
            </h1>
          </div>
        </div>

        <div className="z-10 flex flex-col overflow-hidden">
          <img src={ImgN3} alt="ImgN3" className="object-cover w-full h-full" />

          <div className="p-4 text-center text-white border-2 border-stone-700 bg-stone-400">
            <h1 className="pb-2 font-mono text-base font-bold md:text-xl lg:text-2xl text-stone-700">
              CONTÁCTENOS
            </h1>
          </div>
        </div>

        <div className="z-10 flex flex-col overflow-hidden ">
          <img
            src={ImgN4}
            alt="ImgN4"
            className="object-cover w-full h-full md:pt-28"
          />

          <div className="p-4 text-center text-white border-2 border-stone-700 bg-stone-400">
            <h1 className="pb-2 font-mono text-base font-bold md:text-xl lg:text-2xl text-stone-700">
              CONTÁCTENOS
            </h1>
          </div>
        </div>

        <h1 className="z-0  relative rotate-[355deg] -top-[2rem] lg:-top-[3rem] text-[14vw] lg:text-[16vw] xl:text-[10.5vw] font-bold text-transparent stroke-stone-700 dark:stroke-white">
        COOKTOPIA
        </h1>
      </div>
    </div>
  );
};

export default ThirdSection;

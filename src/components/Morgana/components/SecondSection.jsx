import React from "react";
import imgN4 from "../img/imgN4.webp";

const SecondSection = () => {
  return (
    <div className="relative grid items-center justify-center w-full min-h-screen grid-cols-1 p-4 h-80 bg-beige-800 ">
      <div className="">
        {/* Content Left*/}
        <div className="relative z-10 flex flex-col items-center justify-between w-full h-full gap-3 md:hidden">
          <div className="z-10 flex flex-row items-center justify-between gap-8">
            <h1 className="text-5xl font-bold text-center lg:text-7xl text-beige-900 ">
              Mejor
            </h1>

            <h1 className="text-5xl font-bold text-center lg:text-7xl text-beige-200 ">
              Oferta
            </h1>
          </div>

          <p className="text-4xl font-bold">Ford Focus</p>
          <p className="text-2xl">por $400/día</p>

          <button className="flex justify-center w-full h-auto p-2 m-auto font-bold text-white transition-all duration-700 ease-out md:w-1/2 bg-beige-500 hover:bg-beige-700 ">
            Rentar ahora
          </button>
        </div>

        <div className="relative z-10 flex flex-col items-end justify-between w-full h-full">
          <img
            src={imgN4}
            alt="imgN4"
            className="max-w-[20rem] h-auto md:max-w-[28rem] lg:min-w-[38rem] xl:min-w-[45rem] 2xl:min-w-[70rem]"
          />
        </div>

        <div className="absolute bottom-0 left-0 h-full w-[50%] bg-beige-200">
          {/* Content Left*/}
          <div className="relative z-10 flex-col items-center justify-center hidden w-full h-full gap-3 m-auto md:flex">
            <h1 className="text-6xl font-bold text-center lg:text-8xl text-beige-900 ">
              Mejor Oferta
            </h1>
            <p className="font-bold md:text-xl lg:text-4xl">Ford Focus</p>
            <p className=" md:text-xl lg:text-4xl">por $400/día</p>

            <button className="flex justify-center w-full h-auto p-2 font-bold text-white transition-all duration-700 ease-out lg:text-3xl md:w-1/2 bg-beige-700 hover:bg-beige-900 ">
              Rentar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

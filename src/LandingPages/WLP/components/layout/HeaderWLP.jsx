import React from "react";
import DarkMode from "../../../GlobalComponents/DarkMode";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import WLPLogo from "../../assets/img/WLPLogo.webp";
import LeftPose from "../../assets/img/LeftPose.webp";
import RightPose from "../../assets/img/RightPose.webp";

const HeaderWLP = () => {
  return (
    <div className="relative w-full h-dvh bg-orange-50">
      <div className="relative flex flex-col items-center justify-center">

        <div className="flex flex-row justify-between w-full max-w-[100rem] p-4 mx-auto">

          <div className="z-50 hidden mx-auto md:block md:w-auto ">
            <MobileMenu
              textColor="text-slate-800 transition-all duration-700 ease-out"
              hoverColor="hover:text-amber-950"
              bgColor="bg-transparent"
              invertColor="invert"
              className="z-40"
            />
          </div>

          <img
            src={WLPLogo}
            alt="WLPLogo"
            className="object-contain w-40 h-auto mx-auto cursor-pointer "
          />

          <div className="z-50 m-auto backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
            <DarkMode />
          </div>

        </div>

          <div className="z-50 block mx-auto md:hidden md:col-span-1 md:border-b-8 md:border-slate-800 md:order-1 md:w-auto ">
          <MobileMenu
            textColor="text-slate-800 transition-all duration-700 ease-out"
            hoverColor="hover:text-amber-950"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-black/20 md:bg-transparent"
            invertColor="invert"
            className="z-50"
          />
        </div>


        <div className="relative order-4 col-span-2 text-center md:col-span-3">
          <div className="z-10 grid items-center justify-center grid-cols-2 md:grid-cols-3">
            <div className="relative order-1 ">
              <img
                src={LeftPose}
                alt="LeftPose"
                className="w-40 h-auto m-auto sm:48 lg:w-60 xl:w-full lg:max-w-[20rem] "
              />

              <div className="-top-[6rem] absolute inset-0 flex items-center justify-center text-center max-w-[30rem] p-4 m-auto z-10 text-teal-600 font-antonio">
                <div className="grid items-center justify-center grid-cols-1 opacity-75 ">
                  <div className="flex flex-row gap-1">
                    {/* First text in horizontal */}
                    <h1 className="text-6xl font-bold md:text-6xl 2xl:text-9xl">LUCHA</h1>

                    {/* Second text in vertical */}
                    <h2 className="flex flex-col text-xl font-bold leading-none md:text-base 2xl:text-4xl">
                      <span>C</span>
                      <span>O</span>
                      <span>N</span>
                    </h2>
                  </div>
                  <div className="">
                    {/* Third text in horizontal */}
                    <h1 className="text-6xl font-bold md:text-6xl 2xl:text-9xl text-start">
                      HONOR
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid items-center order-3 grid-cols-3 col-span-2 gap-4 md:grid-cols-1 md:col-span-1 md:order-2">
              <div className="w-full h-1 md:w-[4px]  bg-slate-800 justify-self-center md:h-40"></div>
              <h1 className="text-2xl font-bold text-slate-800 md:m-2">VS</h1>
              <div className="w-full h-1  md:w-[4px] bg-slate-800 justify-self-center md:h-40"></div>
            </div>

            <div className="relative order-2 md:order-3">
              <img
                src={RightPose}
                alt="RightPose"
                className="w-40 h-auto m-auto sm:48 lg:w-60 xl:w-full lg:max-w-[20rem]"
              />

              <div className="-top-[6rem] absolute inset-0 flex items-center justify-center max-w-[30rem] p-4 m-auto z-10 text-orange-500 opacity-75 font-antonio">
                <div className="grid items-center justify-center grid-cols-1 ">
                  <div className="flex flex-row gap-1">
                    {/* First text in horizontal */}
                    <h2 className="flex flex-col text-xl font-bold leading-none md:text-base 2xl:text-4xl">
                      <span>C</span>
                      <span>O</span>
                      <span>N</span>
                    </h2>

                    {/* Second text in vertical */}
                    <h1 className="text-6xl font-bold text-end md:text-6xl 2xl:text-9xl">
                      Gana
                    </h1>
                  </div>
                  <div className="">
                    {/* Third text in horizontal */}
                    <h1 className="text-6xl font-bold text-start md:text-6xl 2xl:text-9xl">
                      Pasión
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute w-1/12 max-w-[10rem]  left-0 bottom-[0%] md:bottom-[25%] bg-slate-800 md:h-80 rounded-r-3xl">
        <div className="flex flex-col p-2 m-auto text-xl font-bold text-center text-orange-50">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>N</span>
          <span>C</span>
          <span>I</span>
          <span>A</span>
        </div>
      </div>
      <div className="hidden md:block  absolute w-1/12 max-w-[10rem] right-0 bottom-[0%] md:bottom-[25%] bg-slate-800  md:h-80 rounded-l-3xl">
        <div className="flex flex-col p-2 m-auto text-xl font-bold text-center text-orange-50">
          <span>D</span>
          <span>I</span>
          <span>S</span>
          <span>C</span>
          <span>I</span>
          <span>P</span>
          <span>L</span>
          <span>I</span>
          <span>N</span>
          <span>A</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderWLP;

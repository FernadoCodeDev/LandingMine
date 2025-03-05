import React from "react";

import WLPLogo from "../img/WLPLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";
import LeftPose from "../img/LeftPose.webp";
import RightPose from "../img/RightPose.webp";

const HeaderWLP = () => {
  return (
    <div className="relative w-full min-h-screen bg-orange-50">
      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:border-b-8 md:border-slate-800 md:order-1 md:w-auto ">
          <MobileMenu
            textColor="text-slate-800 transition-all duration-700 ease-out"
            hoverColor="hover:text-amber-950"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-black/20 md:bg-transparent"
            invertColor="invert"
          />
        </div>

        <img
          src={WLPLogo}
          alt="WLPLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative order-4 col-span-2 text-center md:col-span-3">
          <div className="z-10 grid items-center justify-center grid-cols-2 md:grid-cols-3">
            <div className="relative order-1 ">
              <img
                src={LeftPose}
                alt="LeftPose"
                className="m-auto w-full max-w-[20rem] h-auto object-con "
              />

              <div className="text-cyan-400 font-antonio absolute inset-0 flex flex-col items-center justify-center text-center max-w-[30rem] p-4 m-auto z-10">
                <h1 className="text-2xl font-bold">LUCHA</h1>
                <h2 className="text-2xl font-bold">CON </h2>
                <h1 className="text-2xl font-bold">HONOR</h1>
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
                className="m-auto max-w-[20rem] object-cover w-full h-auto "
              />

              <div className="text-orange-400 font-antonio absolute inset-0 flex flex-col items-center justify-center text-center max-w-[30rem] p-4 m-auto z-10">
              <h1 className="text-2xl font-bold">GANA</h1>
                <h2 className="text-2xl font-bold">CON </h2>
                <h1 className="text-2xl font-bold">PASIÓN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute w-1/12 max-w-[10rem] rounded-tr-3xl left-0 bottom-[0%] md:bottom-[25%] bg-slate-800 md:h-80   rounded-r-3xl"></div>
      <div className="hidden md:block  absolute w-1/12 max-w-[10rem] rounded-bl-3xl right-0 bottom-[0%] md:bottom-[25%] bg-slate-800  md:h-80 rounded-l-3xl"></div>
    </div>
  );
};

export default HeaderWLP;

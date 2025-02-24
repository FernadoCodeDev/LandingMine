import React from "react";
import PigBankLogo from "../img/PigBankLogoNo1.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderPB = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="grid items-center justify-between grid-cols-2 p-4 md:grid-cols-3">
        <div className="order-1 m-auto">
          <img
            src={PigBankLogo}
            alt="PigBankLogo"
            className="w-full h-auto md:max-w-80"
          />
        </div>

        <div className="order-3 col-span-2 m-auto md:col-span-1 md:order-2 ">
          <MobileMenu
            textColor="text-black dark:text-white"
            hoverColor="hover:text-red-500 dark:hover:text-red-500 "
            bgColor="bg-transparent"
            invertColor="invert dark:invert-0"
          />
        </div>
        <div className="order-2 m-auto">
          <DarkMode />
        </div>
      </div>

      <div className="absolute w-1/2 max-w-[10rem] rounded-tr-3xl left-0 bottom-[50%] bg-red-500 h-40 clip-trapezoid-left"></div>
      <div className="absolute w-1/5 max-w-[10rem] rounded-bl-3xl right-0 bottom-[50%] bg-red-400 h-40 clip-trapezoid-right"></div>
    </div>
  );
};

export default HeaderPB;

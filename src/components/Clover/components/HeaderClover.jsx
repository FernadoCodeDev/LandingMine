import React from "react";
import CloverLogo from "../img/CloverLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderClover = () => {
  return (
    <div className="relative w-full min-h-screen bg-sky-800">
      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-2 md:w-auto md:h-20 md:bg-white/20 md:bg-backdrop-blur-[2px]">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-orange-300"
            bgColor="bg-backdrop-blur-[2px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <img
          src={CloverLogo}
          alt="CloverLogo"
          className="order-1 max-w-[15rem] h-auto mx-auto cursor-pointer md:order-1"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-white/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative order-4 col-span-2 md:col-span-3"></div>
      </div>
    </div>
  );
};

export default HeaderClover;

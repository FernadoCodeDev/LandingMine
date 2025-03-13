import React from "react";
import JRRoyalLogo from "../img/JRRoyalLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";
import imgN1 from "../img/imgN1.webp";

const HeaderJR = () => {
  return (
    <div className="relative w-full min-h-screen bg-blue-900">
      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 items-center md:order-1 md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-white/20">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-beige-200"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <img
          src={JRRoyalLogo}
          alt="JRRoyalLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-white/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative order-4 col-span-2 text-center md:col-span-3"></div>
      </div>
    </div>
  );
};

export default HeaderJR;

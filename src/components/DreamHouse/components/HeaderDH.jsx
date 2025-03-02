import React from "react";
import Background from "../img/Background.webp";
import DreamHouseLogo from "../img/DreamHouseLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";


const HeaderDH = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-2 md:w-auto">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-gray-800"
            bgColor="bg-transparent"
            invertColor="invert-0"
          />
        </div>
        <img
          src={DreamHouseLogo}
          alt="DreamHouseLogo"
          className="order-1 object-contain w-40 h-auto cursor-pointer md:order-1"
        />

        <div className="flex justify-end order-2 md:order-3">
          <DarkMode />
        </div>

      </div>
    </div>
  );
};

export default HeaderDH;

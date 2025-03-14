import React from "react";
import CastorBookLogo from "../img/CastorBookLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderCB = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Design less than 768px */}
      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:hidden">
        <div className="order-3 col-span-2 mx-auto">
          <MobileMenu
            textColor="text-stone-600 transition-all duration-700 ease-out"
            hoverColor="hover:text-stone-900"
            bgColor="bg-transparent"
            invertColor="invert"
          />
        </div>
        <img
          src={CastorBookLogo}
          alt="CastorBookLogo"
          className="order-1 object-contain w-40 h-auto cursor-pointer"
        />
        <div className="flex justify-end order-2">
          <DarkMode />
        </div>
      </div>

      {/* design greater than md */}
      <div className="hidden md:grid md:grid-cols-2 md:min-h-screen">
        {/* left side bg-stone-200 */}

        <div className="flex flex-col items-start justify-between p-6 bg-stone-200">
          <div>
            <div
              src={CastorBookLogo}
              alt="CastorBookLogo"
              className="w-40 h-auto cursor-pointer"
            />
            <MobileMenu
              textColor="text-stone-600"
              hoverColor="hover:text-stone-900"
              bgColor="bg-transparent"
              invertColor="invert"
            />
          </div>
        </div>

        {/* right side bg-orange-400 */}
        <div className="relative flex flex-col items-end justify-between p-6 text-white">
          <div className="absolute inset-0 w-full h-full bg-orange-400 bg-cover"></div>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default HeaderCB;

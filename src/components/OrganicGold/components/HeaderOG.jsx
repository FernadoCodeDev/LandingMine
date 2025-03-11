import React from "react";
import Background from "../img/Background.webp";
import OrganicGoldLogo from "../img/OrganicGoldLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderOG = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      {/*Design less than md  */}
      <div className="relative grid items-center grid-cols-2 gap-2 md:hidden ">
        <div className="order-3 col-span-2 mx-auto ">
          <MobileMenu
            textColor="text-gray-200 transition-all duration-700 ease-out"
            hoverColor="hover:text-white"
            bgColor="bg-backdrop-blur-[2px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <div className="flex flex-row justify-between w-full col-span-2 p-2 my-2 backdrop-blur-[1px] bg-white/20">
          <img
            src={OrganicGoldLogo}
            alt="OrganicGoldLogo"
            className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer"
          />

          <div className="order-2 w-fit ms-auto">
            <DarkMode />
          </div>
        </div>

        <div className="relative order-4 col-span-2 text-center md:col-span-3"></div>
      </div>

      {/*Design greater than md */}
      <div className="relative items-center hidden grid-cols-3 gap-2 p-2 my-2 backdrop-blur-[1px] bg-white/20 md:grid">
        <div className="order-2 w-auto m-auto">
          <MobileMenu
            textColor="text-beige-800 transition-all duration-700 ease-out"
            hoverColor="hover:text-rose-800"
            bgColor=""
            invertColor="invert-0"
          />
        </div>

        <img
          src={OrganicGoldLogo}
          alt="OrganicGoldLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer "
        />

        <div className=" w-fit ms-auto order-3 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>
      </div>

      {/*Content */}
      <div className="relative order-4 col-span-2 text-center md:col-span-3 grid grid-cols-1 gap-4 md:grid-cols-2 p-2 m-auto max-w-[100rem]">
        
      </div>
    </div>
  );
};

export default HeaderOG;

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
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-1 md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-black/20">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-gray-800"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-black/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <img
          src={DreamHouseLogo}
          alt="DreamHouseLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative order-4 col-span-2 text-center md:col-span-3">
          <h1 className="font-bold text-white text-[2rem] md:text-[4rem]">
            Find Your Dream Home
          </h1>
          <p className="text-white text-[1rem] md:text-[2rem] lg:text-[2.5rem">
            We understand the fact that modern people strive for maximum comfort
          </p>

          <div className="m-auto hidden w-full p-4 bg-white md:block max-w-[70rem] ">
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col">
                <h1 className="font-bold text-start">Location</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="Enter your location"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-start">Location</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="Enter your location"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-start">Location</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="Enter your location"
                />
              </div>

              <div className="w-20 h-full p-2 bg-blue-400 ms-auto">
                a
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDH;

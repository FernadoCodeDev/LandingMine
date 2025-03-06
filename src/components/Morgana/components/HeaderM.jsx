import React from "react";
import Background from "../img/Background.webp";
import Morganalogo from "../img/Morganalogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";
import SearchSVG from "./SVGComponents/SearchSVG";

const HeaderM = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-1 md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-black/20">
          <MobileMenu
            textColor="text-black transition-all duration-700 ease-out"
            hoverColor="hover:text-gray-800"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-black/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <img
          src={Morganalogo}
          alt="Morganalogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative order-4 col-span-2 text-center md:col-span-3">
          <h1 className="font-bold text-black text-[2rem] md:text-[4rem]">
            text
          </h1>
          <p className="text-black text-[1rem] md:text-[2rem] lg:text-[2.5rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati, suscipit unde assumenda, harum iste qui quos eligendi animi sed amet quo. Modi, expedita. Nam inventore molestiae placeat voluptatibus ullam.
          </p>

          <div className="m-auto w-full p-4 bg-white max-w-[70rem]">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
              <div className="flex flex-col">
                <h1 className="font-bold text-start">text</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="text"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-start">text</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="text"
                />
              </div>

              <div className="flex flex-col bg-beige-50 text-beige-900 p-4">
                <h1 className="font-bold text-start">text</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="text"
                />
              </div>

              <button className="flex justify-center w-full h-auto p-2 transition-all duration-700 ease-out bg-blue-400 md:w-20 hover:bg-blue-600 md:ms-auto">
                <SearchSVG width="40" height="40" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderM;

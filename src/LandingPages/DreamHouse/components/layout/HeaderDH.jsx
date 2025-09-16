import React from "react";
import Background from "../../assets/img/Background.webp";
import DreamHouseLogo from "../../assets/img/DreamHouseLogo.webp";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import SearchSVG from "../../assets/svg/SearchSVG";

const HeaderDH = () => {
  return (
    <div className="relative w-full h-dvh">
      <div
        className="absolute inset-0 w-full bg-fixed bg-center bg-cover h-dvh"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative flex flex-col items-center justify-center h-full">

        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 p-4 justify-center items-center w-full max-w-[100rem]">
          <div className=" md:size-fit order-3 col-span-2 m-auto mt-8 md:m-0 md:mt-0 md:col-span-1 md:order-1 md:bg-backdrop-blur-[4px] md:bg-white/30">
            <MobileMenu
              textColor="text-gray-800 transition-all duration-700 ease-out"
              hoverColor="hover:text-blue-400"
              bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-white/30 md:bg-transparent"
              invertColor="invert"
            />
          </div>

          <img
            src={DreamHouseLogo}
            alt="DreamHouseLogo"
            className="order-1 object-contain h-auto m-auto cursor-pointer w-28 md:w-60 md:order-2"
          />

          <div className="order-2 ms-auto md:order-3">
            <DarkMode />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 m-auto text-center">
          <h1 className="text-2xl font-bold text-black md:text-4xl ">
            Encuentra la casa de tus sueños
          </h1>
      
          <div className="m-auto w-full p-4  rounded-2xl backdrop-blur-[4px] bg-black/20 text-white max-w-[60rem]">
            <div className="flex flex-wrap justify-between gap-2">
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-start">Ubicación</h1>
                <input
                  className="p-1 text-base text-black"
                  type="text"
                  placeholder="Ingresa tu ubicación"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-start">Tipo de propiedad</h1>
                <input
                  className="p-1 text-base text-black"
                  type="text"
                  placeholder="Condominios"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-start">Precio máximo</h1>
                <input
                  className="p-1 text-base text-black"
                  type="text"
                  placeholder="$3,000"
                />
              </div>

              <button className="flex justify-center w-full h-auto p-2 transition-all duration-700 ease-out bg-blue-400 rounded-2xl hover:bg-blue-600 ">
                <SearchSVG width="40" height="40" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDH;

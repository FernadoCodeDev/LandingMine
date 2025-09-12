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

        <div className="flex flex-row justify-between w-full mx-auto p-4 max-w-[100rem] ">

          <div className="hidden md:flex md:w-auto md:h-16 md:backdrop-blur-[4px] md:bg-black/20">
            <MobileMenu
              textColor="text-black transition-all duration-700 ease-out"
              hoverColor="hover:text-gray-800"
              bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-black/20 md:bg-transparent"
              invertColor="invert-0"
            />
          </div>

          <img
            src={DreamHouseLogo}
            alt="DreamHouseLogo"
            className="object-contain h-auto cursor-pointer w-28 "
          />

          <div className=" backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
            <DarkMode />
          </div>


        </div>

        <div className="flex md:hidden mx-auto  md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-black/20">
          <MobileMenu
            textColor="text-gray-800 transition-all duration-700 ease-out"
            hoverColor="hover:text-black"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-black/20 md:bg-transparent"
            invertColor="invert"
          />
        </div>

        <div className="flex flex-col gap-2 p-4 m-auto text-center">
          <h1 className="text-2xl font-bold text-black md:text-4xl ">
            Encuentra la casa de tus sueños
          </h1>
          <p className="text-lg text-black">
            Entendemos el hecho de que la gente moderna se esfuerza por lograr
            la máxima comodidad.
          </p>

          <div className="m-auto w-full p-4  rounded-lg backdrop-blur-[4px] bg-black/20 text-white max-w-[60rem]">
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

              <button className="flex justify-center w-full h-auto p-2 transition-all duration-700 ease-out bg-blue-400 hover:bg-blue-600 ">
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

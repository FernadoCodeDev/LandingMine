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

      <div className="relative grid items-start grid-cols-2 gap-2 p-4 h-dvh md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-1 md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-black/20">
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
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative flex flex-col order-4 col-span-2 gap-2 text-center md:col-span-3">
          <h1 className="text-2xl font-bold text-black ">
            Encuentra la casa de tus sueños
          </h1>
          <p className="text-lg text-black">
            Entendemos el hecho de que la gente moderna se esfuerza por lograr
            la máxima comodidad.
          </p>

          <div className="m-auto w-full p-4 bg-white max-w-[60rem]">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              <div className="flex flex-col">
                <h1 className="font-bold text-start">Ubicación</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="Ingresa tu ubicación"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-start">Tipo de propiedad</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="Condominios"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-start">Precio máximo</h1>
                <input
                  className="p-1"
                  type="text"
                  disabled
                  placeholder="$3,000"
                />
              </div>

              <button className="flex justify-center w-full h-auto p-2 transition-all duration-700 ease-out bg-blue-400 md:col-span-3 hover:bg-blue-600 ">
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

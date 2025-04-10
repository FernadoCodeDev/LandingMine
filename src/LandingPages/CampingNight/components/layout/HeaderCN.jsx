import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import Background from "../../assets/img/Background.webp";
import CampingNightLogo from "../../assets/img/CampingNightLogo.webp";

const HeaderDH = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative grid items-start h-auto grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-2 md:w-auto md:h-20 md:bg-white/20 md:bg-backdrop-blur-[2px]">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-orange-300"
            bgColor="bg-backdrop-blur-[2px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <img
          src={CampingNightLogo}
          alt="CampingNightLogo"
          className="order-1 w-full md:max-w-[15rem] h-auto mx-auto cursor-pointer md:order-1"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-white/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative order-4 col-span-2 md:col-span-3">
          <div className="m-auto grid grid-cols-1 gap-4 md:grid-cols-2 max-w-[90rem] p-4">
            <h1 className="text-4xl text-white md:text-6xl lg:text-8xl">
              Un Hermoso lugar con un rico{" "}
              <span className="font-bold">S'more</span>
            </h1>

            <div className="m-auto w-full p-4 bg-white max-w-[70rem]">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex flex-col">
                  <h1 className="font-bold text-start">Fecha de llegada</h1>
                  <input className="" type="date" />
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold text-start">Tipo de campamento</h1>
                  <select className="">
                    <option>Espacio para tienda</option>
                    <option>Cabaña rústica</option>
                    <option>Zona con fogata</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold text-start">
                    Servicios adicionales
                  </h1>
                  <select className="">
                    <option>Ninguno</option>
                    <option>Renta de equipo</option>
                    <option>Guía turístico</option>
                    <option>Leña extra</option>
                  </select>
                </div>

                <button className="flex justify-center w-full h-auto p-2 font-bold text-white transition-all duration-700 ease-out bg-orange-400 hover:bg-orange-600">
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDH;

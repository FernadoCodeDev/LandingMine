import React from "react";
import BackgroundGT from "../img/BackgroundGT.webp";
import GoodTripLogo from "../img/GoodTripLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderPB = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${BackgroundGT})` }}
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
          src={GoodTripLogo}
          alt="GoodTripLogo"
          className="order-1 object-contain w-40 h-auto cursor-pointer md:order-1"
        />

        <div className="flex justify-end order-2 md:order-3">
          <DarkMode />
        </div>

        <div className="order-4 col-span-2 text-center md:col-span-3 ">
          <h1 className="font-serif text-white text-[2rem] md:text-[4rem]">
            Embárcate en el viaje de tus sueños con nuestra experiencia y
            orientación
          </h1>

          <div className="grid grid-cols-1 gap-2 mt-4 md:mx-auto md:grid-cols-4 max-w-[70rem]">
            <button className="bg-transparent border-2 text-white border-white  w-full md:max-w-[20rem] transition-all duration-700 ease-out hover:text-black hover:bg-white p-2 rounded-full ">
              Buscar destino
            </button>

            <button className="bg-transparent border-2 text-white border-white  w-full md:max-w-[20rem] transition-all duration-700 ease-out hover:text-black hover:bg-white p-2 rounded-full ">
              Duración del tour
            </button>

            <button className="bg-transparent border-2 text-white border-white  w-full md:max-w-[20rem] transition-all duration-700 ease-out hover:text-black hover:bg-white p-2 rounded-full ">
              Tipo de viaje
            </button>

            <button className="bg-slate-50  w-full md:max-w-[20rem] transition-all duration-700 ease-out hover:bg-slate-300 p-2 rounded-full ">
              Explorar paquete
            </button>
          </div>

          {/* Content greater than 1000px start*/}
          {/* This happens because the content will not display correctly at sizes smaller than that because if it is smaller than 1000px, Hidden is used.*/}
          <div className="justify-center hidden w-full grid-cols-1 gap-6 p-4 text-white lg:grid lg:absolute lg:bottom-0 lg:left-0 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1">
                <div className="w-16 border-t-2 border-white opacity-50"></div>
                <p>200+ family & company trust us</p>
              </div>
              <p className="mt-2 font-serif text-2xl text-start">
                I've used a lot of trip agencies, but EZ is the best one!
              </p>
              <p className="mt-1 font-semibold">
                Jay Gurinjay, CEO of Wanjay Music
              </p>

              <div className="lg:p-1 lg:bottom-[0%] lg:w-full lg:border-t-2 lg:border-white opacity-50"></div>
            </div>

            <div className="flex flex-col items-center justify-between">
              <div></div>
              <div className="lg:p-1  lg:bottom-[0%] lg:w-full lg:border-t-2 lg:border-white opacity-50"></div>
            </div>

            <div className="flex flex-col items-center justify-between">
              <button className="p-2 bg-transparent border-2 text-center rounded-full text-white border-white w-full lg:max-w-[20rem]">
                Buscar destino
              </button>
              <div className="lg:p-1  lg:bottom-[0%] lg:w-full lg:border-t-2 lg:border-white opacity-50"></div>
            </div>
          </div>

          {/* Content greater than 1000px End*/}
        </div>
      </div>
    </div>
  );
};

export default HeaderPB;

import React from "react";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import GYMLogo from "../img/GYMLogo.webp";
import Background from "../img/Background.webp";
import ImageGym1 from "../img/ImageGym1.webp";

const HeaderGym = () => {
  return (
    <div className="flex flex-col w-full h-auto">
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />

      <header className="relative z-10 grid items-center grid-cols-2 p-4 md:grid-cols-3">
        <img
          src={GYMLogo}
          alt="GymLogo"
          className="w-full h-auto col-span-1 m-4 cursor-pointer md:col-span-1 md:w-60"
        />

        <div className="flex items-center justify-center w-full col-span-2 p-2 m-auto">
          <MobileMenu />
        </div>
      </header>

      <div className="grid items-center justify-center grid-cols-3 font-mono text-center text-white">
        <div className="relative w-full col-span-3 p-4 md:col-span-2 md:top-40">
          {" "}
          
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] p-2">
            EN BUSCA DE TU PRÓXIMO
            <span className="block font-bold text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-yellow-300">
            ENTRENAMIENTO?
            </span>
          </h1>
          <a href="" className="p-2">
            <button className="w-full px-6 py-2 mt-4 font-semibold text-black transition-all duration-700 ease-out bg-yellow-300 rounded-tl-full rounded-br-full md:w-60 lg:w-96 hover:bg-yellow-500">
              COMIENZA TU VIAJE 
            </button>
          </a>
        </div>

        <img
          src={ImageGym1}
          alt="ImageGym1"
          className="absolute right-0 bottom-0 w-1/3 max-w-[100rem] col-span-1"
        />
      </div>
    </div>
  );
};

export default HeaderGym;

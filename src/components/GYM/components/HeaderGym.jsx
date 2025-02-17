import React from "react";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import GYMLogo from "../img/GYMLogo.webp";
import Background from "../img/Background.webp";
import ImageGym1 from "../img/ImageGym1.webp";

const HeaderGym = () => {
  return (
    <div className="relative flex flex-col w-full h-screen">

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

      <div className="relative flex flex-col justify-center flex-1 text-center text-white ">
        <h1 className="text-[1rem]">
          EN BUSCA DE TU PRÓXIMO{" "}
          <span className="font-bold text-[1.5rem] text-yellow-300">ENTRENAMIENTO</span>
        </h1>
        <a href="">
          <button className="px-6 py-2 mt-4 font-semibold text-black transition-all duration-700 ease-out bg-yellow-300 rounded-tl-full rounded-br-full hover:bg-yellow-500">
            COMIENZA TU VIAJE
          </button>
        </a>

        <img
          src={ImageGym1}
          alt="ImageGym1"
          className="absolute right-0 bottom-0 w-1/3 max-w-[90rem]"
        />
      </div>
    </div>
  );
};

export default HeaderGym;

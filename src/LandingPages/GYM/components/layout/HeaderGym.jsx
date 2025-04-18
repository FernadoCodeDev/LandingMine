import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import GYMLogo from "../../assets/img/GYMLogo.webp";
import Background from "../../assets/img/Background.webp";
import ImageGym1 from "../../assets/img/ImageGym1.webp";

const HeaderGym = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <div
        className="w-full min-h-screen bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${Background})` }}
      >

        <img
          src={GYMLogo}
          alt="GymLogo"
          className="h-auto m-4 cursor-pointer w-60 "
        />

        <div className="flex items-center justify-center w-full col-span-2 p-2 m-auto">
          <MobileMenu
            textColor="text-white"
            hoverColor="hover:text-gray-300"
            bgColor="bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <div className="grid items-center justify-center grid-cols-1 font-mono text-center text-white md:grid-cols-3">
          <div className="w-full p-4 md:col-span-2 md:top-40">
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

          <div className="absolute bottom-0 right-0 items-end justify-end hidden w-full h-full md:flex">
            <img
              src={ImageGym1}
              alt="ImageGym1"
              className="relative w-1/2 max-w-[10rem] md:max-w-[20rem] lg:max-w-[25rem] xl:max-w-[40rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderGym;

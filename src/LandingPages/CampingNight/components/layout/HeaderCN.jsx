import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import Background from "../../assets/img/Background.webp";
import CampingNightLogo from "../../assets/img/CampingNightLogo.webp";
import "cally";
import Modal from "../ui/Modal";

const HeaderDH = () => {
  return (
    <div className="relative w-full h-dvh">
      <div
        className="absolute inset-0 w-full bg-fixed bg-center bg-cover h-dvh"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative grid items-start grid-cols-2 gap-2 p-4 h-dvh md:grid-cols-3">
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
          <div className="m-auto flex flex-col items-center text-center justify-center gap-12 max-w-[80rem] ">
            <h1 className="text-4xl text-white md:text-6xl lg:text-7xl">
              Un lugar para acampar, donde la tranquilidad reina, y un{" "}
              <span className="font-bold">S'more </span>
              caliente siempre te espera
            </h1>
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDH;

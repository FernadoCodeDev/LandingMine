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

      <div className="relative flex flex-col items-center justify-center gap-4">

        <div className="flex flex-row justify-between w-full max-w-[100rem] p-4">

          <div className="hidden my-auto md:block">
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
            className="object-contain w-28 h-28 md:w-40 md:h-40"
          />

          <div className="my-auto">
            <DarkMode />
          </div>

        </div>

        <div className="block mx-auto md:hidden md:w-auto md:h-20 ">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-orange-300"
            bgColor=""
            invertColor="invert-0"
          />
        </div>



          <div className="relative m-auto flex flex-col items-center text-center p-4 justify-center gap-12 max-w-[80rem] ">
            <h1 className="text-4xl text-white md:text-6xl lg:text-7xl">
              Un lugar para acampar, donde la tranquilidad reina, y un{" "}
              <span className="font-bold">S'more </span>
              caliente siempre te espera
            </h1>
            <Modal />
          </div>
        </div>
      </div>
  );
};

export default HeaderDH;

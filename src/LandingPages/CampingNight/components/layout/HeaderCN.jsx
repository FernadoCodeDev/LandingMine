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

        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 p-4 justify-center items-center w-full max-w-[100rem]">
          <div className="order-3 col-span-2 m-auto mt-8  md:size-fit md:m-0 md:mt-0 md:col-span-1 md:order-1">
            <MobileMenu
              textColor="text-white transition-all duration-700 ease-out"
              hoverColor="hover:text-orange-300"
              bgColor=""
              invertColor="invert-0"
            />
          </div>

          <img
            src={CampingNightLogo}
            alt="CampingNightLogo"
            className="order-1 object-contain h-auto m-auto cursor-pointer w-28 md:w-60 md:order-2"
          />

          <div className="order-2 ms-auto md:order-3">
            <DarkMode />
          </div>
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

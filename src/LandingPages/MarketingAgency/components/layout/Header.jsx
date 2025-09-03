import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import Background from "../../assets/img/HeaderBackground.webp";
import MALogo from "../../assets/img/MarketingAgencyLogo.webp";

const HeaderMA = () => {
  return (
    <div className="relative w-full h-dvh">
      <div
        className="absolute inset-0 w-full bg-fixed bg-center bg-cover h-dvh"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative flex flex-col items-center justify-start gap-2 p-4 h-dvh md:flex-row md:justify-between md:items-start">
        <div className="order-2 md:order-1 md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-white/20">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out md:hover:text-black"
            hoverColor="hover:text-gray-400"
            bgColor="bg-transparent md:hover:bg-white"
            invertColor="invert-0"
          />
        </div>
        <img
          src={MALogo}
          alt="MALogo"
          className="order-1 object-contain w-40 h-auto cursor-pointer md:order-2"
        />

        <div className="relative order-3 text-center md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
          <h1 className="font-bold text-white text-[2rem] md:text-[4rem]">
            Construye tu marca
          </h1>
          <p className="text-white text-[1rem] md:text-[2rem] lg:text-[2.5rem">
            Diseño creativo galardonado centrado en una mayor exposición de la
            marca.{" "}
          </p>
          <button className="bg-slate-50 mt-[2rem] font-bold w-full md:max-w-[20rem] transition-all duration-700 ease-out hover:bg-slate-300 p-2 rounded-full ">
            Empieza hoy
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMA;

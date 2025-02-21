import React from "react";
import Background from "../img/HeaderBackground.webp";
import MALogo from "../img/MarketingAgencyLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";

const HeaderMA = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative flex flex-col justify-start items-center gap-2 h-screen p-4 md:flex-row md:justify-between md:items-start">
        <div className="order-2 md:order-1 md:w-auto md:h-20 md:bg-opacity-60 md:bg-white dark:md:bg-neutral-400 md:p-2">
          <MobileMenu />
        </div>
        <img
          src={MALogo}
          alt="MALogo"
          className="w-40 h-auto object-contain order-1 md:order-3 cursor-pointer"
        />

        <div className="relative flex flex-col text-center justify-center mt-[2rem] order-3 md:order-2 md:mt-[22rem]">
          <h1 className="font-bold text-white text-[2rem] md:text-[4rem]">
            Construye tu marca
          </h1>
          <p className="text-white text-[1rem] md:text-[2rem]">
            Diseño creativo galardonado centrado en una mayor exposición de la
            marca.{" "}
          </p>
          <button className="bg-slate-50 mt-[2rem] w-full md: max-w-[80rem]: transition-all duration-700 ease-out hover:bg-slate-300 p-2 rounded-full ">
            Empieza hoy
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMA;

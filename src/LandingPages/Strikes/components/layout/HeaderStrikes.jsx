import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import StrikesLogo from "../../assets/img/Strike'sLogo.webp";
import HeaderBackground from "../../assets/img/HeaderBackground.webp"

const HeaderStrikes = () => {
  return (
    <div className="relative w-full h-auto p-4 bg-beige-300 dark:bg-slate-950">
      <div
        className="absolute inset-0 w-full h-auto bg-center bg-cover border-8 border-beige-300 dark:border-slate-950"
        style={{ backgroundImage: `url(${HeaderBackground})` }}
      ></div>

      <div className="relative flex flex-col items-center justify-center h-full gap-6 p-4 text-white">

        <div className="m-auto grid grid-cols-2 md:grid-cols-3  justify-center items-center w-full max-w-[100rem]">
          <div className="order-3 col-span-2 m-auto mt-8 md:m-0 md:mt-0 md:col-span-1 md:order-1">
            <MobileMenu
              textColor="text-white transition-all duration-700 ease-out"
              hoverColor="hover:text-orange-600"
              bgColor=""
              invertColor="invert-0"
            />
          </div>

          <img
            src={StrikesLogo}
            alt="StrikesLogo"
            className="order-1 object-contain h-auto cursor-pointer md:m-auto md:order-2 w-28 md:w-40 2xl:w-60 "
          />

          <div className="order-2 ms-auto md:order-3">
            <DarkMode />
          </div>
        </div>

        <button className=" backdrop-blur-[1px] bg-black/20 w-full p-2 font-bold transition-all duration-700 ease-out max-w-64 border border-white text-base md:text-lg rounded-xl hover:backdrop-blur-[4px] hover:bg-black/40">
          Reserva tu pista ahora
        </button>
      </div>
    </div>
  );
};

export default HeaderStrikes;

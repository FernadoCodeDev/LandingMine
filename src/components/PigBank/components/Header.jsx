import React from "react";
import PigBankLogo from "../img/PigBankLogoNo1.webp";
import PigBank from "../img/PigBankLogoNo.2.webp";
import PingBankCard from "../img/PingBankCard.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderPB = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="grid items-center justify-between grid-cols-2 p-4 md:grid-cols-3">
        <div className="order-1 m-auto">
          <img
            src={PigBankLogo}
            alt="PigBankLogo"
            className="w-full h-auto md:max-w-80"
          />
        </div>

        <div className="order-3 col-span-2 m-auto md:col-span-1 md:order-2 ">
          <MobileMenu
            textColor="text-black dark:text-white"
            hoverColor="hover:text-red-500 dark:hover:text-red-500 "
            bgColor="bg-transparent"
            invertColor="invert dark:invert-0"
          />
        </div>
        <div className="order-2 m-auto">
          <DarkMode />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center md:mt-20">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl text-black md:text-6xl xl:text-9xl dark:text-white ">
            Mejora
          </h1>
          <img
            src={PigBank}
            alt="PigBank"
            className="w-20 h-auto md:w-32 xl:w-40 rotate-12"
          />
          <h1 className="text-4xl text-black md:text-6xl xl:text-9xl dark:text-white">
            tus
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={PingBankCard}
            alt="PingBankCard"
            className="w-20 md:w-32 xl:w-40 h-auto rotate-[330deg]"
          />

          <h1 className="text-4xl text-black dark:text-white md:text-6xl xl:text-9xl">
            finanzas
          </h1>
        </div>

        <div>
          <h1 className="text-4xl text-black dark:text-white md:text-6xl xl:text-9xl">
            con{" "}
            <span className="font-bold text-red-500 border-b-2 border-red-500 ">
              Pig Bank
            </span>
          </h1>
        </div>

        <div className="mt-8">
          <p className="p-4 max-w-[60rem] text-2xl text-center text-black dark:text-white">
            Mover dinero nunca debería requerir más que unos simples clicks.
          </p>

          <button className="p-3 mt-4 font-bold text-center text-white transition-all duration-700 ease-out bg-red-500 rounded-full hover:bg-red-600 ">
            Envía dinero ahora
          </button>
        </div>
      </div>

      <div className="absolute w-1/4 max-w-[10rem] rounded-tr-3xl left-0 bottom-[0%] md:bottom-[30%] bg-red-500 h-40 md:h-60  clip-trapezoid-left -z-10"></div>
      <div className="absolute w-1/5 max-w-[10rem] rounded-bl-3xl right-0 bottom-[0%] md:bottom-[30%] bg-red-400 h-40 md:h-60  clip-trapezoid-right -z-10"></div>
    </div>
  );
};

export default HeaderPB;

import React from "react";
import PingBankCard from "../../assets/img/PingBankCard.webp";
import SVG1 from "../../assets/svg/svg1";
import SVG2 from "../../assets/svg/svg2";
import SVG3 from "../../assets/svg/svg3";
import SVG4 from "../../assets/svg/svg4";

const FirstSection = () => {
  return (
    <div className="relative w-full p-4 pb-20 bg-gray-100 dark:bg-neutral-800">
      <div className="flex flex-col items-center justify-center text-center md:cols-span-2">
        <div>
          <h1 className="text-2xl font-bold text-black md:text-4xl dark:text-white">
            La elección estratégica
          </h1>
          <p className="text-base text-black md:text-xl dark:text-white text-start">
            Nuestra misión es brindar transparencia a las finanzas y mostrarle
            todo de antemano.
          </p>
        </div>
      </div>

      <div className="m-auto max-w-[90rem] grid grid-cols-1 gap-4 mt-5 md:grid-cols-3 md:items-center">
        <div className="flex flex-col items-center justify-center gap-4 text-center text-black dark:text-white">
          <div className="w-20 h-20 p-2 bg-red-400 rounded-full">
            <SVG1 />
          </div>
          <h1 className="text-2xl font-bold md:text-4xl">Autenticación</h1>
          <p className="text-base md:text-1xl">Tu cuenta está protegida mediante un proceso de autenticación.</p>

          <div className="w-20 h-20 p-2 bg-red-400 rounded-full">
            <SVG2 />
          </div>
          <h1 className="text-2xl font-bold md:text-4xl">
            Equipos de seguridad
          </h1>
          <p className="text-base md:text-1xl">
            Nuestro equipo de seguridad trabajan para mantener
            su dinero seguro
          </p>
        </div>

        <div className="flex items-start justify-start w-full ">
          <img
            src={PingBankCard}
            alt="PingBankCard"
            className="w-full h-auto object-contain md:rotate-[70deg]"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-center text-black dark:text-white">
          <div className="w-20 h-20 p-2 bg-red-400 rounded-full">
            <SVG3 />
          </div>
          <h1 className="text-2xl font-bold md:text-4xl">Centro de Cuentas</h1>
          <p className="text-base md:text-1xl">Guarda todas tus cuentas en un solo lugar.</p>

          <div className="w-20 h-20 p-2 bg-red-400 rounded-full">
            <SVG4 />
          </div>
          <h1 className="text-2xl font-bold md:text-4xl">Fondos de seguridad</h1>
          <p className="text-base md:text-1xl">Guarde su dinero en instituciones financieras establecidas</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
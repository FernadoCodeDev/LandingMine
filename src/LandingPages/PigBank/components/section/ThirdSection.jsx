import React from "react";
import Carousel from "../ui/Carousel";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto p-4 text-black bg-gray-100 dark:text-white dark:bg-neutral-800">
      <div className="flex flex-col items-center justify-center text-center gap-4 m-auto max-w-[80rem]">
        <h1 className="text-2xl font-bold md:text-4xl ">
          Descubre las tarjetas de <span className="text-red-400">Pig Bank</span>
        </h1>

        <p className="text-base max-w-[50rem] md:text-2xl"> Con cualquiera de nuestras tarjetas disfrutas de seguridad avanzada, pagos internacionales, cashback y rentabilidad mensual. Elige la que más se adapte a ti y empieza a construir tu futuro con <span className="font-bold text-red-400"> Pig Bank.</span></p>
        <Carousel />
      </div>
    </div>
  );
};

export default ThirdSection;

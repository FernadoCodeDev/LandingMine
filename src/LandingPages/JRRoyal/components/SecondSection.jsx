import React from "react";
import imgN3 from "../img/imgN3.webp";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto p-4 text-black bg-beige-100 dark:bg-neutral-900 md:text-2xl dark:text-white">
      <div className="m-auto max-w-[80rem] grid grid-cols-1 gap-4 md:gap-16 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-1 ">
          <h1 className="col-span-2 font-serif text-xl font-bold text-center lg:text-3xl xl:5xl">
            UN ESPACIO EXCLUSIVO
          </h1>
          <h1 className="col-start-2 font-serif text-xl font-bold text-center lg:text-3xl xl:5xl">
            AL AIRE LIBRE
          </h1>
        </div>

        <div className="">
          <h1 className="text-lg font-bold text-center md:text-xl">
            El lugar perfecto para reuniones y celebraciones empresariales{" "}
          </h1>
        </div>

        <div className="md:order-4">
          <img src={imgN3} alt="imgN3" className="w-full h-auto" />
        </div>

        <div className="flex flex-col items-center justify-start gap-4 md:order-3 ">
          <p className=" max-w-[40rem] text-start">
            En JR Royal Hotel, ofrecemos un elegante salón al aire libre
            diseñado para eventos corporativos de alto nivel. Ya sea para
            conferencias, reuniones ejecutivas o celebraciones empresariales,
            nuestro espacio combina comodidad, naturaleza y sofisticación para
            crear un ambiente ideal para el éxito de tu evento.
          </p>

          <button className="w-full p-2 font-serif font-bold text-blue-900 transition-all duration-700 ease-out bg-transparent border-2 border-blue-900 dark:text-beige-100 rounded-xl md:rounded-full md:w-32 md:h-32 hover:bg-blue-900 hover:text-beige-100 dark:border-beige-100 dark:hover:bg-beige-100 dark:hover:text-blue-900">
            Haz tu evento
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

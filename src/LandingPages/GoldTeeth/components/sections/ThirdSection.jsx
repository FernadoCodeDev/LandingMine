import React from "react";
import imgN5 from "../../assets/img/imgN5.webp";
import imgN6 from "../../assets/img/imgN6.webp";
import imgN7 from "../../assets/img/imgN7.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 text-black lg:text-xl bg-beige-100 dark:bg-neutral-800 dark:text-white">
      <div className="grid grid-cols-1 gap-4 md:gap-8 max-w-[80rem] m-auto">
        <h1 className="text-5xl font-bold text-center lg:text-7xl text-rose-800 dark:text-beige-100">
          Reunirse con nuestros dentistas
        </h1>
        <p className="m-auto max-w-[50rem] text-center lg:text-xl text-black dark:text-white ">
          Contamos con un servicio para contactar al médico en línea para una
          consulta sobre tu salud dental o preguntar horarios de trabajo en la
          clínica.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 max-w-[80rem] m-auto">
        <div className="grid items-center justify-center grid-cols-1 gap-2 bg-beige-50 dark:bg-neutral-700 rounded-2xl">
          <img
            src={imgN5}
            alt="imgN5"
            className="w-full h-auto rounded-t-2xl"
          />

          <div className="p-4">
            <h1 className="text-2xl font-bold text-start ">⭐(4.5)</h1>

            <h1 className="text-3xl font-bold text-start text-rose-800 dark:text-beige-100">
              Dr David Warner
            </h1>

            <p className="text-start">Dermatólogo, DCRT (UK)</p>
            <p className="font-bold transition-all duration-700 ease-out cursor-pointer hover:w-auto text-beige-800 dark:text-beige-100 hover:text-rose-800 dark:hover:text-rose-800">
              Ver Perfil
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-2 bg-beige-50 dark:bg-neutral-700 rounded-2xl">
          <img
            src={imgN6}
            alt="imgN6"
            className="w-full h-auto rounded-t-2xl"
          />

          <div className="p-4">
            <h1 className="text-2xl font-bold text-start ">⭐(4.5)</h1>

            <h1 className="text-3xl font-bold text-start text-rose-800 dark:text-beige-100">
              Dra. Sarah Taylor
            </h1>

            <p className="text-start">Dermatóloga, DCRT (UK)</p>
            <p className="font-bold transition-all duration-700 ease-out cursor-pointer hover:w-auto text-beige-800 dark:text-beige-100 hover:text-rose-800 dark:hover:text-rose-800">
              Ver Perfil
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-2 bg-beige-50 dark:bg-neutral-700 rounded-2xl">
          <img
            src={imgN7}
            alt="imgN7"
            className="w-full h-auto rounded-t-2xl"
          />

          <div className="p-4">
            <h1 className="text-2xl font-bold text-start ">⭐(4.5)</h1>

            <h1 className="text-3xl font-bold text-start text-rose-800 dark:text-beige-100">
              Dr Aaron Finch
            </h1>

            <p className="text-start">Dermatólogo, DCRT (UK)</p>
            <p className="font-bold transition-all duration-700 ease-out cursor-pointer hover:w-auto text-beige-800 dark:text-beige-100 hover:text-rose-800 dark:hover:text-rose-800">
              Ver Perfil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

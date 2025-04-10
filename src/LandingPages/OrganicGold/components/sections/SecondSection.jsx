import React from "react";
import imgN2 from "../../assets/img/imgN2.webp";

const SecondSection = () => {
  return (
    <div className="relative w-full p-4 md:text-2xl text-black bg-white dark:text-white min-h-auto dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-auto max-w-[70rem] ">
        <div className="relative">
          <img src={imgN2} alt="imgN2" className="w-full h-auto rounded-xl" />

          <div className="absolute inset-0 flex flex-col items-start justify-end text-start gap-4  p-4 m-auto text-white z-10">
            <h1 className="text-2xl md:text-4xl max-w-[30rem]  font-bold">
              Únase a la lucha por un mejor sistema alimentario
            </h1>

            <button className="flex items-center text-xl justify-center w-full md:w-1/2 text-black p-2 font-bold transition-all duration-700 ease-out rounded-full bg-yellow-300 hover:bg-yellow-500">
              Conocer Productos{" "}
              <svg
                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end bg-yellow-300  rounded-xl">
          <div className=" flex flex-col items-start justify-center  gap-4 text-black p-6 mt-auto">
            <h1 className="text-2xl md:text-5xl max-w-[30rem]  font-bold">
              Buscar diversidad, estacionalidad, transparencia encontrar sabor{" "}
            </h1>

            <button className="flex items-center justify-center text-xl  w-full md:w-1/2 p-2 font-bold transition-all duration-700 ease-out rounded-full bg-lime-300 hover:bg-lime-500">
              Conocer Productos{" "}
              <svg
                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 m-auto max-w-[70rem] ">
        <div className="rounded-xl shadow-xl bg-white dark:bg-neutral-800 flex flex-col gap-4 p-4 ">
          <h1 className="font-bold text-start text-2xl md:text-4xl">
            Directo del Agricultor
          </h1>
          <p className="">
            Trabajamos mano a mano con agricultores locales para ofrecerte
            productos frescos y 100% orgánicos. Sin intermediarios, solo calidad
            y compromiso con el campo.
          </p>
        </div>

        <div className="rounded-xl shadow-xl bg-white dark:bg-neutral-800 flex flex-col gap-4 p-4 ">
          <h1 className="font-bold text-start text-2xl md:text-4xl">
            Calidad Garantizada
          </h1>
          <p className="">
            Seleccionamos cuidadosamente cada producto para asegurar su
            frescura, sabor y valor nutricional. Disfruta de alimentos naturales
            cultivados con respeto por el medio ambiente.
          </p>
        </div>

        <div className="rounded-xl shadow-xl bg-white dark:bg-neutral-800 flex flex-col gap-4 p-4 ">
          <h1 className="font-bold text-start text-2xl md:text-4xl">
            Productos de Temporada
          </h1>
          <p className="">
            Descubre lo mejor de cada estación con productos cosechados en su
            punto óptimo. Frescura y sabor auténtico, directamente de la
            naturaleza a tu mesa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

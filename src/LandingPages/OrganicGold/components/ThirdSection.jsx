import React from "react";
import imgN3 from "../img/imgN3.webp";
import imgN4 from "../img/imgN4.webp";

const ThirdSection = () => {
  return (
    <div className="relative w-full p-4 md:text-2xl text-black bg-white dark:text-white min-h-auto dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-auto max-w-[70rem] ">
        <div className="relative">
          <img src={imgN3} alt="imgN3" className="w-full h-auto rounded-xl" />

          <div className="absolute inset-0 flex flex-col items-start justify-end text-start gap-4  p-4 m-auto text-white z-10">
            <h1 className="text-2xl md:text-4xl max-w-[30rem]  font-bold">
              Cerezas Dulces y Jugosas
            </h1>

            <p className="  max-w-[30rem]  ">
              Disfruta de la frescura y dulzura de nuestras cerezas 100%
              orgánicas. Cultivadas con esmero, son una fuente natural de
              antioxidantes, perfectas para cuidar tu salud y deleitar tu
              paladar.
            </p>

            <button className="text-black flex items-center justify-center text-xl  w-full md:w-1/2 p-2 font-bold transition-all duration-700 ease-out rounded-full bg-yellow-300 hover:bg-yellow-500">
              Ver más{" "}
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

        <div className="hidden md:flex inset-0 flex-row items-start m-8 pointer-events-none justify-center text-center absolute z-10">
          <h1 className="text-5xl font-extrabold text-transparent stroke-white">
            Lo Mejor De La Naturaleza
          </h1>
        </div>

        <div className="relative">
          <img src={imgN4} alt="imgN4" className="w-full h-auto rounded-xl" />

          <div className="absolute inset-0 flex flex-col items-start justify-end text-start gap-4  p-4 m-auto text-white z-10">
            <h1 className="text-2xl md:text-4xl max-w-[30rem]  font-bold">
              Aguacates Cremosos y Nutritivos
            </h1>

            <p className="  max-w-[30rem]  ">
              Fuente de grasas saludables, vitaminas y minerales, nuestros
              aguacates son el complemento perfecto para cualquier comida.
              Cultivados con respeto por la tierra, garantizan frescura y
              calidad en cada bocado.
            </p>

            <button className="text-black flex items-center justify-center text-xl w-full md:w-1/2 p-2 font-bold transition-all duration-700 ease-out rounded-full bg-yellow-300 hover:bg-yellow-500">
              Ver más{" "}
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
    </div>
  );
};

export default ThirdSection;

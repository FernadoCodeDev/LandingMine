import React from "react";

const FourthSection = () => {
  return (
    <div className="relative w-full p-4 md:text-2xl text-black bg-white dark:text-white min-h-auto dark:bg-neutral-900">
      <div className="grid grid-cols-1 gap-3 m-auto max-w-[70rem] ">
        <div className="flex bg-yellow-300  rounded-xl">
          <div className=" flex flex-col items-center justify-center  gap-6 text-black p-6 m-auto">
            <h1 className="text-2xl md:text-4xl max-w-[30rem] text-center  font-bold">
              Cultivamos calidad, cosechamos bienestar
            </h1>

            <p className=" max-w-[30rem] text-center ">
              En <span className="text-lime-600 font-bold">Organic Gold</span> ,
              nuestra misión es conectar a las personas con lo mejor de la
              naturaleza, ofreciendo productos orgánicos de la más alta calidad.
              Creemos en un futuro más saludable y sostenible, donde cada
              alimento respete el medio ambiente y beneficie tanto a quienes lo
              producen como a quienes lo consumen.
            </p>

            <p className=" max-w-[30rem] text-center ">
              A través de nuestra red de agricultores locales, garantizamos
              productos frescos, de temporada y cultivados con prácticas
              responsables. Queremos inspirar un estilo de vida más natural,
              promoviendo el consumo consciente y el respeto por la tierra.
            </p>

            <button className="flex items-center justify-center text-xl  w-full md:w-1/2 p-2 font-bold transition-all duration-700 ease-out rounded-full bg-lime-300 hover:bg-lime-500">
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

export default FourthSection;

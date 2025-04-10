import React from "react";
import CampingTentSVG from "../../assets/svg/CampingTentSVG";
import NatureSVG from "../../assets/svg/NatureSVG";
import imgN1 from "../../assets/img/imgN1.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto gap-4 p-4 text-black bg-beige-50 dark:text-white dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto max-w-[80rem]">
        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold md:text-4xl">
            Descubre la magia de acampar con Camping Night
          </h1>
          <p className="text-base md:text-2xl">
            Escapa de la rutina y sumérgete en la tranquilidad de la naturaleza.
            En Camping Night, te ofrecemos un refugio perfecto para
            desconectarte, disfrutar de la aventura y relajarte bajo un cielo
            estrellado. Ya sea que prefieras una fogata acogedora, explorar
            senderos naturales o simplemente contemplar el amanecer desde tu
            tienda, aquí encontrarás el lugar ideal para tu próxima escapada.
          </p>
          <button className="w-full p-2 font-bold transition-all duration-700 ease-out rounded-full md:w-1/2 bg-neutral-800 hover:bg-black text-beige-50 dark:text-black dark:bg-beige-50 dark:hover:bg-beige-200">
            Saber más
          </button>
        </div>

        <div className="order-3 md:order-2">
          <img src={imgN1} alt="imgN1" className="w-full h-auto rounded-2xl" />
        </div>

        <div className="grid order-2 grid-cols-1 gap-2 md:order-3 md:col-span-2 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 p-4 bg-beige-100 dark:bg-neutral-800">
            <CampingTentSVG width="60" height="60" />

            <div>
              <h1 className="text-2xl font-bold md:text-4xl">
                Tu espacio bajo las estrellas
              </h1>
              <p className="text-base md:text-2xl">
                Acampa en un entorno natural y seguro con vistas impresionantes.
                Contamos con espacios diseñados para que disfrutes al máximo de
                la experiencia, ya sea con tu propia tienda o eligiendo una de
                nuestras cómodas cabañas rústicas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 p-4 bg-beige-100 dark:bg-neutral-800">
            <NatureSVG width="60" height="60" />

            <div>
              <h1 className="text-2xl font-bold md:text-4xl">
                Naturaleza y tranquilidad
              </h1>
              <p className="text-base md:text-2xl">
                Conéctate con la naturaleza en su máxima expresión. Disfruta de
                senderos, ríos y paisajes únicos que te permitirán relajarte y
                vivir momentos inolvidables en un ambiente de paz y armonía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

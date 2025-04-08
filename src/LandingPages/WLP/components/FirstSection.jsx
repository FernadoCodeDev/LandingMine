import React from "react";
import imgN1 from "../img/imgN1.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto gap-4 bg-orange-50 dark:bg-sky-900 text-amber-50">
      <div className="flex flex-row justify-around w-full p-2 bg-orange-100 dark:bg-cyan-950">
        <h1 className="text-sm font-bold text-center text-black dark:text-white md:text-3xl">
          NUEVOS CAMPEONES
        </h1>
        <h1 className="text-sm font-bold text-center text-black dark:text-white md:text-3xl">
          |
        </h1>
        <h1 className="text-sm font-bold text-center text-black dark:text-white md:text-3xl">
          NUEVOS RETADORES
        </h1>
        <h1 className="text-sm font-bold text-center text-black dark:text-white md:text-3xl">
          |
        </h1>
        <h1 className="text-sm font-bold text-center text-black dark:text-white md:text-3xl">
          NUEVOS DESAFÍOS
        </h1>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 m-auto max-w-[80rem]">
        <div className="flex flex-col justify-between order-3 gap-4 md:order-1">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-center text-cyan-950 dark:text-orange-50 md:text-5xl">
              Domina el Ring, Conquista tu Destino
            </h1>
            <p className="text-black text-start dark:text-white md:text-xl">
              En WLP llevamos la pasión por la lucha libre al siguiente nivel.
              Aprende las técnicas, mejora tu fuerza y desarrolla tu estilo
              único en un ambiente diseñado para verdaderos guerreros del ring.
              Ya seas principiante o un luchador experimentado, aquí encontrarás
              el entrenamiento perfecto para ti.
            </p>
          </div>

          <button className="flex justify-center w-full p-2 m-auto transition-all duration-700 ease-out md:w-1/3 dark:text-black bg-sky-900 dark:bg-orange-50 md:text-2xl font-antonio hover:bg-cyan-950 dark:hover:bg-orange-200">
            Leer Más
          </button>
        </div>

        <div className="order-1 md:order-2 ">
          <img src={imgN1} alt="imgN1" className="w-full h-auto" />
        </div>

        <div className="flex flex-col items-center order-2 gap-4 md:order-3 md:col-span-2">
          <h1 className="text-3xl font-bold text-center text-cyan-950 dark:text-orange-50 md:text-5xl">
            Lucha con Honor, Gana con Pasión
          </h1>
          <p className="text-center text-black dark:text-white  md:text-xl max-w-[50rem]">
            Forma parte de una comunidad que comparten tu mismo espíritu
            y determinación. En WLP, cada entrenamiento es una oportunidad para
            superarte, cada combate es una lección y cada victoria es el reflejo
            de tu esfuerzo. La lucha libre es más que un deporte, es un estilo
            de vida. ¿Estás listo para el desafío?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

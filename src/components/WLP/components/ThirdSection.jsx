import React from "react";
import imgN2 from "../img/imgN2.webp";

const ThirdSection = () => {
  return (
    <div className="relative w-full min-h-screen  bg-orange-50  dark:bg-sky-900 text-amber-50">
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 m-auto max-w-[70rem]">
        <div className=" ">
          <h1 className="text-center border-b-2 pb-2 border-cyan-950 dark:border-orange-50  text-cyan-950 dark:text-orange-50 font-bold text-4xl md:text-6xl">
            HONOR
          </h1>

          <h1 className="text-center   text-cyan-950 dark:text-orange-50 font-bold text-3xl md:text-5xl">
            CONSTANCIA
          </h1>
          <img src={imgN2} alt="imgN2" className="w-full h-auto" />
          <h1 className="text-center border-b-2 pb-2 border-cyan-950 dark:border-orange-50  text-cyan-950 dark:text-orange-50 font-bold text-4xl md:text-6xl">
            PASIÓN
          </h1>

          <h1 className="text-center border-b-2 pb-2 border-cyan-950 dark:border-orange-50  text-cyan-950 dark:text-orange-50 font-bold text-3xl md:text-5xl">
            DISCIPLINA
          </h1>
        </div>

        <div className=" flex flex-col justify-start gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-3xl md:text-5xl">
              WLP
            </h1>
            <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-3xl">
              Pasión, Disciplina y Compromiso
            </h1>
            <p className="text-start text-black dark:text-white  md:text-xl">
              La lucha libre es un deporte emocionante, pero también desafiante.
              En WLP, sabemos que subir al ring implica riesgos, por eso te
              entrenamos con la mejor técnica, disciplina y seguridad. Cada
              llave, caída y movimiento requiere precisión, fuerza y control. No
              se trata solo de talento, sino de preparación.
            </p>
            <p className="text-start text-black dark:text-white  md:text-xl">
              Para ser un verdadero luchador, debes comprometerte con tu cuerpo
              y mente: 
              <ul>
                <li>
                  {" "}
                  <span className="text-start font-bold text-cyan-950 dark:text-orange-50  md:text-xl">
                    Entrena con disciplina
                  </span>{" "}
                  para fortalecer tu resistencia y evitar lesiones.
                </li>
                <li>
                  {" "}
                  <span className="text-start font-bold text-cyan-950 dark:text-orange-50  md:text-xl">
                    Aliméntate bien
                  </span>{" "}
                  para tener la energía y recuperación que tu cuerpo necesita.
                </li>
                <li>
                  {" "}
                  <span className="text-start font-bold text-cyan-950 dark:text-orange-50  md:text-xl">
                    Sigue las instrucciones de tus entrenadores
                  </span>{" "}
                  y aprende a caer con seguridad.
                </li>
              </ul>
            </p>
            <p className="text-start text-black dark:text-white  md:text-xl">
              La lucha libre no es solo combate, es superación. Si entrenas con
              dedicación y respeto, dominarás el ring sin ponerte en peligro.
              <span className="text-start font-bold text-cyan-950 dark:text-orange-50 md:text-xl">
                {" "}Lucha con honor, gana con pasión
              </span>
            </p>
            <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-3xl ">
              NO LO INTENTE EN CASA
            </h1>
          </div>

          <button className="w-full dark:text-black flex justify-center p-2 transition-all duration-700 ease-out bg-sky-900 dark:bg-orange-50 md:text-2xl font-bold hover:bg-cyan-950 dark:hover:bg-orange-200">
            Subir al Ring
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

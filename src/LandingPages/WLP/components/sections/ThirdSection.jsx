import React from "react";
import imgN2 from "../../assets/img/imgN2.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto gap-4 p-4 bg-beige-100 dark:bg-slate-900 text-slate-950 dark:text-beige-100">
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 m-auto max-w-[80rem]">
        <div className="">
          <h1 className="pb-2 text-2xl font-bold text-center border-b-2 border-slate-950 dark:border-beige-100 md:text-4xl">
            HONOR
          </h1>

          <h1 className="text-2xl font-bold text-center md:text-4xl">
            CONSTANCIA
          </h1>
          <img src={imgN2} alt="imgN2" className="w-full h-auto m-auto md:max-w-96" />
          <h1 className="pb-2 text-2xl font-bold text-center border-b-2 border-slate-950 dark:border-beige-100 md:text-4xl">
            PASIÓN
          </h1>

          <h1 className="pb-2 text-3xl font-bold text-center border-b-2 border-slate-950 dark:border-beige-100 md:text-4xl">
            DISCIPLINA
          </h1>
        </div>

        <div className="flex flex-col justify-start gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-center md:text-4xl">WLP</h1>
            <h1 className="text-xl font-bold text-center md:text-xl ">
              Pasión, Disciplina y Compromiso
            </h1>
            <p className="text-base text-slate-950 text-start dark:text-white md:text-xl">
              La lucha libre es un deporte emocionante, pero también desafiante.
              En WLP, sabemos que subir al ring implica riesgos, por eso te
              entrenamos con la mejor técnica, disciplina y seguridad. Cada
              llave, caída y movimiento requiere precisión, fuerza y control. No
              se trata solo de talento, sino de preparación.
            </p>
            <p className="text-base text-slate-950 text-start dark:text-white md:text-xl">
              Para ser un verdadero luchador, debes comprometerte con tu cuerpo
              y mente:
              <ul>
                <li>
                  {" "}
                  <span className="font-bold text-start md:text-xl">
                    Entrena con disciplina
                  </span>{" "}
                  para fortalecer tu resistencia y evitar lesiones.
                </li>
                <li>
                  {" "}
                  <span className="font-bold text-start md:text-xl">
                    Aliméntate bien
                  </span>{" "}
                  para tener la energía y recuperación que tu cuerpo necesita.
                </li>
                <li>
                  {" "}
                  <span className="font-bold text-start md:text-xl">
                    Sigue las instrucciones de tus entrenadores
                  </span>{" "}
                  y aprende a caer con seguridad.
                </li>
              </ul>
            </p>
            <p className="text-base text-slate-950 text-start dark:text-white md:text-xl">
              La lucha libre no es solo combate, es superación. Si entrenas con
              dedicación y respeto, dominarás el ring sin ponerte en peligro.
              <span className="font-bold text-start md:text-xl">
                {" "}
                Lucha con honor, gana con pasión
              </span>
            </p>
            <h1 className="text-2xl font-bold text-center">
              NO LO INTENTE EN CASA
            </h1>
          </div>

          <button className="flex justify-center w-full p-2 font-bold text-white transition-all duration-700 ease-out rounded-xl dark:text-slate-950 bg-slate-700 hover:bg-slate-900 dark:bg-beige-100 hover:dark:bg-orange-200 md:text-2xl ">
            Subir al Ring
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

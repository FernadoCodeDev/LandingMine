import React from "react";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";
import imgN4 from "../../assets/img/imgN4.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center h-auto gap-4 p-4 text-black bg-white lg:text-2xl dark:text-white dark:bg-neutral-900">
      <div className="m-auto flex flex-col gap-4 max-w-[80rem]">
        <h1 className="text-3xl font-bold text-center lg:text-6xl text-sky-800 dark:text-lime-400">
          Aprovecha cada rayo de sol
        </h1>

        <p className="text-center text-base md:text-lg max-w-[50rem]">
          La energía solar nunca ha sido tan eficiente. En Clover, ofrecemos
          paneles solares de alta calidad diseñados para captar la máxima
          energía, incluso en condiciones de poca luz. Descubre cuál es el ideal
          para ti.
        </p>
      </div>

      <div className="m-auto max-w-[80rem] grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative grid items-center justify-center w-full h-auto grid-cols-1 p-2 ">
          <div className="relative z-10 flex flex-col items-center w-full h-full">
            {/* Image */}
            <img
              src={imgN2}
              alt="imgN2"
              className="w-full max-w-[200px] h-auto drop-shadow-2xl"
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-start gap-4 p-2 text-center">
              <h1 className="text-lg font-bold text-white md:text-xl">
                Paneles Monocristalinos
              </h1>
              <p className="text-base text-white md:text-lg text-start">
                Son la opción más eficiente del mercado, ideales para quienes
                buscan el mejor rendimiento y durabilidad. Gracias a su
                tecnología avanzada, pueden captar más energía en menos espacio,
                lo que los convierte en la mejor opción a largo plazo, aunque su
                costo inicial sea más elevado.
              </p>

              <button className="flex justify-center w-full p-2 font-bold text-white transition-all duration-700 ease-out bg-lime-500 hover:bg-lime-600">
                Comprar
              </button>
            </div>
          </div>

          {/* sky 800 background */}
          <div className="absolute bottom-0 left-0 w-full h-[80%] md:h-[85%]  bg-sky-800"></div>
        </div>

        <div className="relative grid items-center justify-center w-full h-auto grid-cols-1 p-2 ">
          <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
            {/* Image */}
            <img
              src={imgN3}
              alt="imgN3"
              className="w-full max-w-[200px] h-auto drop-shadow-2xl"
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-start gap-4 p-2 text-center">
              <h1 className="text-lg font-bold text-white md:text-xl">
                Paneles policristalinos
              </h1>
              <p className="text-base text-white md:text-lg text-start">
                Representan un equilibrio perfecto entre eficiencia y precio.
                Son una alternativa accesible para quienes desean aprovechar la
                energía solar sin una gran inversión inicial. Su rendimiento es
                confiable y funcionan muy bien en hogares y pequeños negocios
                que buscan reducir su consumo eléctrico sin comprometer
                demasiado el presupuesto.
              </p>

              <button className="flex justify-center w-full p-2 font-bold text-white transition-all duration-700 ease-out bg-lime-500 hover:bg-lime-600">
                Comprar
              </button>
            </div>
          </div>

          {/* sky 800 background */}
          <div className="absolute bottom-0 left-0 w-full h-[80%] md:h-[85%]  bg-sky-800"></div>
        </div>

        <div className="relative grid items-center justify-center w-full h-auto grid-cols-1 p-2 ">
          <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
            {/* Image */}
            <img
              src={imgN4}
              alt="imgN4"
              className="w-full max-w-[200px] h-auto drop-shadow-2xl"
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-start gap-4 p-2 text-center">
              <h1 className="text-lg font-bold text-white md:text-xl">
                Paneles de película delgada
              </h1>
              <p className="text-base text-white md:text-lg text-start">
                Destacan por su versatilidad y diseño ligero. Son la opción
                ideal para instalaciones donde la flexibilidad es clave, ya que
                pueden adaptarse a distintas superficies. Aunque su eficiencia
                es menor en comparación con los otros tipos, son una alternativa
                atractiva para proyectos que requieren soluciones estéticas y
                económicas en espacios más amplios.
              </p>

              <button className="flex justify-center w-full p-2 font-bold text-white transition-all duration-700 ease-out bg-lime-500 hover:bg-lime-600">
                Comprar
              </button>
            </div>
          </div>

          {/* sky 800 background */}
          <div className="absolute bottom-0 left-0 w-full h-[80%] md:h-[85%]  bg-sky-800"></div>
        </div>
      </div>

      <div className="m-auto flex flex-col gap-4 max-w-[80rem]">
        <p className="text-center max-w-[50rem] text-base md:text-lg">
          No importa el clima,{" "}
          <span className="font-bold text-cyan-800 dark:text-lime-400">
            Clover
          </span>{" "}
          tiene el panel ideal para ti. Descubre cuál se adapta mejor a tus
          necesidades.{" "}
        </p>
      </div>
    </div>
  );
};

export default FirstSection;

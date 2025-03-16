import React from "react";
import imgN6 from "../img/imgN6.webp";
import imgN7 from "../img/imgN7.webp";
import imgN8 from "../img/imgN8.webp";
import imgN9 from "../img/imgN9.webp";
import imgN10 from "../img/imgN10.webp";
import imgN11 from "../img/imgN11.webp";
import imgN12 from "../img/imgN12.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-white dark:text-white dark:bg-neutral-900 lg:text-2xl ">
      <h1 className="p-2 text-2xl font-bold text-center border-b-2 border-blue-400 md:text-4xl dark:border-orange-300">
        Compra tu Libro Ahora
      </h1>
      <p className="text max-w-[50rem]">
        Encuentra el libro perfecto para ti y empieza a disfrutar de nuevas
        aventuras literarias. ¡Haz tu pedido hoy y déjate llevar por el poder de
        la lectura!
      </p>
      <div className="mt-4 max-w-[90rem] grid grid-cols-1 items-center gap-4 m-auto md:grid-cols-3">
        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img
            src={imgN6}
            alt="imgN6"
            className="object-contain w-full h-auto p-2 md:w-60 md:h-60 lg:w-80 lg:h-80"
          />
          <div className="flex flex-col items-center justify-center gap-2 shadow-xl md:h-[25rem] bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold to-blue-400">
              La Magia del Sabor
            </h1>
            <p className="p-2">
              Descubre recetas irresistibles para cada ocasión. Desde platos
              rápidos hasta menús gourmet, este libro transformará tu cocina en
              un verdadero santuario culinario.
            </p>
            <div className="grid items-center w-full grid-cols-2 gap-2 ">
              <button className="w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="text-2xl font-bold">$12.99</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img
            src={imgN7}
            alt="imgN7"
            className="object-contain w-full h-auto p-2 md:w-60 md:h-60 lg:w-80 lg:h-80 "
          />
          <div className="flex flex-col items-center justify-center gap-2 shadow-xl md:h-[25rem] bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold to-blue-400">
              En el Corazón del Misterio
            </h1>
            <p className="p-2">
              Un thriller apasionante que te mantendrá al borde de tu asiento.
              Un detective debe resolver el misterio de una desaparición en la
              ciudad, pero la verdad es más oscura de lo que imagina.
            </p>
            <div className="grid items-center w-full grid-cols-2 gap-2 ">
              <button className="w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="text-2xl font-bold">$14.50</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img
            src={imgN8}
            alt="imgN8"
            className="object-contain w-full h-auto p-2 md:w-60 md:h-60 lg:w-80 lg:h-80 "
          />
          <div className="flex flex-col items-center justify-center gap-2 shadow-xl md:h-[25rem] bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold to-blue-400">
              Viaje al Pasado
            </h1>
            <p className="p-2">
              Una historia épica que te lleva a los momentos cruciales de la
              historia humana. Viaja en el tiempo y vive las grandes
              civilizaciones de la antigüedad.
            </p>
            <div className="grid items-center w-full grid-cols-2 gap-2 ">
              <button className="w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="text-2xl font-bold">$16.00</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img
            src={imgN9}
            alt="imgN9"
            className="object-contain w-full h-auto p-2 md:w-60 md:h-60 lg:w-80 lg:h-80 "
          />
          <div className="flex flex-col items-center justify-center gap-2 shadow-xl md:h-[25rem] bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold to-blue-400">
              Bajo el Cielo Estrellado
            </h1>
            <p className="p-2">
              Un relato de ciencia ficción que combina el misterio del universo
              con las relaciones humanas. Un astronauta perdido en el espacio
              descubrirá secretos que podrían cambiar el destino de la
              humanidad.
            </p>
            <div className="grid items-center w-full grid-cols-2 gap-2 ">
              <button className="w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="text-2xl font-bold">$18.75</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img
            src={imgN10}
            alt="imgN10"
            className="object-contain w-full h-auto p-2 md:w-60 md:h-60 lg:w-80 lg:h-80 "
          />
          <div className="flex flex-col items-center justify-center gap-2 shadow-xl md:h-[25rem] bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold to-blue-400">
              El Arte de Crear
            </h1>
            <p className="p-2">
              {" "}
              Una guía imprescindible para artistas de todas las disciplinas.
              Aprende técnicas, inspira tu creatividad y descubre nuevas formas
              de expresión artística.
            </p>
            <div className="grid items-center w-full grid-cols-2 gap-2 ">
              <button className="w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="text-2xl font-bold">$20.00</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img
            src={imgN11}
            alt="imgN11"
            className="object-contain w-full h-auto p-2 md:w-60 md:h-60 lg:w-80 lg:h-80 "
          />
          <div className="flex flex-col items-center justify-center gap-2 shadow-xl md:h-[25rem] bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold to-blue-400">
              Estrategias del Éxito
            </h1>
            <p className="p-2">
              Un enfoque revolucionario sobre cómo alcanzar tus metas. Con
              consejos de expertos, este libro te guiará paso a paso para
              construir el éxito en tu vida personal y profesional.{" "}
            </p>
            <div className="grid items-center w-full grid-cols-2 gap-2 ">
              <button className="w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="text-2xl font-bold">$22.99</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img
            src={imgN12}
            alt="imgN12"
            className="object-contain w-full h-auto p-2 md:w-60 md:h-60 lg:w-80 lg:h-80 "
          />
          <div className="flex flex-col items-center justify-center gap-2 shadow-xl md:h-[25rem] bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold to-blue-400">
              Historias de Corazón y Alma
            </h1>
            <p className="p-2">
              Una colección de relatos conmovedores sobre el amor, la pérdida y
              la redención. Perfecto para quienes disfrutan de historias que
              tocan el alma.
            </p>
            <div className="grid items-center w-full grid-cols-2 gap-2 ">
              <button className="w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="text-2xl font-bold">$15.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

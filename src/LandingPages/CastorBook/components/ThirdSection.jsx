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
    <div className="relative flex flex-col items-center w-full h-auto gap-4 p-4 text-black bg-white dark:text-white dark:bg-neutral-900 ">
      <h1 className="p-2 text-2xl font-bold text-center border-b-2 border-blue-400 md:text-4xl dark:border-orange-300">
        Compra tu Libro Ahora
      </h1>
      <p className="text-base md:text-2xl text-center max-w-[50rem]">
        Encuentra el libro perfecto para ti y empieza a disfrutar de nuevas
        aventuras literarias. ¡Haz tu pedido hoy y déjate llevar por el poder de
        la lectura!
      </p>
      <div className="max-w-[90rem] grid grid-cols-2 items-center gap-4 m-auto md:grid-cols-3 lg:grid-cols-4">
        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img src={imgN6} alt="imgN6" className="w-full h-auto" />
          <div className="flex flex-col items-center justify-center h-auto gap-2 shadow-xl bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold text-center ">
              Magia del Sabor
            </h1>

            <div className="grid items-center w-full grid-cols-1 gap-2 md:grid-cols-2 ">
              <button className="order-2 w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 md:order-1 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="order-1 text-2xl font-bold md:order-2">$12.99</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img src={imgN7} alt="imgN7" className="w-full h-auto " />
          <div className="flex flex-col items-center justify-center h-auto gap-2 shadow-xl bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold text-center ">
              Corazón del Misterio
            </h1>

            <div className="grid items-center w-full grid-cols-1 gap-2 md:grid-cols-2 ">
              <button className="order-2 w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 md:order-1 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="order-1 text-2xl font-bold md:order-2">$14.50</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img src={imgN8} alt="imgN8" className="w-full h-auto " />
          <div className="flex flex-col items-center justify-center h-auto gap-2 shadow-xl bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold text-center ">
              Viaje al Pasado
            </h1>

            <div className="grid items-center w-full grid-cols-1 gap-2 md:grid-cols-2 ">
              <button className="order-2 w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 md:order-1 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="order-1 text-2xl font-bold md:order-2">$16.00</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img src={imgN9} alt="imgN9" className="w-full h-auto " />
          <div className="flex flex-col items-center justify-center h-auto gap-2 shadow-xl bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold text-center ">
              Cielo Estrellado
            </h1>

            <div className="grid items-center w-full grid-cols-1 gap-2 md:grid-cols-2 ">
              <button className="order-2 w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 md:order-1 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="order-1 text-2xl font-bold md:order-2">$18.75</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img src={imgN10} alt="imgN10" className="w-full h-auto " />
          <div className="flex flex-col items-center justify-center h-auto gap-2 shadow-xl bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold text-center ">
              El Arte de Crear
            </h1>

            <div className="grid items-center w-full grid-cols-1 gap-2 md:grid-cols-2 ">
              <button className="order-2 w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 md:order-1 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="order-1 text-2xl font-bold md:order-2">$20.00</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img src={imgN11} alt="imgN11" className="w-full h-auto " />
          <div className="flex flex-col items-center justify-center h-auto gap-2 shadow-xl bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold text-center ">
              Estrategias del Éxito
            </h1>

            <div className="grid items-center w-full grid-cols-1 gap-2 md:grid-cols-2 ">
              <button className="order-2 w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 md:order-1 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="order-1 text-2xl font-bold md:order-2">$22.99</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-beige-50 dark:border-neutral-800">
          <img src={imgN12} alt="imgN12" className="w-full h-auto " />
          <div className="flex flex-col items-center justify-center h-auto gap-2 shadow-xl bg-beige-50 dark:bg-neutral-800">
            <h1 className="p-2 text-2xl font-bold text-center">
              Corazón del Alma
            </h1>

            <div className="grid items-center w-full grid-cols-1 gap-2 md:grid-cols-2 ">
              <button className="order-2 w-20 h-20 p-2 text-4xl font-bold text-white transition-all duration-700 ease-out bg-blue-300 md:order-1 hover:bg-blue-500 dark:bg-orange-300 dark:hover:bg-orange-500">
                +
              </button>

              <p className="order-1 text-2xl font-bold md:order-2">$15.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

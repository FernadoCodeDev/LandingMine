import React from "react";
import imgN5 from "../../assets/img/imgN5.webp";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col gap-4 items-center h-auto p-4 text-white lg:text-2xl bg-sky-800">
      <div className="m-auto max-w-[80rem] grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
        <div className="">
          <img
            src={imgN5}
            alt="imgN5"
            className="w-full h-auto rounded-full shadow-2xl"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-2xl md:text-4xl">Instalación Profesional</h1>

          <p className="">
            En <span className="text-lime-400 font-bold">Clover</span> , nos aseguramos de que
            cada cliente reciba una instalación profesional y sin
            complicaciones. Nuestro equipo de expertos se encargará de colocar
            tus paneles solares con precisión y eficiencia, optimizando su
            rendimiento desde el primer día.
          </p>

          <p className="">
            Además, no solo instalamos, sino que también te enseñamos a sacar el
            máximo provecho de tu sistema solar. Te explicaremos su
            funcionamiento, el monitoreo de la energía generada y las mejores
            prácticas para su mantenimiento, asegurando que disfrutes de sus
            beneficios por muchos años.
          </p>

          <p className="">
            Confía en nosotros para hacer tu transición a la energía solar de
            manera sencilla, segura y eficiente.
          </p>

          <button className="flex justify-center w-full p-2 font-bold text-white transition-all duration-700 ease-out bg-lime-500 hover:bg-lime-600">
          ¡Da el primer paso hacia la energía solar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

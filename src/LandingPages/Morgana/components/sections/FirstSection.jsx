import React from "react";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";

const FirstSection = () => {
  return (
    <div className="relative grid items-center justify-center w-full grid-cols-1 p-4 py-20 text-black min-h-auto bg-beige-50 dark:text-white dark:bg-neutral-900">
      <div className="p-2 grid grid-cols-1 lg:grid-cols-2 gap-4 m-auto max-w-[80rem]">
        <div className="grid grid-cols-1 gap-2 md:gap-4">
          <h1 className="text-6xl font-bold text-center lg:text-7xl text-beige-900 dark:text-beige-200">
            Morgana
          </h1>
          <p className=" md:text-xl">
            En <span className="font-bold text-beige-900 dark:text-beige-200">Morgana</span>, llevamos más de 10
            años ofreciendo a nuestros clientes la mejor experiencia en compra y
            renta de automóviles. Nos especializamos en brindar una amplia
            selección de vehículos, desde autos elegantes y deportivos hasta
            opciones familiares y económicas, adaptándonos a cada estilo de vida
            y necesidad.
          </p>

          <p className="md:text-xl">
            Creemos que cada viaje es único, y por eso trabajamos para que
            encuentres el auto perfecto para cada momento.
            <span className="font-bold text-beige-900 dark:text-beige-200">
              {" "}
              Descubre Morgana y deja que la carretera te lleve a nuevas
              aventuras.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 gap-2">
          <div className="row-span-2 md:row-span-2 ">
            <img src={imgN2} alt="imgN2" className="w-full h-full rounded-xl" />
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-xl">
            <h1 className="font-bold text-center text-white md:text-3xl">
              +10 Años
            </h1>
            <p className="text-center text-white md:text-2xl">Experiencia</p>
          </div>

          <img
            src={imgN3}
            alt="imgN3"
            className="object-contain w-full h-auto rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

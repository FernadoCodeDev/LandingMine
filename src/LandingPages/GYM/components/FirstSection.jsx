import React from "react";
import ImageGym2 from "../img/ImageGym2.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto bg-neutral-800">
      <div className=" grid grid-cols-1 p-4 md:grid-cols-2 max-w-[90rem]">
        <div>
          <img src={ImageGym2} alt="ImageGym2" className="w-full h-auto" />
        </div>

        <div className="relative p-4 text-white">
          <h1 className="absolute leading-none inset-0 font-mono font-bold text-center opacity-10 text-neutral-500 text-[4rem] lg:text-[7rem] z-1 translate-y-6">
            ¿QUIENES SOMOS?
          </h1>

          <h1 className="font-mono text-3xl font-bold text-start">
            ¿QUIENES SOMOS?
          </h1>

          <p className="p-1 text-base text-start md:text-2xl">
            En Gym creemos que, independientemente de la forma y el tamaño,
            todos estamos en un viaje hacia nuestros mejores niveles personales
            de salud y estado físico. Un viaje que nos hace mejores como
            atletas, amigos y personas. Nuestras instalaciones son diferentes a
            cualquier otro gimnasio en el que hayas estado antes.
          </p>
        </div>

        <div className="p-4 m-auto text-white md:col-span-2">
          <p className="p-1 text-base text-start md:text-2xl max-w-[50rem]">
            Nos enorgullecemos no solo de brindar un entrenamiento de primera
            clase, sino que también creemos en crear un entorno motivador y
            dinámico. Somos la comunidad dedicada a tu evolución humana, un
            entrenamiento a la vez. ¡Ven a una{" "}
            <span className="text-yellow-300">clase de prueba gratuita!</span>{" "}
            Pierde algo de grasa corporal, gana amigos y ponte en forma para
            toda la vida.
          </p>
        </div>

        <button className="w-full px-6 py-2 m-auto mt-4 font-semibold text-black transition-all duration-700 ease-out bg-yellow-300 rounded-tl-full rounded-br-full md:w-96 md:col-span-2 hover:bg-yellow-500">
          MÁS INFORMACIÓN
        </button>
      </div>
    </div>
  );
};

export default FirstSection;

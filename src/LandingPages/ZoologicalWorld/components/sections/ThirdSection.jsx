import React from "react";
import TrayFoodSVG from "../../assets/svg/TrayFoodSVG";
import ParkingSVG from "../../assets/svg/ParkingSVG";
import GateSVG from "../../assets/svg/GateSVG";
import OpenGateSVG from "../../assets/svg/OpenGateSVG";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen gap-4 p-4 text-black bg-white md:text-2xl dark:text-white dark:bg-neutral-900">
      <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
        Instalaciones de Zoological World
      </h1>
      <p className="text-xl text-center md:text-2xl max-w-[50rem]">
        En Zoological World, nos aseguramos de que tu experiencia sea cómoda y
        memorable, con servicios y facilidades para todos los visitantes.
      </p>
      <div className=" max-w-[80rem] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-4">
          <TrayFoodSVG height="150" width="150" />
          <h1 className="font-bold text-center">Sabores de la Sabana</h1>
          <p className="text-center">
            Disfruta de una variedad de opciones gastronómicas que te harán
            sentir como si estuvieras en la sabana. Desde platos rápidos hasta
            opciones gourmet, tenemos algo para todos los gustos.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <ParkingSVG height="150" width="150" />
          <h1 className="font-bold text-center">
            Tu comodidad, nuestra prioridad
          </h1>
          <p className="text-center">
            Contamos con un amplio estacionamiento para que puedas disfrutar de
            tu visita sin preocupaciones. ¡Estaciona cómodamente y adéntrate en
            la aventura!
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
        Horarios
      </h1>

      <div className=" max-w-[80rem] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-4">
          <GateSVG height="150" width="150" />
          <h1 className="font-bold text-center">Cerrado los lunes</h1>
          <p className="text-center">
            Nuestro zoológico estará cerrado los lunes para mantenimiento y
            cuidado de los animales. Te esperamos con los brazos abiertos el
            resto de la semana.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <OpenGateSVG height="150" width="150" />
          <h1 className="font-bold text-center">Abierto de martes a domingo</h1>
          <p className="text-center">
            Desde martes hasta domingo, nuestras puertas están abiertas para que
            disfrutes de un día lleno de aventuras y aprendizaje. ¡No te lo
            pierdas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

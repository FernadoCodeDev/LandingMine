import React from "react";
import imgN4 from "../../assets/img/imgN4.webp";
import BookOnlineSVG from "../../assets/svg/BookOnlineSVG";
import VisitCliniCSVG from "../../assets/svg/VisitCliniCSVG";
import Tooth1SVG from "../../assets/svg/Tooth1SVG";

const FirstSection = () => {
  return (
    <div className="relative w-full h-auto p-4 text-black lg:text-xl bg-beige-100 dark:text-white dark:bg-neutral-900">
      <div className="grid grid-cols-1 items-center justify-center gap-4 md:gap-12 md:grid-cols-2 m-auto max-w-[80rem]">
        <h1 className="text-3xl font-bold text-center lg:text-5xl text-rose-800 dark:text-beige-100">
          Consiga dientes blancos perlados fácilmente
        </h1>

        <p>
          Servicio de contacto online con el médico para realizar una consulta
          sobre tu salud dental o solicitar horarios de trabajo en la clínica
        </p>

        <img
          src={imgN4}
          alt="imgN4"
          className="w-full max-w-[25rem] h-auto rounded-t-full"
        />

        <div className="grid items-center grid-cols-1 gap-2">
          <div className="grid grid-cols-1 ">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 rounded-full bg-beige-100 dark:bg-white">
              <BookOnlineSVG width="40" height="40" />
            </div>
            <h1 className="text-2xl font-bold">Reservar en línea</h1>

            <p className="">
              consulta rápidamente cuándo estamos disponibles y reserva un
              horario para toda la familia en menos de 5 minutos. Es muy fácil
            </p>
          </div>

          <div className="grid grid-cols-1">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 rounded-full bg-beige-100 dark:bg-white">
              <VisitCliniCSVG width="40" height="40" />
            </div>

            <h1 className="text-2xl font-bold">Visita la clínica</h1>

            <p className="">
              Visita nuestra clínica. Los niños también tienen su propia zona de
              juegos privada y una sala exclusiva para ellos.
            </p>
          </div>

          <div className="grid grid-cols-1">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 rounded-full bg-beige-100 dark:bg-white">
              <Tooth1SVG width="40" height="40" />
            </div>

            <h1 className="text-2xl font-bold">Obtenga tratamiento</h1>

            <p className="">
              Consiga tratar sus dientes con una experiencia satisfactoria y un
              servicio profesional de un médico experto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

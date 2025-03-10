import React from "react";
import imgN3 from "../img/imgN3.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black lg:text-2xl bg-beige-50 dark:text-white dark:bg-neutral-900">
      <h1 className="text-center font-bold text-3xl max-w-[70rem]">Un lugar ideal para acampar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-auto max-w-[80rem]">
        <div className="grid grid-cols-1 gap-2">
          <details className="p-2 bg-beige-100 dark:bg-neutral-800">
            <summary className="font-bold">Zona de Inscripción</summary>
            Regístrate fácilmente en nuestra acogedora cabaña de inscripción.
            Nuestro equipo te guiará para que disfrutes al máximo tu aventura.
          </details>

          <details className="p-2 bg-beige-100 dark:bg-neutral-800">
            <summary className="font-bold">Renta de Equipo</summary>
            ¿No tienes equipo de camping? No te preocupes, ofrecemos tiendas de
            campaña, sacos de dormir y más para tu comodidad.
          </details>

          <details className="p-2 bg-beige-100 dark:bg-neutral-800">
            <summary className="font-bold">Baños y Duchas</summary>
            Contamos con instalaciones limpias y cómodas, incluyendo sanitarios
            y duchas con agua caliente para tu comodidad.
          </details>

          <details className="p-2 bg-beige-100 dark:bg-neutral-800">
            <summary className="font-bold">Actividades Guiadas</summary>
            Disfruta de senderismo nocturno, fogatas grupales y exploraciones
            con guías expertos que harán tu experiencia inolvidable.
          </details>
        </div>

        <div className="">
          <img src={imgN3} alt="imgN3" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

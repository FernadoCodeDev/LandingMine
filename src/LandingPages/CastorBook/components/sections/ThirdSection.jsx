import React from "react";
import Books from "./Books";

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

      <Books />
    </div>
  );
};

export default ThirdSection;

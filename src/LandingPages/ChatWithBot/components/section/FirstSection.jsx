import React from "react";
import Icons from "../ui/icons"

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen gap-4 p-4 text-black bg-white dark:text-white dark:bg-neutral-900">
      <h1 className="text-2xl font-bold text-center md:text-4xl">
        Hola ¿En qué puedo ayudarte?
      </h1>

      <div className="mx-auto max-w-[80rem] rounded-2xl flex flex-col w-full gap-2 p-2 mb-4 border bg-slate-100 dark:bg-neutral-800 border-emerald-800 focus:outline-none focus:ring focus:ring-emerald-800">
        <input
          className="w-full p-2 mr-2 bg-transparent flex-grow-1 border-2-emerald-800"
          placeholder="Pregunta lo que quieras"
        />

        <Icons />
      </div>
    </div>
  );
};

export default FirstSection;

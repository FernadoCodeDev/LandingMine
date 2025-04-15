import React from "react";
import ArticlesCooktopia from "./ArticlesCooktopia";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 bg-stone-300 text-stone-700 dark:text-slate-200 bg-bg-stone-300 dark:bg-neutral-800">
      <h1 className="font-mono font-bold text-2xl md:text-4xl text-center max-w-[70rem]">
        DESCUBRE LA COLECCIÓN DURADERA
      </h1>

      <div className="h-auto flex flex-col gap-2 justify-between max-w-[70rem] m-auto p-2 md:flex-row dark:text-white md:col-span-3">
        <button className="p-2 font-bold border-b-2 cursor-pointer text-stone-800 dark:text-slate-100 border-stone-800 dark:border-slate-100">
          LOS MÁS VENDIDOS
        </button>
        <button className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer dark:border-neutral-700 hover:border-stone-800 dark:hover:hover:border-slate-100">
          EQUIPOS
        </button>
        <button className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer dark:border-neutral-700 hover:border-stone-800 dark:hover:hover:border-slate-100">
          UTENSILIOS
        </button>
        <button className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer dark:border-neutral-700 hover:border-stone-800 dark:hover:hover:border-slate-100">
          HERRAMIENTAS
        </button>
      </div>

      <ArticlesCooktopia />

      <button className="flex justify-center w-full p-2 m-auto my-4 font-mono font-bold text-white transition-all duration-700 ease-out bg-stone-700 hover:bg-stone-800 md:w-1/3">
        VER TODOS
      </button>
    </div>
  );
};

export default FirstSection;

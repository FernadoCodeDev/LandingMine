import React from "react";
import Plus from "../../assets/svg/Plus";
import Web from "../../assets/svg/web";
import Idea from "../../assets/svg/idea";
import Investigation from "../../assets/svg/Investigation";
import Brush from "../../assets/svg/Brush";
import Tool from "../../assets/svg/Tool";
import Microphone from "../../assets/svg/Microphone";
import Arrow from "../../assets/svg/Arrow";

const icons = () => {
  return (
    <div class="flex justify-around gap-4 items-center pt-10 ">
      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Plus width="20" height="20"/>
        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 ml-10 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Cargar archivos
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Web width="20" height="20"/>

        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Buscar en internet
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Idea width="20" height="20"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Analizar antes de responder
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Investigation width="20" height="20"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Investigar en profundidad
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Brush width="20" height="20"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Visualizar idea
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Tool width="20" height="20"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Herramientas
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Microphone width="20" height="20"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Dictar
        </div>
      </div>

      <button class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Arrow width="20" height="20"/>
      </button>
    </div>
  );
};

export default icons;

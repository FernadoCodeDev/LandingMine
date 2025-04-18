import React from "react";
import PersonN1 from "../../assets/img/PersonN1.webp";
import PersonN2 from "../../assets/img/PersonN2.webp";
import PersonN3 from "../../assets/img/PersonN3.webp";
import PersonN4 from "../../assets/img/PersonN4.webp";
import EventDate from "../ui/EventDate";

const SecondSection = () => {
  return (
    <div className="relative w-full h-auto p-2 text-gray-900 bg-purple-300">
      <div className="m-auto flex flex-col md:flex-row justify-between w-full border-b-2 my-2 border-gray-900 p-2 max-w-[80rem]">
        <p className="text-5xl font-fantasy ">HORARIO</p>

        <div className="flex flex-row items-end justify-end gap-2 ]">
          <p className="text-xl ">VER TODO EL HORARIO</p>
          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 border border-gray-900 rounded-full cursor-pointer">
            <svg
              class="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
              data-slot="icon"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <EventDate />

      <div className="m-auto max-w-[100rem] mt-4 grid grid-cols-1 gap-2">
        <div className="flex flex-row justify-start gap-4 p-4 bg-gray-900">
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            9:00
          </h1>
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            APERTURA
          </h1>
        </div>

        <div className="flex flex-row justify-start gap-4 p-4 bg-gray-900">
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            9:30
          </h1>
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            INTRODUCCIÓN Y BIENVENIDA
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-5 bg-amber-50">
          <h1 className="flex flex-col items-center justify-center font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            10:00
          </h1>
          <h1 className="flex flex-col items-center justify-center font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            DISEÑADOR T-shaped
          </h1>
          <p className="flex flex-col items-center justify-center text-center ">
            Un diseñador T-shaped es alguien que tiene un conocimiento profundo
            y específico dentro de su campo.
          </p>

          <div className="flex flex-col items-center justify-center">
            <img src={PersonN1} alt="" className="w-40 h-auto rounded-full" />
          </div>

          <div className="flex flex-col justify-center col-span-2 text-center md:col-span-1">
            <h1 className="font-sans font-bold text-purple-400 md:text-3xl">
              Esther Howard
            </h1>
            <p>Diseñador de productos</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-5 bg-amber-50">
          <h1 className="flex flex-col items-center justify-center font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            11:00
          </h1>
          <h1 className="flex flex-col items-center justify-center font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            MODELO DE FLEX BOX
          </h1>
          <p className="flex flex-col items-center justify-center text-center ">
            El modelo FLEX BOX en CS5 es un modo de diseño unidimensional
          </p>

          <div className="flex flex-col items-center justify-center">
            <img
              src={PersonN2}
              alt="PersonN2"
              className="w-40 h-auto rounded-full"
            />
          </div>

          <div className="flex flex-col justify-center col-span-2 text-center md:col-span-1">
            <h1 className="font-sans font-bold text-purple-400 md:text-3xl">
              Jane Cooper
            </h1>
            <p>Desarrollador web</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-5 bg-amber-50">
          <h1 className="flex flex-col items-center justify-center font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            12:00
          </h1>
          <h1 className="flex flex-col items-center justify-center font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            DEEP WORK
          </h1>
          <p className="flex flex-col items-center justify-center text-center ">
            Proceso de planificación y control consciente del tiempo dedicado a
            actividades específicas
          </p>

          <div className="flex flex-col items-center justify-center">
            <img
              src={PersonN3}
              alt="PersonN3"
              className="w-40 h-auto rounded-full"
            />
          </div>

          <div className="flex flex-col justify-center col-span-2 text-center md:col-span-1">
            <h1 className="font-sans font-bold text-purple-400 md:text-3xl">
              Rachel Howard
            </h1>
            <p>React Developer</p>
          </div>
        </div>

        <div className="flex flex-row justify-start gap-4 p-4 bg-gray-900 ">
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            12:30
          </h1>
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            Pausa para el almuerzo
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-5 bg-amber-50">
          <h1 className="flex flex-col items-center justify-center font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            14:00
          </h1>
          <h1 className="flex flex-col items-center justify-center font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            INSPIRACIÓN DE DISEÑO
          </h1>
          <p className="flex flex-col items-center justify-center text-center ">
            La inspiración puede venir de cualquier lugar, de un verso de poesía
            o del color de una acera.
          </p>

          <div className="flex flex-col items-center justify-center">
            <img
              src={PersonN4}
              alt="PersonN4"
              className="w-40 h-auto rounded-full"
            />
          </div>

          <div className="flex flex-col justify-center col-span-2 text-center md:col-span-1">
            <h1 className="font-sans font-bold text-purple-400 md:text-3xl">
              Guy Hawkins
            </h1>
            <p>Director de arte</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

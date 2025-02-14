import React from "react";
import Pizza1 from "../img/Pizza1.webp";
import Pizza2 from "../img/Pizza2.webp";
import Pizza3 from "../img/Pizza3.webp";
import Pizza4 from "../img/Pizza4.webp";
import Pizza5 from "../img/Pizza5.webp";
import Pizza6 from "../img/Pizza6.webp";

const Content = () => {
  return (
    <div className="grid items-center grid-cols-2 max-w-[80rem] m-auto gap-2 bg-gray-200 dark:bg-neutral-900 md:grid-cols-3">
      <div className="flex flex-row justify-between col-span-2 p-2 text-black dark:text-white md:col-span-3">
        <botton className="p-2 font-bold bg-gray-300 border-b-2 border-red-600 cursor-pointer dark:bg-neutral-800">
          Pizza
        </botton>
        <botton className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-neutral-800 hover:border-red-600">
          Acompañamientos
        </botton>
        <botton className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-neutral-800 hover:border-red-600">
          Postre
        </botton>
        <botton className="p-2 font-bold transition duration-700 ease-out border-b-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-neutral-800 hover:border-red-600">
          Bebidas
        </botton>
      </div>

      <div className="w-full h-auto bg-white dark:bg-neutral-800">
        <img
          src={Pizza1}
          alt="Pizza Mediterránea"
          className="w-full h-auto p-4 bg-yellow-100 dark:bg-neutral-700"
        />

        <div className="flex flex-col justify-center text-black dark:text-white">
          <h2 className="col-span-2 text-center font-bold text-[2rem]">
          Pizza Mediterránea
          </h2>

          <div className="flex items-center justify-center gap-4 p-2 text-center">
            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">M</span>
            </div>

            <span className="font-bold">/</span>

            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">L</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-white dark:bg-neutral-800">
        <img
          src={Pizza2}
          alt="Pizza Campestre"
          className="w-full h-auto p-4 bg-yellow-100 dark:bg-neutral-700"
        />

        <div className="flex flex-col justify-center text-black dark:text-white">
          <h2 className="col-span-2 text-center font-bold text-[2rem]">
          Pizza Campestre
          </h2>

          <div className="flex items-center justify-center gap-4 p-2 text-center">
            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">M</span>
            </div>

            <span className="font-bold">/</span>

            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">L</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-white dark:bg-neutral-800">
        <img
          src={Pizza3}
          alt="Pizza Margherita"
          className="w-full h-auto p-4 bg-yellow-100 dark:bg-neutral-700"
        />

        <div className="flex flex-col justify-center text-black dark:text-white">
          <h2 className="col-span-2 text-center font-bold text-[2rem]">
          Pizza Margherita
          </h2>

          <div className="flex items-center justify-center gap-4 p-2 text-center">
            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">M</span>
            </div>

            <span className="font-bold">/</span>

            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">L</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-white dark:bg-neutral-800">
        <img
          src={Pizza4}
          alt="pizza cheeseburger"
          className="w-full h-auto p-4 bg-yellow-100 dark:bg-neutral-700"
        />

        <div className="flex flex-col justify-center text-black dark:text-white">
          <h2 className="col-span-2 text-center font-bold text-[2rem]">
          pizza cheeseburger
          </h2>

          <div className="flex items-center justify-center gap-4 p-2 text-center">
            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">M</span>
            </div>

            <span className="font-bold">/</span>

            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">L</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-white dark:bg-neutral-800">
        <img
          src={Pizza5}
          alt="Pizza Doble pepperoni"
          className="w-full h-auto p-4 bg-yellow-100 dark:bg-neutral-700"
        />

        <div className="flex flex-col justify-center text-black dark:text-white">
          <h2 className="col-span-2 text-center font-bold text-[2rem]">
          Pizza Doble pepperoni
          </h2>

          <div className="flex items-center justify-center gap-4 p-2 text-center">
            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">M</span>
            </div>

            <span className="font-bold">/</span>

            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">L</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-white dark:bg-neutral-800">
        <img
          src={Pizza6}
          alt="Pizza Cuatro Quesos"
          className="w-full h-auto p-4 bg-yellow-100 dark:bg-neutral-700"
        />

        <div className="flex flex-col justify-center text-black dark:text-white">
          <h2 className="col-span-2 text-center font-bold text-[2rem]">
          Pizza Cuatro Quesos
          </h2>

          <div className="flex items-center justify-center gap-4 p-2 text-center">
            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">M</span>
            </div>

            <span className="font-bold">/</span>

            <p className="flex items-center text-[1rem]">
              <span className="p-0 m-0 font-bold">$</span>10
            </p>

            <div className="flex items-center justify-center w-8 h-8 font-bold text-black bg-gray-100 border-2 border-gray-400 rounded-full">
              <span className="text-[1rem]">L</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

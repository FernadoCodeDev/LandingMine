import React from "react";
import Menu from "./Menu"

const SecondSetion = () => {
  return (
    <div className="h-full text-black dark:text-white m-auto max-w-[80rem]">
      <div class="flex w-full p-2 ">
        <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            class="pointer-events-none absolute w-5 fill-gray-500 transition"
          >
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
          </svg>
        </div>
        <input
          type="text"
          disabled
          class="w-full bg-white pl-2 text-base rounded-r-lg font-semibold outline-0"
          placeholder="Buscar"
        />
      </div>

      <div className="grid items-center justify-center grid-cols-1 col-span-2 p-2 text-center md:grid-cols-4 ">
        <botton className="p-2 font-bold bg-gray-300 border-b-2 border-red-600 cursor-pointer dark:bg-neutral-800">
          Pizza
        </botton>
        <botton className="p-2 font-bold transition duration-700 ease-out cursor-pointer hover:bg-gray-300 dark:hover:bg-neutral-800 ">
          Accompaniments
        </botton>
        <botton className="p-2 font-bold transition duration-700 ease-out cursor-pointer hover:bg-gray-300 dark:hover:bg-neutral-800 ">
          Dessert
        </botton>
        <botton className="p-2 font-bold transition duration-700 ease-out cursor-pointer hover:bg-gray-300 dark:hover:bg-neutral-800 ">
          Drinks
        </botton>
      </div>

      <Menu />
    </div>
  );
};

export default SecondSetion;

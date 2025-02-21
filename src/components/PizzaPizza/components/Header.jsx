import React from "react";
import DarkMode from "../../GlobalComponents/DarkMode";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import ImagePizzaPizza from "../img/PizzaPizza.webp";

const HeaderPizzaPizza = () => {
  return (
    <div className="grid items-center grid-cols-2 bg-gray-200 dark:bg-neutral-900 md:grid-cols-3">
      <div className="order-1 w-auto m-2 md:order-1">
        <img
          src={ImagePizzaPizza}
          alt="ImagePizzaPizza"
          className="w-40 h-auto m-2"
        />
      </div>
      <div className="flex flex-row justify-end order-2 w-auto m-2 md:order-3">
        <DarkMode />
      </div>
      
      <div className="flex flex-row items-center justify-center order-3 w-full col-span-2 p-2 m-auto md:col-span-1 md:order-2">
      <MobileMenu 
            textColor="text-gray-500 dark:text-slate-300"
            hoverColor="hover:text-gray-700 dark:hover:text-slate-100"
            bgColor="bg-transparent"
            invertColor="invert dark:invert-0"/>
      </div>

      <div className="order-4 w-full col-span-2  border-b-4 border-gray-400 dark:border-neutral-800 md:col-span-4">
      </div>
    </div>
  );
};

export default HeaderPizzaPizza;

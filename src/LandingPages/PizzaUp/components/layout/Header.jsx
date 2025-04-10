import React from "react";
import DarkMode from "../../../GlobalComponents/DarkMode";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import PizzaUp from "../../assets/img/PizzaUp.webp";

const HeaderPizzaUp = () => {
  return (
    <div className="grid items-center grid-cols-2 md:grid-cols-3">
      <div className="order-1 w-auto m-2 md:order-1">
        <img
          src={PizzaUp}
          alt="PizzaUp"
          className="w-40 h-auto m-2"
        />
      </div>
      <div className="flex flex-row justify-end order-2 w-auto m-2 md:order-3">
        <DarkMode />
      </div>
      
      <div className="flex flex-row items-center justify-center order-3 w-full col-span-2 p-2 m-auto md:col-span-1 md:order-2">
      <MobileMenu 
            textColor="text-gray-500 dark:text-slate-300 transition duration-700 ease-out"
            hoverColor="hover:text-red-700 dark:hover:text-red-700"
            bgColor="bg-transparent"
            invertColor="invert dark:invert-0"/>
      </div>

    </div>
  );
};

export default HeaderPizzaUp;

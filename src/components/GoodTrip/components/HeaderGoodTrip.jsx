import React from "react";
import BackgroundGT from "../img/BackgroundGT.webp";
import GoodTripLogo from "../img/GoodTripLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderPB = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${BackgroundGT})` }}
      ></div>

      <div className="grid items-center justify-between grid-cols-2 p-4 md:grid-cols-3">
        <div className="order-1 m-auto">
          <img
            src={GoodTripLogo}
            alt="GoodTripLogo"
            className="w-full h-auto bg-red-400 md:max-w-80"
          />
        </div>

        <div className="order-3 col-span-2 m-auto md:col-span-1 md:order-2 ">
          <MobileMenu
            textColor="text-black dark:text-white"
            hoverColor="hover:text-red-500 dark:hover:text-red-500 "
            bgColor="bg-transparent"
            invertColor="invert dark:invert-0"
          />
        </div>
        <div className="order-2 m-auto">
          <DarkMode />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center md:mt-20">
        <h1>TEXT </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit
          ea, maiores a placeat, eum corrupti vitae tenetur libero consequatur
          explicabo delectus quos amet eos optio cupiditate, porro obcaecati
          quod?
        </p>
      </div>
    </div>
  );
};

export default HeaderPB;

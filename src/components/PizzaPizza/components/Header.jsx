import React from "react";
import DarkMode from "../../GlobalComponents/DarkMode";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import ImagePizzaPizza from "../img/PizzaPizza.webp";

const HeaderPizzaPizza = () => {
  return (
      <div className="grid items-center grid-cols-2 md:grid-cols-3">
        <img src={ImagePizzaPizza} alt="ImagePizzaPizza" />
        <DarkMode />
        <div className="col-span-2 m-auto">
          <MobileMenu />
        </div>

      </div>
  );
};

export default HeaderPizzaPizza;

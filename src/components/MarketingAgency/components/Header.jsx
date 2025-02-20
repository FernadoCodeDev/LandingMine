import React from "react";
import Background from "../img/HeaderBackground.webp";

const HeaderMA = () => {
  return (
    <div className="relative flex flex-col w-full h-auto">
      <div
        className="w-full h-full bg-fixed bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
    </div>
  );
};

export default HeaderMA;

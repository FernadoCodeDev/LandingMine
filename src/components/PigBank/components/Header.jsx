import React from "react";
import PigBankLogo from "../img/PigBankLogoNo1.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderPB = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="grid items-center justify-between grid-cols-2 p-4 md:grid-cols-3">
        <div className="order-1">
          <img src={PigBankLogo} alt="PigBankLogo" className="w-full h-auto" />
        </div>

        <div className="order-3 col-span-2 md:col-span-1 md:order-2 ">
          <MobileMenu />
        </div>
        <div className="order-2">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default HeaderPB;

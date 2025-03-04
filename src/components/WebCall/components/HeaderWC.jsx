import React from "react";
import WebCallLogo from "../img/WebCallLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";

const HeaderWC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center m-auto md:flex-row md:justify-around">
       
      <img
          src={WebCallLogo}
          alt="WebCallLogo"
          className="w-full h-auto p-4 cursor-pointer md:w-60"
        />

        <div className="flex items-center justify-center p-2 m-0">
          <MobileMenu
            textColor="text-white"
            hoverColor="hover:text-gray-300"
            bgColor="bg-transparent"
            invertColor="invert-0"
          />
        </div>
      </div>

      <h1 className="m-auto text-center font-bold font-mono text-amber-100 text-[9vw] max-w-[100rem]">DIGITAL CONFERENCE </h1>
    </div>
  );
};

export default HeaderWC;

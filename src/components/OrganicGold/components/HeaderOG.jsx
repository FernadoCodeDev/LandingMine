import React from "react";
import Background from "../img/Background.webp";
import OrganicGoldLogo from "../img/OrganicGoldLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderOG = () => {
  return (
    <div className=" relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      {/*Design less than md  */}
      <div className="relative grid items-center grid-cols-2 gap-2 md:hidden ">
        <div className="order-3 col-span-2 mx-auto ">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-yellow-500"
            bgColor="bg-backdrop-blur-[2px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <div className="flex flex-row justify-between w-full col-span-2 p-2 my-2 backdrop-blur-[1px] bg-white/20">
          <img
            src={OrganicGoldLogo}
            alt="OrganicGoldLogo"
            className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer"
          />

          <div className="order-2 w-fit ms-auto">
            <DarkMode />
          </div>
        </div>
      </div>
      {/*Design greater than md */}
      <div className="relative items-center hidden grid-cols-3 gap-2 p-2 my-2 backdrop-blur-[1px] bg-white/20 md:grid">
        <div className="order-2 w-auto m-auto">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-yellow-500"
            bgColor=""
            invertColor="invert-0"
          />
        </div>

        <img
          src={OrganicGoldLogo}
          alt="OrganicGoldLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer "
        />

        <div className=" w-fit ms-auto order-3 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>
      </div>
      {/*Content */}
      <div className="p-4 relative order-4 text-center min-h-screen flex items-start md:items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[80rem] p-6 rounded-lg">
          <h1 className="font-bold text-4xl lg:text-9xl text-white">
            Vive lo Natural, Disfruta lo Puro
          </h1>

          <p className=" text-white text-xl lg:text-3xl">
            Productos orgánicos de la más alta calidad, directos de la
            naturaleza a tu hogar. Salud, sabor y bienestar en cada elección.
          </p>

          <button className="flex justify-center w-full md:w-1/2 text-black m-auto p-2 font-bold transition-all duration-700 ease-out rounded-full bg-yellow-300 hover:bg-yellow-500">
            Descubre nuestros productos
            <svg
              className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
              data-slot="icon"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderOG;

import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import Background from "../../assets/img/Background.webp";
import OrganicGoldLogo from "../../assets/img/OrganicGoldLogo.webp";

const HeaderOG = () => {
  return (
    <div className="relative w-full h-dvh ">
      <div
        className="absolute inset-0 w-full h-dvh bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      {/*Design less than md  */}
      <div className="relative grid items-start grid-cols-2 gap-2 md:hidden ">
        <div className="order-3 col-span-2 mx-auto ">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-yellow-500"
            bgColor="backdrop-blur-[3px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <div className="flex flex-row justify-between w-full col-span-2 p-2 my-2 backdrop-blur-[3px] bg-white/20">
          <img
            src={OrganicGoldLogo}
            alt="OrganicGoldLogo"
            className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer"
          />

          <div className="order-2 m-auto w-fit">
            <DarkMode />
          </div>
        </div>

        {/*Content */}
        <div className="relative flex items-center justify-center order-4 col-span-2 p-4 text-center ">
          <div className="flex flex-col items-center justify-center gap-4 max-w-[80rem] p-6 rounded-lg">
            <h1 className="text-4xl font-bold text-white lg:text-9xl">
              Vive lo Natural, Disfruta lo Puro
            </h1>

            <p className="text-xl text-white lg:text-3xl">
              Productos orgánicos de la más alta calidad, directos de la
              naturaleza a tu hogar. Salud, sabor y bienestar en cada elección.
            </p>

            <button className="flex justify-center w-full p-2 m-auto font-bold text-black transition-all duration-700 ease-out bg-yellow-300 rounded-full md:w-1/2 hover:bg-yellow-500">
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

      {/*Design greater than md */}
      <div className="relative items-start hidden w-full h-dvh grid-cols-1 md:grid">
        <div className="grid grid-cols-3 gap-2 p-2 w-full backdrop-blur-[3px] bg-white/20 ">
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

        <div className="order-3 m-auto w-fit">
          <DarkMode />
        </div>
      </div>

        {/*Content */}
        <div className="relative flex items-center justify-center order-4 col-span-3 p-4 text-center ">
          <div className="flex flex-col items-center justify-center gap-4 max-w-[80rem] p-6 rounded-lg">
            <h1 className="text-4xl font-bold text-white lg:text-9xl">
              Vive lo Natural, Disfruta lo Puro
            </h1>

            <p className="text-xl text-white lg:text-3xl">
              Productos orgánicos de la más alta calidad, directos de la
              naturaleza a tu hogar. Salud, sabor y bienestar en cada elección.
            </p>

            <button className="flex justify-center w-full p-2 m-auto font-bold text-black transition-all duration-700 ease-out bg-yellow-300 rounded-full md:w-1/2 hover:bg-yellow-500">
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
    </div>
  );
};

export default HeaderOG;

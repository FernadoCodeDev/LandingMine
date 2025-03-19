import React from "react";
import CooktopiaShopLogo from "../img/CooktopiaShop Logo.webp";
import CooktopiaShopBG from "../img/CooktopiaShopBG.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderCS = () => {
  return (
    <div className="relative w-full min-h-screen bg-stone-200">
      {/* Design less than 768px */}
      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:hidden">
        <div className="order-3 col-span-2 mx-auto">
          <MobileMenu
            textColor="text-stone-600 transition-all duration-700 ease-out"
            hoverColor="hover:text-stone-900"
            bgColor="bg-transparent"
            invertColor="invert"
          />
        </div>
        <img
          src={CooktopiaShopLogo}
          alt="CooktopiaShopLogo"
          className="order-1 object-contain w-40 h-auto cursor-pointer"
        />
        <div className="flex justify-end order-2">
          <DarkMode />
        </div>
        <div className="grid order-4 grid-cols-2 col-span-2 gap-0">
          <div className="">
            <h1 className="text-[2.5rem] font-bold text-center text-stone-900">
            COCINA 
            </h1>
          </div>

          <div className="">
            <p className="text-[0.7rem] pt-[0.7rem] text-start text-stone-900">
              Las herramientas de cocina de calidad mejoran la cocción con
              precisión y facilidad.{" "}
            </p>
          </div>

          <div className="col-span-2">
            <h1 className="text-[3rem] font-bold text-center text-stone-900">
            INTELIGENTE
            </h1>
          </div>
        </div>
      </div>

      {/* design greater than md */}
      <div className="hidden md:grid md:grid-cols-2 md:min-h-screen">
        {/* left side bg-stone-200 */}

        <div className="flex flex-col items-start justify-between p-6 bg-stone-200">
          <div>
            <img
              src={CooktopiaShopLogo}
              alt="CooktopiaShopLogo"
              className="w-40 h-auto cursor-pointer"
            />
            <MobileMenu
              textColor="text-stone-600"
              hoverColor="hover:text-stone-900"
              bgColor="bg-transparent"
              invertColor="invert"
            />
          </div>
          <div className="grid grid-cols-2 gap-0 max-w-[30rem]">
            <div className="">
              <h1 className="text-4xl font-bold text-center lg:text-5xl text-stone-900">
                COCINA
              </h1>
            </div>

            <div className="">
              <p className="text-[0.7rem] lg:pt-[0.5rem] text-start text-stone-900">
                Las herramientas de cocina de calidad mejoran la cocción con
                precisión y facilidad.
              </p>
            </div>

            <div className="col-span-2">
              <h1 className="text-4xl font-bold text-center lg:text-6xl text-stone-900">
                INTELIGENTE
              </h1>
            </div>
          </div>
        </div>

        {/* right side bg-stone-900 with background image */}
        <div className="relative flex flex-col items-end justify-between p-6 text-white">
          <div
            className="absolute inset-0 w-full h-full bg-cover "
            style={{ backgroundImage: `url(${CooktopiaShopBG})` }}
          ></div>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default HeaderCS;

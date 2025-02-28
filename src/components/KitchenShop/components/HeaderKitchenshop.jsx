import React from "react";
import KitchenShopLogo from "../img/Kitchen Shop Logo.webp";
import KitchenShopBG from "../img/KitchenShopBG.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderKS = () => {
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
          src={KitchenShopLogo}
          alt="KitchenShopLogo"
          className="order-1 object-contain w-40 h-auto cursor-pointer"
        />
        <div className="flex justify-end order-2">
          <DarkMode />
        </div>
        <div className="order-4 col-span-2 text-center">
          <h1 className="font-serif font-bold text-stone-900 text-[2rem]">
            Text 1
          </h1>
          <p className="font-serif text-xl text-stone-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* design greater than md */}
      <div className="hidden md:grid md:grid-cols-2 md:min-h-screen">
        {/* left side bg-stone-200 */}

        <div className="flex flex-col items-center justify-between p-6 bg-stone-200">
          <div>
            <img
              src={KitchenShopLogo}
              alt="KitchenShopLogo"
              className="w-40 h-auto cursor-pointer"
            />
            <MobileMenu
              textColor="text-stone-600"
              hoverColor="hover:text-stone-900"
              bgColor="bg-transparent"
              invertColor="invert"
            />
          </div>
          <div>
            <h1 className="font-serif font-bold text-[4rem] relative z-10">
              Text 2
            </h1>
            <p className="relative z-10 font-serif text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* right side bg-stone-900 with background image */}
        <div className="relative flex flex-col justify-between p-6 text-white">
          <div
            className="absolute inset-0 w-full h-full bg-cover "
            style={{ backgroundImage: `url(${KitchenShopBG})` }}
          ></div>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default HeaderKS;

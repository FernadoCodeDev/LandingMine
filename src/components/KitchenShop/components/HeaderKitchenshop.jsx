import React from "react";
import KitchenShopLogo from "../img/Kitchen Shop Logo.webp";
import KitchenShopBG from "../img/KitchenShopBG.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderKS = () => {
  return (
    <div className="relative w-full min-h-screen bg-stone-200">
      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-2 md:w-auto">
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
          className="order-1 object-contain w-40 h-auto cursor-pointer md:order-1"
        />

        <div className="flex justify-end order-2 md:order-3">
          <div
            className="hidden md:block md:absolute md:inset-0 md:w-full md:min-h-screen md:bg-fixed md:bg-center md:bg-cover"
            style={{ backgroundImage: `url(${KitchenShopBG})` }}
          >
          </div>
            <DarkMode />
        </div>

        <div className="order-4 col-span-2 gap-2 text-center">
          <div className="grid grid-cols-2">
            <div className="">
              <h1 className="font-serif font-bold text-stone-900 text-[2rem] md:text-[4rem]">
                Text
              </h1>
            </div>

            <div className="">
              <p className="font-serif text-xl text-statr text-stone-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                fuga nostrum
              </p>
            </div>

            <div className="col-span-2">
              <h1 className="font-serif font-bold text-[2rem] md:text-[4rem] text-stone-900">
                Text
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderKS;

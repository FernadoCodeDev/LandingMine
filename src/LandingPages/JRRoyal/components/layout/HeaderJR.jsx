import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import JRRoyalLogo from "../../assets/img/JRRoyalLogo.webp";

const HeaderJR = () => {
  return (
    <div className="relative flex flex-col w-full h-auto gap-8 pb-6 border-b bg-beige-200 dark:bg-zinc-950 dark:border-beige-100 border-zinc-950 text-beige-100">

      <div className="flex flex-row justify-between gap-8 p-4">

        <img
          src={JRRoyalLogo}
          alt="JRRoyalLogo"
          className="object-contain w-40 h-auto invert dark:invert-0"
        />

        <div className="flex flex-row items-center gap-4">

          <div className="hidden md:block">
            <MobileMenu
              textColor="text-zinc-900 dark:text-beige-200 transition-all duration-700 ease-out"
              hoverColor="hover:text-beige-900 dark:hover:text-zinc-200"
              bgColor=""
              invertColor="invert-0"
            />
          </div>

          <div className="backdrop-blur-[4px] bg-white/20 p-2 rounded-3xl">
            <DarkMode />
          </div>
        </div>

      </div>

      <div className="block m-auto md:hidden">
        <MobileMenu
          textColor="text-zinc-900 dark:text-beige-200 transition-all duration-700 ease-out"
          hoverColor="hover:text-beige-900 dark:hover:text-zinc-200"
          bgColor=""
          invertColor="invert dark:invert-0"
        />
      </div>
    </div>
  );
};

export default HeaderJR;

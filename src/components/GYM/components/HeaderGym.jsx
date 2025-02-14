import React from "react";
import DarkMode from "../../GlobalComponents/DarkMode";
import MobileMenu from "../../GlobalComponents/MobileMenu";

const HeaderGym = () => {
  return (
    <div className="grid items-center grid-cols-2 bg-gray-200 dark:bg-neutral-900 md:grid-cols-3">
      <div className="flex flex-row justify-end order-2 w-auto m-2 md:order-3">
        <DarkMode />
      </div>

      <div className="flex flex-row items-center justify-center order-3 w-full col-span-2 p-2 m-auto md:col-span-1 md:order-2">
        <MobileMenu />
      </div>
    </div>
  );
};

export default HeaderGym;

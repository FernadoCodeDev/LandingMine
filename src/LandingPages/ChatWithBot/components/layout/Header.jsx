import React from "react";
import DarkMode from "../../../GlobalComponents/DarkMode";

const Header = () => {
  return (
    <div className="relative w-full h-auto text-black bg-white dark:bg-neutral-800 dark:text-white ">
      <div className="grid items-center h-auto grid-cols-2 gap-2 p-4 m-auto ">
        <div className="m-auto">
          <p className="">Charla con Bot </p>
        </div>

        <div className="m-auto">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;

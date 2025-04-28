import React from "react";
import ChatWithBotLogo from "../../assets/img/ChatWithBotLogo.webp";
import DarkMode from "../../../GlobalComponents/DarkMode";

const Header = () => {
  return (
    <div className="relative w-full h-auto text-black bg-white dark:bg-neutral-900 dark:text-white ">
      <div className="grid items-center h-auto grid-cols-2 gap-2 p-4 m-auto ">
        <img
          src={ChatWithBotLogo}
          alt="ChatWithBotLogo"
          className="w-full h-auto m-auto md:max-w-40"
        />

        <div className="m-auto">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;

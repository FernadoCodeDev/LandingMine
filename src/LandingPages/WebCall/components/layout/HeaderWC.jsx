import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import WebCallLogo from "../../assets/img/WebCallLogo.webp";
import Background from "../../assets/img/Background.webp";
import EventTime from "../ui/EventTime";

const HeaderWC = () => {
  return (
    <div className="relative w-full min-h-screen p-2 bg-gray-900 text-amber-50">
      <div className="flex flex-col items-center justify-center m-auto md:flex-row md:justify-around">
        <img
          src={WebCallLogo}
          alt="WebCallLogo"
          className="w-full h-auto cursor-pointer md:w-60"
        />

        <div className="flex items-center justify-center p-2 m-0">
          <MobileMenu
            textColor="text-amber-50"
            hoverColor="hover:text-purple-300"
            bgColor="bg-transparent"
            invertColor="invert-0"
          />
        </div>
      </div>

      <h1 className=" m-auto text-center font-fantasy font-bold  text-[9vw] max-w-[100rem]">
        CONFERENCIA DIGITAL{" "}
      </h1>

      <div className=" grid grid-cols-1 gap-2 md:grid-cols-3 m-auto max-w-[100rem]">
        <div className="col-span-2">
          <img src={Background} alt="Background" className="w-full h-auto" />
        </div>
        <EventTime />
      </div>

      <div className="m-auto flex flex-row justify-center w-full border-y-2 my-2 border-amber-50 p-2 max-w-[100rem]">
        <p className="md:text-3xl ">
          VEN A PARTICIPAR EN UNA CONFERENCIA VIRTUAL
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 max-w-[100rem] m-auto">
        <button className="flex justify-center p-2 transition-all duration-700 ease-out bg-purple-400 md:text-3xl font-fantasy hover:bg-purple-500">
          COMPRAR ENTRADAS
        </button>

        <button className="flex justify-center p-2 text-black transition-all duration-700 ease-out md:text-3xl font-fantasy bg-amber-50 hover:bg-amber-200 ">
          Conviértete en patrocinador
        </button>
      </div>
    </div>
  );
};

export default HeaderWC;

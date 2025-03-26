import React from "react";
import JRRoyalLogo from "../img/JRRoyalLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";
import imgN1 from "../img/imgN1.webp";

const HeaderJR = () => {
  return (
    <div className="relative w-full min-h-screen bg-blue-900 text-beige-100">
      <div className="relative grid items-start h-auto grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 items-center md:order-1 md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-white/20">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-beige-200"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <img
          src={JRRoyalLogo}
          alt="JRRoyalLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-white/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative m-auto grid grid-cols-1 items-center text-center max-w-[100rem] order-4 col-span-2 md:col-span-3">
          <div className="grid items-end grid-cols-1 gap-2 p-2 md:grid-cols-2 ">
            <h1 className="font-serif text-2xl font-bold text-center lg:text-5xl ">
              BIENVENIDO A
            </h1>
            <p className="text-sm text-start md:text-base lg:text-2xl">
              Un oasis de comodidad y confort en cada detalle
            </p>
            <h1 className="font-serif text-3xl font-bold text-center md:col-span-2 md:text-4xl lg:text-7xl ">
              JR ROYAL HOTEL
            </h1>
          </div>

          <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 md:items-end md:justify-end ">
              <p className="max-w-[25rem] text-start">
                Disfruta de una experiencia única donde el lujo y la
                hospitalidad se combinan para brindarte una estancia
                inolvidable. Nuestras elegantes habitaciones, servicio de primer
                nivel y ubicación privilegiada hacen de JR Royal Hotel el
                destino perfecto para relajarte y vivir momentos inolvidables.
              </p>

              <button className="w-full p-2 font-serif font-bold transition-all duration-700 ease-out bg-transparent border-2 rounded-xl md:rounded-full md:w-24 md:h-24 text-beige-100 border-beige-100 hover:bg-beige-100 hover:text-blue-900">
                Reservar ahora
              </button>
            </div>

            <div className="hidden md:block">
              <img src={imgN1} alt="imgN1" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderJR;

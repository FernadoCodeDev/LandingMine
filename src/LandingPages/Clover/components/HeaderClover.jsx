import React from "react";
import CloverLogo from "../img/CloverLogo.webp";
import imgN1 from "../img/imgN1.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderClover = () => {
  return (
    <div className="relative grid items-start w-full h-screen min-h-screen grid-cols-2 gap-2 text-white lg:text-2xl md:grid-cols-3 bg-sky-800">
      <div className="mt-4 order-3 col-span-2 mx-auto md:col-span-1 md:order-2 md:w-auto md:h-20 md:bg-white/20 md:bg-backdrop-blur-[2px]">
        <MobileMenu
          textColor="text-white transition-all duration-700 ease-out"
          hoverColor="hover:text-lime-400"
          bgColor="bg-backdrop-blur-[2px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
          invertColor="invert-0"
        />
      </div>

      <img
        src={CloverLogo}
        alt="CloverLogo"
        className="p-4  order-1 max-w-[15rem] h-auto mx-auto cursor-pointer md:order-1"
      />

      <div className="order-2 p-4 w-fit ms-auto md:order-3">
        <DarkMode />
      </div>

      <div className="h-auto ms-auto grid grid-cols-1 gap-4 md:grid-cols-2 max-w-[100rem] relative order-4 col-span-2 md:col-span-3">
        <div className="flex flex-col items-center gap-3 p-4">
          <h1 className="text-4xl font-bold lg:text-7xl">
            Energía Solar para un Futuro
            <span className="text-5xl font-bold text-lime-400 lg:text-8xl">
              {" "}
              Sostenible
            </span>
          </h1>

          <p className="">
            Descubre cómo reducir tu factura de luz y contribuir al medio
            ambiente con nuestros paneles solares de alta eficiencia. Transforma
            tu hogar o negocio con energía limpia y renovable.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex justify-center w-full p-2 font-bold text-white transition-all duration-700 ease-out bg-lime-500 hover:bg-lime-600">
              Comprar Ahora
            </button>

            <button className="flex justify-center w-full p-2 font-bold text-white transition-all duration-700 ease-out bg-lime-500 hover:bg-lime-600">
              Explorar Más
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="grid grid-cols-1 gap-2">
              <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                250+
              </h1>
              <p>Hogares Energizados</p>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                100%
              </h1>
              <p>Energía Renovable</p>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                10 Años+
              </h1>
              <p>Garantía en Paneles</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block ">
          <img
            src={imgN1}
            alt="imgN1"
            className="ms-auto max-w-[30rem] h-auto rounded-tl-full"
            style={{ maskImage: "linear-gradient(black 90%, transparent)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderClover;

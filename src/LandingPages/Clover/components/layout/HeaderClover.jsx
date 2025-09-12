import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import CloverLogo from "../../assets/img/CloverLogo.webp";
import imgN1 from "../../assets/img/imgN1.webp";

const HeaderClover = () => {
  return (
    <div className="relative w-full ">
      {/* Design less than 768px */}
      <div
        className="relative inset-0 flex flex-col w-full p-4 bg-center bg-cover h-dvh md:hidden"
        style={{ backgroundImage: `url(${imgN1})` }}
      >
        <div className="relative z-10 flex flex-col justify-between pb-8 h-dvh">

          <div className="flex flex-row justify-between gap-2 ">
            <img
              src={CloverLogo}
              alt="CloverLogo"
              className="object-contain w-32 h-auto cursor-pointer invert-0"
            />
            <div className="">
              <DarkMode />
            </div>
          </div>

          <div className="flex flex-col mx-auto">
            <MobileMenu
              textColor="text-beige-100 transition-all duration-900 ease-out"
              hoverColor="hover:text-white"
              bgColor="hover:bg-beige-100/10 transition-all duration-900 ease-out hover:backdrop-blur-[4px] rounded-lg"
              invertColor="invert-0"
            />
          </div>

          <div className="flex flex-col gap-2 text-slate-100">

            <h1 className="text-2xl font-bold md:text-4xl xl:text-7xl">
              Energía Solar para un Futuro
              <span className="text-3xl font-bold text-lime-400 md:text-5xl xl:8xl">
                {" "}
                Sostenible
              </span>
            </h1>

            <p className="hidden text-base md:flex md:text-lg">
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

            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                  250+
                </h1>
                <p>Hogares Energizados</p>
              </div>

              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                  100%
                </h1>
                <p>Energía Renovable</p>
              </div>

              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                  10 Años+
                </h1>
                <p>Garantía en Paneles</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* design greater than md */}
      <div className="hidden md:grid md:grid-cols-2 md:h-dvh">
        {/* left side bg-beige-200 */}

        <div className="flex flex-col items-start justify-between p-6 bg-sky-800">
          <div>
            <img
              src={CloverLogo}
              alt="CloverLogo"
              className="w-40 h-auto cursor-pointer invert-0"
            />

            <MobileMenu
              textColor="text-white transition-all duration-900 ease-out"
              hoverColor="hover:text-lime-500"
              bgColor=""
              invertColor="invert-0"
            />

          </div>
          <div className="flex flex-col gap-2 max-w-[25rem] text-slate-100">

            <h1 className="text-2xl font-bold md:text-4xl xl:text-7xl">
              Energía Solar para un Futuro
              <span className="text-3xl font-bold text-lime-400 md:text-5xl xl:8xl">
                {" "}
                Sostenible
              </span>
            </h1>

            <p className="hidden text-base md:flex md:text-lg">
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

            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                  250+
                </h1>
                <p>Hogares Energizados</p>
              </div>

              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                  100%
                </h1>
                <p>Energía Renovable</p>
              </div>

              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold text-lime-400 lg:text-4xl">
                  10 Años+
                </h1>
                <p>Garantía en Paneles</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side bg-beige-900 with background image */}
        <div className="relative flex flex-col items-end justify-between p-6 text-white">
          <div
            className="absolute inset-0 w-full h-full bg-cover "
            style={{ backgroundImage: `url(${imgN1})` }}
          ></div>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default HeaderClover;

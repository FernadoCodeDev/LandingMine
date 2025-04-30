import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import Background from "../../assets/img/Background.webp";
import Morganalogo from "../../assets/img/Morganalogo.webp";
import imgN1 from "../../assets/img/imgN1.webp";
import SearchSVG from "../../assets/svg/SearchSVG";

const HeaderM = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative grid items-start h-auto grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-1 md:w-auto md:h-20 md:backdrop-blur-[2px] md:bg-white/20">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-beige-400"
            bgColor="bg-backdrop-blur-[2px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <img
          src={Morganalogo}
          alt="Morganalogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[2px] bg-white/20  p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative order-4 col-span-2 md:col-span-3 ">
          <div className="m-auto mb-4 grid grid-cols-1 md:grid-cols-2 max-w-[100rem] gap-2">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-3xl font-bold text-center text-white md:text-6xl">
                Maneja con confianza, maneja con Morgana.
              </h1>
              <button className="flex justify-center w-full p-2 transition-all duration-700 ease-out rounded-full md:w-1/4 bg-beige-200 hover:bg-beige-400 ">
                Ver Ahora
              </button>
            </div>

            <div className="hidden md:flex ms-auto  flex-col gap-2 bg-white rounded-3xl w-auto p-4 max-w-[25rem]">
              <div className="flex flex-row justify-between ">
                <h1 className="font-bold text-beige-900">$1600/day</h1>

                <div className="flex flex-col items-center justify-center w-8 h-8 p-2 rounded-full bg-slate-800">
                  <svg
                    class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="#fff"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>

              <img src={imgN1} alt="imgN1" className="w-full h-auto m-auto" />
            </div>
          </div>

          <div className="m-auto max-w-[100rem] grid grid-cols-1 mb-2">
            <div className="grid grid-cols-1 md:col-start-3 justify-self-end">
              <div className="flex flex-col  max-w-[30rem]">
                <p className="text-center text-amber-50">
                  Ya sea que busques comprar el auto de tus sueños o rentar uno
                  para una ocasión especial, en Morgana encontrarás variedad,
                  precios competitivos y un servicio excepcional. Nos apasiona
                  ayudarte a encontrar el vehículo perfecto para cada etapa de
                  tu vida.
                </p>
                <p className="font-bold text-center text-amber-50">
                  Maneja con confianza, maneja con Morgana.
                </p>
              </div>
            </div>
          </div>

          <div className="m-auto max-w-[70rem] grid grid-cols-1 md:grid-cols-2 mb-2">
            <div className="grid grid-cols-2 gap-2">
              <button className="flex justify-center w-full p-2 transition-all duration-700 ease-out rounded-xl bg-beige-200 hover:bg-beige-500 ">
                Comprar
              </button>
              <button className="flex justify-center w-full p-2 text-white transition-all duration-700 ease-out rounded-xl bg-neutral-900 hover:bg-black ">
                Alquilar
              </button>
            </div>
          </div>

          <div className="m-auto w-full p-4 bg-white max-w-[70rem]">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-5">
              <div className="flex flex-col">
                <h1 className="font-bold text-start ">
                  Dirección de recogida
                </h1>
                <input
                  className="p-1 "
                  type="text"
                  disabled
                  placeholder="Desde: dirección, aeropuerto, hotel,"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold ">
                  Tarifa de entrega
                </h1>
                <input
                  className="p-1 "
                  type="text"
                  disabled
                  placeholder="Distancia, Tarifa por hora, Tarifa fija"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold ">Fecha de recogida</h1>
                <input
                  className="p-1 "
                  type="text"
                  disabled
                  placeholder="19 ABR 2025"
                />
              </div>

              <div className="flex flex-col ">
                <h1 className="font-bold ">Hora de recogida</h1>
                <input
                  className="p-1 "
                  type="text"
                  disabled
                  placeholder="12:25 am"
                />
              </div>

              <button className="flex justify-center w-full h-auto p-2 transition-all duration-700 ease-out bg-beige-200 lg:w-20 hover:bg-beige-400 lg:ms-auto">
                <SearchSVG width="40" height="40" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderM;

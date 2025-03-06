import React from "react";
import Background from "../img/Background.webp";
import Morganalogo from "../img/Morganalogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";
import imgN1 from "../img/imgN1.webp";
import SearchSVG from "./SVGComponents/SearchSVG";

const HeaderM = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
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
            <div className=" flex flex-col gap-2">
              <h1 className="text-white font-bold text-3xl">Text Text Text</h1>
              <button className="rounded-full flex justify-center w-full md:w-1/4  p-2 transition-all duration-700 ease-out bg-beige-200 hover:bg-beige-400 ">
                Ver Ahora
              </button>
            </div>

            <div className="hidden md:flex ms-auto  flex-col gap-2 bg-white rounded-3xl w-auto p-4 max-w-[30rem]">
              <div className="flex flex-row justify-between ">
                <h1 className="font-bold text-beige-900">$1600/day</h1>

                <div className="flex flex-col items-center justify-center bg-slate-800 w-8 h-8 p-2 rounded-full">
                  <p>2</p>
                </div>
              </div>

              <img src={imgN1} alt="imgN1" className="m-auto w-full h-auto" />
            </div>
          </div>

          <div className="m-auto max-w-[100rem] grid grid-cols-1 mb-2">
            <div className="grid grid-cols-1 md:col-start-3 justify-self-end">
              <div className="flex flex-col  max-w-[30rem]">
                <p className=" text-amber-50 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum reprehenderit non asperiores rem facilis dolorem fuga
                  veritatis illum enim saepe libero, deserunt eaque quos tenetur
                  molestiae nobis eveniet nisi ipsa?
                </p>
              </div>
            </div>
          </div>

          <div className="m-auto max-w-[70rem] grid grid-cols-1 md:grid-cols-2 mb-2">
            <div className="grid grid-cols-2 gap-2">
              <button className="rounded-xl flex justify-center w-full p-2 transition-all duration-700 ease-out bg-beige-200 hover:bg-beige-400 ">
                Comprar
              </button>
              <button className="text-white rounded-xl flex justify-center w-full  p-2 transition-all duration-700 ease-out bg-neutral-900 hover:bg-black ">
                Alquilar
              </button>
            </div>
          </div>

          <div className="m-auto w-full p-4 bg-white max-w-[70rem]">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
              <div className="flex flex-col md:items-center">
                <h1 className="font-bold text-start md:text-center">
                  Pick Up Address
                </h1>
                <input
                  className="p-1 md:items-center md:text-center"
                  type="text"
                  disabled
                  placeholder="From: address, airport, hotel,.."
                />
              </div>

              <div className="flex flex-col md:items-center">
                <h1 className="font-bold md:text-center">Drop off address</h1>
                <input
                  className="p-1 md:items-center md:text-center"
                  type="text"
                  disabled
                  placeholder="Distance, Hourly, Flat, Rate"
                />
              </div>

              <div className="flex flex-col md:items-center">
                <h1 className="font-bold md:text-center">Pick Up date</h1>
                <input
                  className="p-1 md:items-center md:text-center"
                  type="text"
                  disabled
                  placeholder="APR 19, 2025"
                />
              </div>

              <div className="flex flex-col md:items-center">
                <h1 className="font-bold md:text-center">Pick Up Time</h1>
                <input
                  className="p-1 md:items-center md:text-center"
                  type="text"
                  disabled
                  placeholder="12:25 am"
                />
              </div>

              <button className="flex justify-center w-full h-auto p-2 transition-all duration-700 ease-out bg-beige-200 md:w-20 hover:bg-beige-400 md:ms-auto">
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

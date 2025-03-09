import React from "react";
import Background from "../img/Background.webp";
import GoldTeethLogo from "../img/GoldTeethLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";
import imgN1 from "../img/imgN1.webp";
import imgN2 from "../img/imgN2.webp";
import imgN3 from "../img/imgN3.webp";

const HeaderDH = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      {/*Design less than md  */}
      <div className="relative grid items-center grid-cols-2 gap-2 md:hidden ">
        <div className="order-3 col-span-2 mx-auto ">
          <MobileMenu
            textColor="text-gray-200 transition-all duration-700 ease-out"
            hoverColor="hover:text-white"
            bgColor="bg-backdrop-blur-[2px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <div className="flex flex-row justify-between w-full col-span-2 p-2 my-2 bg-beige-100">
          <img
            src={GoldTeethLogo}
            alt="GoldTeethLogo"
            className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer"
          />

          <div className=" w-fit ms-auto order-2 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
            <DarkMode />
          </div>
        </div>

        <div className="relative order-4 col-span-2 text-center md:col-span-3"></div>
      </div>

      {/*Design greater than md */}
      <div className="relative items-center hidden grid-cols-3 gap-2 p-2 my-2 bg-beige-100 md:grid">
        <div className="order-2 w-auto m-auto">
          <MobileMenu
            textColor="text-beige-800 transition-all duration-700 ease-out"
            hoverColor="hover:text-rose-800"
            bgColor=""
            invertColor="invert-0"
          />
        </div>

        <img
          src={GoldTeethLogo}
          alt="GoldTeethLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer "
        />

        <div className=" w-fit ms-auto order-3 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>
      </div>

      {/*Content */}
      <div className="relative order-4 col-span-2 text-center md:col-span-3 grid grid-cols-1 gap-4 md:grid-cols-2 p-2 m-auto max-w-[100rem]">
        <div className="grid items-center justify-center order-1 grid-cols-1 gap-3 md:order-2 md:items-start">
          <div className="m-auto">
            <h1 className="text-5xl font-bold text-beige-100 text-start lg:text-8xl">
              Sonríe
            </h1>
            <h1 className="text-5xl font-bold text-beige-100 text-start lg:text-8xl">
              mejor
            </h1>
            <h1 className="text-5xl font-bold text-beige-100 text-start lg:text-8xl">
              con nosotros
            </h1>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-beige-100 text-start md:text-2xl">
              Nos dedicamos a brindarle a usted y a su familia atención dental
              de máxima calidad en un entorno cómodo y acogedor.
            </p>

            <div className="grid items-center grid-cols-1 gap-2 text-white md:grid-cols-2">
              <button className="flex justify-center w-full h-auto p-2 font-bold transition-all duration-700 ease-out rounded-full bg-rose-400 hover:bg-rose-600 ">
                Consultar Sonrisa
              </button>
              <div>
                <p className="font-bold">⭐⭐⭐⭐⭐(4.2)</p>
                <p className="">30K+Calificaciones en Google</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center justify-center order-2 grid-cols-2 gap-4 md:order-1">
          <div className="flex flex-col gap-4">
            <img
              src={imgN1}
              alt="imgN1"
              className="w-full h-auto rounded-t-full"
            />
            <img
              src={imgN2}
              alt="imgN3"
              className="w-full h-auto rounded-b-full"
            />
          </div>
          <div className="flex gap-3">
            <img
              src={imgN3}
              alt="imgN3"
              className="w-full h-auto rounded-t-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDH;

import React from "react";
import Background from "../img/Background.webp";
import ZoologicalWorldLogo from "../img/ZoologicalWorldLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";

const HeaderZW = () => {
  return (
    <div className="relative w-full min-h-screen text-black bg-white md:text-2xl dark:bg-neutral-900 dark:text-white">
      <div className="relative grid items-start h-auto grid-cols-2 gap-2 p-4 overflow-visible rounded-b-3xl bg-beige-50 dark:bg-neutral-800 md:grid-cols-3">
        <div className="order-3 col-span-2 flex flex-row items-center mx-auto md:col-span-1 md:order-2 md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-black/20 dark:md:bg-white/20">
          <MobileMenu
            textColor="text-black dark:text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-orange-500 dark:hover:text-orange-500"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl  bg-black/20 dark:bg-white/20 md:bg-transparent dark:md:bg-transparent"
            invertColor="invert dark:invert-0"
          />
        </div>

        <img
          src={ZoologicalWorldLogo}
          alt="ZoologicalWorldLogo"
          className="order-1 object-contain w-full md:max-w-[20rem] h-auto mx-auto cursor-pointer md:order-1 rounded-3xl p-2 backdrop-blur-[4px] bg-black/20"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        {/*Content < md */}
        <div className="relative order-4 col-span-2 text-center md:hidden md:col-span-3">
          <div className="m-auto grid grid-cols-1 gap-4 max-w-[80rem]  p-2">
            <div className="">
              <h1 className="text-2xl font-bold md:text-6xl">
                ¡Bienvenido a Zoological World!
              </h1>
            </div>

            <div className="text-white flex flex-col items-center gap-4 justify-center p-4 backdrop-blur-[2px] bg-orange-500/70 rounded-3xl">
              <p className="text-2xl">
                Descubre un mundo donde la naturaleza y la vida salvaje cobran
                vida. En Zoological World, preservamos y protegemos diversas
                especies, brindando una experiencia inolvidable para amantes de
                los animales y la aventura.
              </p>

              <div className="w-full mt-8 border-t-4 border-white opacity-50"></div>

              <h1 className="text-4xl font-bold">Nuestra Fauna en Números</h1>

              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center p-2 border-r-2 border-white">
                  <h1 className="font-bold">157+</h1>
                  <p className="">especies</p>
                </div>

                <div className="flex flex-col items-center p-2 border-r-2 border-white">
                  <h1 className="font-bold">500+</h1>
                  <p className="">animales</p>
                </div>

                <div className="flex flex-col items-center p-2 ">
                  <h1 className="font-bold">50+</h1>
                  <p className="">de conservación y educación</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Background}
                alt="Background"
                className="w-full h-auto rounded-xl"
              />

              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 p-4 m-auto text-center text-white">
                <h1 className="text-2xl font-bold">
                  Sumérgete en la aventura de Zoological World
                </h1>

                <p className="text-start">
                  Conoce animales de todo el planeta y siente la emoción de la
                  vida salvaje más cerca que nunca
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Content > md */}

        <div className="relative order-4 hidden col-span-2 text-center md:block md:col-span-3">
          <div className="m-auto grid grid-cols-2 gap-4 max-w-[80rem] p-2">
            <div className="">
              <h1 className="text-2xl font-bold md:text-6xl">
                ¡Bienvenido a Zoological World!
              </h1>
            </div>

            <div className="z-50 text-white flex flex-col items-center gap-4 justify-center p-4 backdrop-blur-[1px] bg-orange-500/70 rounded-3xl">
              <p className="text-2xl">
                Descubre un mundo donde la naturaleza y la vida salvaje cobran
                vida. En Zoological World, preservamos y protegemos diversas
                especies, brindando una experiencia inolvidable para amantes de
                los animales y la aventura.
              </p>

              <div className="w-full mt-8 border-t-4 border-white"></div>

              <h1 className="text-4xl font-bold">Nuestra Fauna en Números</h1>

              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center p-2 border-r-2 border-white">
                  <h1 className="font-bold">157+</h1>
                  <p className="">especies </p>
                </div>

                <div className="flex flex-col items-center p-2 border-r-2 border-white">
                  <h1 className="font-bold">500+</h1>
                  <p className="">animales </p>
                </div>

                <div className="flex flex-col items-center p-2 ">
                  <h1 className="font-bold">50+ años</h1>
                  <p className="">de conservación y educación</p>
                </div>
              </div>
            </div>

            <div className="relative col-span-2 lg:top-32">
              <img
                src={Background}
                alt="Background"
                className="absolute left-0 z-10 w-full h-auto transform -translate-y-1/2 rounded-xl top-1/2"
              />

              <div className="absolute top-0 left-0 w-[50%] flex flex-col items-center justify-center rounded-tr-xl text-center gap-4 backdrop-blur-[1px] bg-black/20 p-4 text-white z-50">
                <h1 className="text-2xl font-bold lg:text-4xl">
                  Sumérgete en la aventura de Zoological World
                </h1>
                <p className="text-sm lg:text-2xl text-start">
                  Conoce animales de todo el planeta y siente la emoción de la
                  vida salvaje más cerca que nunca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderZW;

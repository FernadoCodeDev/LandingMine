import React from "react";
import CastorBookLogo from "../img/CastorBookLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";
import imgN1 from "../img/imgN1.webp";

const HeaderCB = () => {
  return (
    <div className="relative w-full min-h-screen bg-beige-100">
      {/* Design less than 768px */}
      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:hidden">
        <div className="order-3 col-span-2 mx-auto">
          <MobileMenu
            textColor="text-beige-800 transition-all duration-700 ease-out"
            hoverColor="hover:text-blue-500"
            bgColor="bg-transparent"
            invertColor="invert"
          />
        </div>
        <img
          src={CastorBookLogo}
          alt="CastorBookLogo"
          className="order-1 object-contain w-40 h-auto cursor-pointer"
        />
        <div className="flex justify-end order-2">
          <DarkMode />
        </div>
        <div className="order-4 col-span-2 ">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="grid items-center grid-cols-2 font-bold text-center">
              <h1 className="col-span-2 text-3xl"> Encuentra tu</h1>
              <div className="flex flex-row items-center col-span-2">
                <h1 className="text-3xl">próxima</h1>
                <img src={imgN1} alt="imgN1" className="w-20 h-auto" />
              </div>

              <h1 className="col-span-2 text-3xl">gran lectura</h1>
            </div>

            <p className="text-center">
              Descubre un mundo de historias, conocimientos y aventuras con
              nuestra amplia selección de libros. Desde los clásicos hasta las
              últimas novedades, en Castor Book tenemos justo lo que necesitas.
            </p>

            <div className="flex flex-col w-full gap-2">
              <button className="w-full p-2 font-bold text-black transition-all duration-700 ease-out bg-transparent border-2 border-beige-500 rounded-2xl hover:bg-beige-500">
                Explorar ahora
              </button>

              <button className="flex items-center justify-center w-full p-2 font-bold text-black transition-all duration-700 ease-out bg-neutral-900 rounded-2xl hover:bg-black">
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* design greater than md */}
      <div className="hidden md:grid md:grid-cols-2 md:min-h-screen">
        {/* left side bg-stone-200 */}
        <div className="flex flex-col items-center justify-start p-6 bg-beige-100">
          <div className="flex flex-col items-center justify-center">
            <img
              src={CastorBookLogo}
              alt="CastorBookLogo"
              className="object-contain w-40 h-auto cursor-pointer"
            />
            <MobileMenu
              textColor="text-beige-800 transition-all duration-700 ease-out"
              hoverColor="hover:text-blue-500"
              bgColor="bg-transparent"
              invertColor="invert"
            />
          </div>
          <div className="max-w-[30rem] 2xl:max-w-[40rem] flex flex-col items-center justify-center gap-4">
            <div className="grid items-center grid-cols-2 font-bold text-center">
              <h1 className="col-span-2 text-5xl">Encuentra tu</h1>
              <h1 className="col-span-2 text-5xl">próxima</h1>
              <h1 className="col-span-2 text-5xl">gran lectura</h1>
            </div>

            <p className="text-2xl text-center">
              Descubre un mundo de historias, conocimientos y aventuras con
              nuestra amplia selección de libros. Desde los clásicos hasta las
              últimas novedades, en{" "}
              <span className="font-bold text-beige-800">Castor Book</span>{" "}
              tenemos justo lo que necesitas.
            </p>

            <div className="flex flex-row w-full gap-2">
              <button className="w-full p-2 font-bold text-black transition-all duration-700 ease-out bg-transparent border-2 border-beige-500 rounded-2xl hover:bg-beige-500">
                Explorar ahora
              </button>

              <button className="flex items-center justify-center w-full p-2 font-bold text-black transition-all duration-700 ease-out bg-neutral-900 rounded-2xl hover:bg-black">
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
              </button>
            </div>
          </div>
        </div>

        {/* right side bg-orange-400 */}
        <div className="relative flex flex-col items-end justify-between p-6 text-white">
          <div className="absolute inset-0 w-full h-full bg-orange-300 bg-cover"></div>
          <DarkMode />

          <img
            src={imgN1}
            alt="imgN1"
            className="z-10 max-w-[20rem] h-auto md:max-w-[28rem] lg:min-w-[34rem] xl:min-w-[45rem] 2xl:min-w-[65rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderCB;

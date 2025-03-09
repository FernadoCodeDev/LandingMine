import React from "react";
import imgN5 from "../img/imgN5.webp";
import imgN6 from "../img/imgN6.webp";
import imgN7 from "../img/imgN7.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 text-black bg-beige-100 dark:text-white">
      <div className="grid grid-cols-1 gap-4 md:gap-8 max-w-[80rem] m-auto">
        <h1 className="text-5xl font-bold text-center lg:text-8xl text-rose-800 dark:text-beige-100">
          Text text
        </h1>
        <p className="m-auto max-w-[50rem] text-center text-black dark:text-white ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sequi repellendus? Amet libero deleniti inventore. Delectus, deleniti. Eius cupiditate quos in repudiandae nisi ad cumque enim consectetur? Sed, dolores natus.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 max-w-[80rem] m-auto">
        <div className="grid items-center justify-center grid-cols-1 gap-2 bg-beige-50 rounded-2xl">
          <img
            src={imgN5}
            alt="imgN5"
            className="w-full h-auto rounded-t-2xl"
          />

          <div className="p-4">
            <h1 className="text-2xl font-bold text-start ">⭐(4.5)</h1>

            <h1 className="text-3xl font-bold text-center text-rose-800">
              NAME LAST NAME
            </h1>

            <p className="text-center">Lorem ipsum dolor sit amet</p>
            <p className="font-bold transition-all duration-700 ease-out cursor-pointer hover:w-auto text-beige-800 hover:text-rose-800 ">
              Ver Perfil
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-2 bg-beige-50 rounded-2xl">
          <img
            src={imgN6}
            alt="imgN6"
            className="w-full h-auto rounded-t-2xl"
          />

          <div className="p-4">
            <h1 className="text-2xl font-bold text-start ">⭐(4.5)</h1>

            <h1 className="text-3xl font-bold text-center text-rose-800">
              NAME LAST NAME
            </h1>

            <p className="text-center">Lorem ipsum dolor sit amet</p>
            <p className="font-bold transition-all duration-700 ease-out cursor-pointer hover:w-auto text-beige-800 hover:text-rose-800 ">
              Ver Perfil
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-2 bg-beige-50 rounded-2xl">
          <img
            src={imgN7}
            alt="imgN7"
            className="w-full h-auto rounded-t-2xl"
          />

          <div className="p-4">
            <h1 className="text-2xl font-bold text-start ">⭐(4.5)</h1>

            <h1 className="text-3xl font-bold text-center text-rose-800">
              NAME LAST NAME
            </h1>

            <p className="text-center">Lorem ipsum dolor sit amet</p>
            <p className="font-bold transition-all duration-700 ease-out cursor-pointer hover:w-auto text-beige-800 hover:text-rose-800 ">
              Ver Perfil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

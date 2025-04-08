import React from "react";
import imgN5 from "../img/imgN5.webp"; //Vertical
import imgN6 from "../img/imgN6.webp";
import imgN7 from "../img/imgN7.webp";
import imgN8 from "../img/imgN8.webp"; //Vertical
import imgN9 from "../img/imgN9.webp";
import imgN10 from "../img/imgN10.webp";
import imgN11 from "../img/imgN11.webp"; //Vertical

const FourthSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto gap-4 p-4 text-black bg-white dark:text-white dark:bg-neutral-800">
      <h1 className="text-4xl font-bold text-center">Encuentra tú nuevo Hogar</h1>
      <p className="text-2xl text-center">
        ¿Se admiten mascotas en el apartamento?, ¿Cómo son las escuelas?, ¿Zonas
        Verdes?
      </p>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-rows-1 max-w-[90rem]">
        {/* Vertical image, occupies two spaces*/}
        <div className="relative row-span-2 md:row-span-2">
          <img src={imgN5} alt="imgN5" className="object-cover w-full h-full " />

          <div className="absolute inset-0 flex flex-col items-start justify-end text-center max-w-[30rem] p-4 m-auto text-white z-10">
            <h1 className="text-2xl font-bold">Rosedale</h1>
            <p className="" >
              Austin, TX
            </p>
          </div>
        </div>

        {/*horizontal images*/}
        <div className="flex flex-col gap-2 mt-2">
          <div className="relative">
            <img
              src={imgN6}
              alt="imgN6"
              className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end text-center max-w-[30rem] p-4 m-auto text-white z-10">
            <h1 className="text-2xl font-bold">Highlands</h1>
            <p className="" >
              Lowell, MA
            </p>
          </div>
          </div>
          <div className="relative">
            <img
              src={imgN7}
              alt="imgN7"
              className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end text-center max-w-[30rem] p-4 m-auto text-white z-10">
            <h1 className="text-2xl font-bold">Downtown</h1>
            <p className="" >
              Atlanta, GA
            </p>
          </div>
          </div>
        </div>

        {/* Vertical image, occupies two spaces*/}
        <div className="relative row-span-2 md:row-span-2">
          <img src={imgN8} alt="imgN8" className="object-cover w-full h-full " />
          <div className="absolute inset-0 flex flex-col items-start justify-end text-center max-w-[30rem] p-4 m-auto text-white z-10">
            <h1 className="text-2xl font-bold">Willow Green</h1>
            <p className="" >
              San Jose, CA
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="relative">
            <img
              src={imgN9}
              alt="imgN9"
              className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end text-center max-w-[30rem] p-4 m-auto text-white z-10">
            <h1 className="text-2xl font-bold">North Aurora</h1>
            <p className="" >
              Aurora, CO
            </p>
          </div>
          </div>
          <div className="relative">
            <img
              src={imgN10}
              alt="imgN10"
              className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end text-center max-w-[30rem] p-4 m-auto text-white z-10">
            <h1 className="text-2xl font-bold">North Quincy</h1>
            <p className="" >
              Quincy, MA
            </p>
          </div>
            
          </div>
        </div>

        {/* Vertical image, occupies two spaces*/}
        <div className="relative row-span-2 md:row-span-2">
          <img
            src={imgN11}
            alt="imgN11"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;

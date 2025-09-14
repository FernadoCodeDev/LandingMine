import React from "react";
import imgN5 from "../../assets/img/imgN5.webp"
import imgN6 from "../../assets/img/imgN6.webp"

const ThirdSection = () => {
  return (

    <div className="relative flex flex-col items-center w-full h-auto">
      <div className="m-auto max-w-[80rem] flex flex-col gap-4 md:flex-row w-full">
        <div
          className="relative w-full bg-center bg-cover border-4 border-white h-60 md:h-80"
          style={{ backgroundImage: `url(${imgN5})` }}
        >
          <div className="backdrop-blur-[1px] bg-black/40 absolute bottom-0 left-0 z-10 flex flex-col items-start justify-end w-full h-full gap-2 p-4 m-auto text-white text-start">
            <h1 className="text-xl font-bold text-orange-600 md:text-2xl">
              Pistas de última generación
            </h1>
            <p className="text-base md:text-lg md:max-w-96">
              Nuestra tecnología de boliche garantiza tiros
              precisos y una experiencia fluida, perfecta para
              principiantes y expertos.
            </p>
          </div>
        </div>

        <div
          className="relative w-full bg-center bg-cover border-4 border-white h-60 md:h-80"
          style={{ backgroundImage: `url(${imgN6})` }}
        >
          <div className="backdrop-blur-[1px] bg-black/40 absolute bottom-0 left-0 z-10 flex flex-col items-start justify-end w-full h-full gap-2 p-4 m-auto text-white text-start">
            <h1 className="text-xl font-bold text-orange-600 md:text-2xl">
              Más que boliche, una experiencia completa
            </h1>
            <p className="text-base md:text-lg md:max-w-96">
              Disfruta de deliciosas pizzas, papas con queso y carne,
              y bebidas refrescantes mientras juegas. ¡Porque la diversión
              sabe mejor con buen sabor!
            </p>
          </div>
        </div>

      </div>
    </div>

  );
};

export default ThirdSection;

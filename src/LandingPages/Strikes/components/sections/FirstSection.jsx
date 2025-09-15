import React from "react";
import imgN1 from "../../assets/img/imgN1.webp"

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto px-4">
      <div className="m-auto max-w-[80rem] flex flex-col w-full">
        <div
          className="relative w-full bg-center bg-cover border-4 border-white h-80"
          style={{ backgroundImage: `url(${imgN1})` }}
        >
          <div className="absolute bottom-0 left-0 z-10 flex flex-col items-start justify-end w-full h-full gap-2 p-4 m-auto text-white bg-black/40 text-start">
            <h1 className="text-xl font-bold text-orange-600 md:text-2xl">
              Cada Strike es un momento para recordar
            </h1>
            <p className="text-base md:text-lg md:max-w-96">
              En <span className="font-bold text-orange-600">Strikes</span>, 
              la diversión nunca se detiene. Vive la emoción de cada lanzamiento, 
              compite con amigos y crea recuerdos inolvidables. ¡Ven a disfrutar 
              el mejor ambiente de boliche con música, comida y grandes momentos!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FirstSection;

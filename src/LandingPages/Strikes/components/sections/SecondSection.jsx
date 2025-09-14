import React from "react";
import BowlingBallSlider from "../ui/Slider";
import Masonry from "react-masonry-css";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";
import imgN4 from "../../assets/img/imgN4.webp";

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto text-black">
      <div className="w-full h-auto m-auto ">
        <BowlingBallSlider />
      </div>

      <div className="flex flex-col text-center gap-4 m-auto md:flex-row max-w-[80rem] w-full">
        <div className="bg-white">
          <img
            src={imgN2}
            alt="imgN2"
            className="w-full h-auto"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-orange-600">
              +10,000 clientes felices
            </h2>
            <p className="text-base md:text-lg">
              Desde familias hasta jugadores profesionales, cada visitante vive la emoción de un juego inolvidable
            </p>

          </div>
        </div>

        <div className="bg-white">
          <img
            src={imgN3}
            alt="imgN3"
            className="w-full h-auto"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-orange-600">
              Torneos y eventos exclusivos
            </h2>
            <p className="text-base md:text-lg">
              Organizamos competencias, eventos temáticos y noches especiales para que la diversión nunca falte.            </p>

          </div>
        </div>

        <div className="bg-white">
          <img
            src={imgN4}
            alt="imgN4"
            className="w-full h-auto"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-orange-600">
              Ambiente único y moderno
            </h2>
            <p className="text-base md:text-lg">
              Luces, música y la mejor tecnología en bolos para que cada partida sea una experiencia increíble.            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

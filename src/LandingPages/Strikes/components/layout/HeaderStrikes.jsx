import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import StrikesLogo from "../../assets/img/Strike'sLogo.webp";
import imgN1 from "../../assets/img/imgN1.webp";

const HeaderStrikes = () => {
  return (
    <div className="relative w-full min-h-screen text-black bg-white lg:text-2xl">
      <div className="relative grid items-start h-auto grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="items-center order-3 col-span-2 mx-auto md:col-span-1 md:order-1 md:w-auto ">
          <MobileMenu
            textColor="text-black transition-all duration-700 ease-out"
            hoverColor="hover:text-orange-500"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert"
          />
        </div>

        <img
          src={StrikesLogo}
          alt="StrikesLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[1px] bg-black/20 p-2 rounded-3xl">
          <DarkMode />
        </div>
        <div className=" relative m-auto grid grid-cols-1 gap-4 items-center text-center max-w-[100rem] order-4 col-span-2 md:col-span-3">
          <div className="flex flex-col items-center ">
            <h1 className="max-w-[45rem] text-3xl font-bold text-center text-orange-500 lg:text-6xl ">
              Cada <span className="text-4xl lg:text-7xl">Strike</span> es un momento para
              recordar
            </h1>
          </div>

          <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 ">
              <p className="text-center">
                En <span className="font-bold text-orange-500">Strike’s</span>, la diversión
                nunca se detiene. Vive la emoción de cada lanzamiento, compite
                con amigos y crea recuerdos inolvidables. ¡Ven a disfrutar el
                mejor ambiente de boliche con música, comida y grandes momentos!
              </p>

              <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
                <div className="flex flex-col items-center p-2 border-b-2 border-orange-500 xl:border-b-0 xl:border-r-2">
                  <h1 className="font-bold text-orange-500">+10,000 clientes felices</h1>
                  <p className="">
                    Desde familias hasta jugadores profesionales, cada visitante
                    vive la emoción de un juego inolvidable
                  </p>
                </div>

                <div className="flex flex-col items-center p-2 border-b-2 border-orange-500 xl:border-b-0 xl:border-r-2">
                  <h1 className="font-bold text-orange-500"> Torneos y eventos exclusivos</h1>
                  <p className="">
                    Organizamos competencias, eventos temáticos y noches
                    especiales para que la diversión nunca falte.
                  </p>
                </div>

                <div className="flex flex-col items-center p-2 ">
                  <h1 className="font-bold text-orange-500"> Ambiente único y moderno</h1>
                  <p className="">
                    Luces, música y la mejor tecnología en bolos para que cada
                    partida sea una experiencia increíble.
                  </p>
                </div>
              </div>

              <button className="w-full p-2 font-bold transition-all duration-700 ease-out bg-transparent border-2 border-orange-300 hover:text-white rounded-xl md:rounded-full md:m-auto md:w-1/2 hover:bg-orange-500 ">
                Reserva tu pista ahora
              </button>
            </div>

            <div className="hidden md:block">
              <img src={imgN1} alt="imgN1" className="m-auto rounded-full w-96 h-96" />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default HeaderStrikes;

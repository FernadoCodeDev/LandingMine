import React from "react";
import imgN7 from "../../assets/img/imgN7.webp";
import imgN8 from "../../assets/img/imgN8.webp";
import imgN9 from "../../assets/img/imgN9.webp";


const FourthSection = () => {
    return (
        <div className="relative flex flex-col items-center w-full h-auto">

            <div className="hidden md:flex flex-col w-full m-auto max-w-[80rem] ">

                <div className="grid grid-cols-2">
                    <img src={imgN7} alt="imgN7" className="w-full h-auto" />


                    <div className="flex flex-col items-center justify-center p-4 bg-white">
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

                <div className="grid grid-cols-2">
                    <img src={imgN8} alt="imgN9" className="order-2 w-full h-auto" />
                    <div className="flex flex-col items-center justify-center order-1 p-4 bg-white">
                        <h1 className="text-xl font-bold text-orange-600 md:text-2xl">
                            Iluminación y efectos especiales
                        </h1>
                        <p className="text-base md:text-lg md:max-w-96">
                            Luces vibrantes, pantallas dinámicas y efectos
                            especiales que transforman cada partida en un
                            espectáculo.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <img src={imgN9} alt="imgN9" className="w-full h-auto" />
                    <div className="flex flex-col items-center justify-center p-4 bg-white">
                        <h1 className="text-xl font-bold text-orange-600 md:text-2xl">
                            Modo juego para todos los niveles
                        </h1>
                        <p className="text-base md:text-lg md:max-w-96">
                            ¿Eres novato o todo un pro? Ajustamos las pistas
                            y configuraciones para que todos disfruten al máximo
                            sin importar su nivel de habilidad.
                        </p>
                    </div>
                </div>

            </div>


            <div className="md:hidden m-auto max-w-[80rem] flex flex-col gap-4 md:flex-row w-full">
                <div
                    className="relative w-full bg-center bg-cover border-4 border-white h-60 md:h-80"
                    style={{ backgroundImage: `url(${imgN7})` }}
                >
                    <div className="backdrop-blur-[1px] bg-black/40 absolute bottom-0 left-0 z-10 flex flex-col items-start justify-end w-full h-full gap-2 p-4 m-auto text-white text-start">
                        <h1 className="text-xl font-bold text-orange-600 md:text-2xl">
                            Pistas de última generación
                        </h1>
                        <p className="text-base md:text-lg md:max-w-96">
                            Nuestra tecnología de boliche garantiza tiros
                            precisos y una experiencia fluida, perfecta
                            para principiantes y expertos
                        </p>
                    </div>
                </div>

                <div
                    className="relative w-full bg-center bg-cover border-4 border-white h-60 md:h-80"
                    style={{ backgroundImage: `url(${imgN8})` }}
                >
                    <div className="backdrop-blur-[1px] bg-black/40 absolute bottom-0 left-0 z-10 flex flex-col items-start justify-end w-full h-full gap-2 p-4 m-auto text-white text-start">
                        <h1 className="text-xl font-bold text-orange-600 md:text-2xl">
                            Iluminación y efectos especiales
                        </h1>
                        <p className="text-base md:text-lg md:max-w-96">
                            Luces vibrantes, pantallas dinámicas y efectos
                            especiales que transforman cada partida en un
                            espectáculo.
                        </p>
                    </div>
                </div>

                <div
                    className="relative w-full bg-center bg-cover border-4 border-white h-60 md:h-80"
                    style={{ backgroundImage: `url(${imgN9})` }}
                >
                    <div className="backdrop-blur-[1px] bg-black/40 absolute bottom-0 left-0 z-10 flex flex-col items-start justify-end w-full h-full gap-2 p-4 m-auto text-white text-start">
                        <h1 className="text-xl font-bold text-orange-600 md:text-2xl">
                            Modo juego para todos los niveles
                        </h1>
                        <p className="text-base md:text-lg md:max-w-96">
                            ¿Eres novato o todo un pro? Ajustamos las pistas
                            y configuraciones para que todos disfruten al máximo
                            sin importar su nivel de habilidad.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FourthSection;

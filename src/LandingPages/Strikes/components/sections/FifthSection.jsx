import React from "react";
import imgN10 from "../../assets/img/imgN10.webp";
import imgN11 from "../../assets/img/imgN11.webp";
import imgN12 from "../../assets/img/imgN12.webp";

const FifthSection = () => {
    return (
        <div className="relative flex flex-col items-center w-full h-auto gap-4 bg-beige-300 dark:bg-slate-950">

                <h1 className="text-xl font-bold text-center text-orange-600 md:text-2xl">
                    Elige tu forma de jugar y disfrutar en Strike’s
                </h1>
                <p className="text-base text-black md:text-lg text-center dark:text-white max-w-[30rem]">
                    Ya sea que vengas solo, con amigos o en familia,
                    tenemos el plan perfecto para ti. Disfruta del
                    boliche a tu manera con opciones diseñadas para
                    que la pases increíble.
                </p>

            <div className="flex flex-col gap-4 md:flex-row m-auto max-w-[80rem]">

                <div className="relative group">
                    <img
                        src={imgN10}
                        alt="imgN10"
                        className="w-full h-auto transition-all duration-300 rounded-xl group-hover:opacity-70"
                    />

                    <div className="absolute w-full h-full bottom-0 left-0 flex flex-col items-center rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[4px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-bold md:text-2xl">
                            Primera Ronda $15
                        </h1>

                        <p className="text-base md:text-lg">
                            Sumérgete en la emoción del juego con nuestro combo
                            Primera Ronda. Disfruta de 1 hora de juego en nuestras
                            pistas profesionales con la renta de zapatos incluida.
                            Perfecto para quienes buscan una partida relajada y pura
                            diversión sin extras.
                        </p>
                    </div>
                </div>

                <div className="relative group">
                    <img
                        src={imgN11}
                        alt="imgN11"
                        className="w-full h-auto transition-all duration-300 rounded-xl group-hover:opacity-70"
                    />

                    <div className="absolute w-full h-full bottom-0 left-0 flex flex-col items-center rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[4px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-bold md:text-2xl">
                            Ronda Spare $20
                        </h1>

                        <p className="text-base md:text-lg">
                            Si el hambre ataca mientras juegas, el combo Ronda
                            Spare es para ti. Además de 1 hora de boliche,
                            este paquete incluye una deliciosa pizza recién
                            horneada y una jarra de soda para compartir. La mejor
                            combinación para una tarde de diversión con amigos o
                            familia.
                        </p>
                    </div>
                </div>

                <div className="relative group">
                    <img
                        src={imgN12}
                        alt="imgN12"
                        className="w-full h-auto transition-all duration-300 rounded-xl group-hover:opacity-70"
                    />

                    <div className="absolute w-full h-full bottom-0 left-0 flex flex-col items-center rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[4px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-bold md:text-2xl">
                            Ronda Strike $30
                        </h1>

                        <p className="text-base md:text-lg">
                            Para quienes buscan la experiencia completa, el
                            combo Ronda Strike lo tiene todo. Juega 1 hora
                            y 30 minutos, disfruta de una pizza grande y una
                            jarra de soda, y como extra especial, obtén una
                            ronda en nuestra zona arcade o un descuento en tu
                            próxima visita. La mejor manera de vivir el boliche
                            al máximo.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FifthSection;

import React from "react";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen gap-4 text-black bg-beige-50 dark:bg-slate-900 md:text-2xl dark:text-white">
      <div className="flex flex-col items-center gap-4 m-auto max-w-[90rem] w-full  p-4">
        <h1 className="text-3xl font-bold text-center text-orange-500 md:text-6xl ">
          Elige tu forma de jugar y disfrutar en Strike’s
        </h1>
        <p className="text-center max-w-[50rem]">
          Ya sea que vengas solo, con amigos o en familia, tenemos el plan
          perfecto para ti. Disfruta del boliche a tu manera con opciones
          diseñadas para que la pases increíble.
        </p>
      </div>

      <div className="grid grid-cols-1 max-w-[90rem] m-auto  ">
        <div className="grid grid-cols-1 gap-4 p-4 border-b-2 md:grid-cols-3 border-beige-200 dark:border-slate-800">
          <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
            Primera Ronda
          </h1>
          <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
            $15
          </h1>
          <p className="text-center">
            Sumérgete en la emoción del juego con nuestro combo Primera Ronda.
            Disfruta de 1 hora de juego en nuestras pistas profesionales con la
            renta de zapatos incluida. Perfecto para quienes buscan una partida
            relajada y pura diversión sin extras.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 border-b-2 md:grid-cols-3 border-beige-200 dark:border-slate-800">
          <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
            Ronda Spare
          </h1>
          <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
            $20
          </h1>
          <p className="text-center">
            Si el hambre ataca mientras juegas, el combo Ronda Spare es para ti.
            Además de 1 hora de boliche, este paquete incluye una deliciosa
            pizza recién horneada y una jarra de soda para compartir. La mejor
            combinación para una tarde de diversión con amigos o familia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
            Ronda Strike
          </h1>
          <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
            $30
          </h1>
          <p className="text-center">
            Para quienes buscan la experiencia completa, el combo Ronda Strike
            lo tiene todo. Juega 1 hora y 30 minutos, disfruta de una pizza
            grande y una jarra de soda, y como extra especial, obtén una ronda
            en nuestra zona arcade o un descuento en tu próxima visita. La mejor
            manera de vivir el boliche al máximo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

import React from "react";
import QualitySVG from "./SVGComponents/qualitySVG";
import RenewableSVG from "./SVGComponents/RenewableSVG";
import SavingSVG from "./SVGComponents/SavingSVG";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black lg:text-2xl bg-white dark:text-white dark:bg-neutral-900">
      <div className="m-auto max-w-[80rem] grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        <div className="shadow-xl flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-white dark:bg-neutral-800">
          <QualitySVG  height="60" width="60px"/>
          <h1 className="font-bold text-sky-800 text-2xl md:text-4xl text-center dark:text-lime-400">
            Calidad hasta el sol
          </h1>
          <p className="">
            Nuestros paneles solares están diseñados con tecnología de
            vanguardia para ofrecer la mayor eficiencia y durabilidad.
            Fabricados con materiales de alta calidad, garantizan un rendimiento
            excepcional incluso en condiciones climáticas desafiantes.
          </p>
        </div>

        <div className="shadow-xl flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-white dark:bg-neutral-800">
          <RenewableSVG height="60" width="60px"/>
          <h1 className="font-bold text-sky-800 text-2xl md:text-4xl text-center dark:text-lime-400">
            Energía 100% Renovable
          </h1>
          <p className="">
            Apostar por la energía solar no solo reduce tu impacto ambiental,
            sino que también te permite ser parte del cambio hacia un futuro más
            limpio y sostenible.
          </p>
        </div>

        <div className="shadow-xl flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-white dark:bg-neutral-800">
          <SavingSVG height="60" width="60px"/>

          <h1 className="font-bold text-sky-800 text-2xl md:text-4xl text-center dark:text-lime-400">
            Ahorro Inteligente
          </h1>
          <p className="">
            Con nuestros paneles solares, puedes reducir tu consumo eléctrico
            entre un <strong>40% y 70%</strong>, lo que se traduce en un ahorro
            significativo en tus facturas de luz. Invierte hoy y empieza a
            disfrutar de energía limpia mientras optimizas tus gastos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

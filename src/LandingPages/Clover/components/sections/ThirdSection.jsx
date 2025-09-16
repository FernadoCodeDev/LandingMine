import React from "react";
import QualitySVG from "../../assets/svg/qualitySVG";
import RenewableSVG from "../../assets/svg/RenewableSVG";
import SavingSVG from "../../assets/svg/SavingSVG";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto gap-4 px-4 py-16 text-black bg-white lg:text-2xl dark:text-white dark:bg-neutral-900">
      <div className="m-auto max-w-[80rem] grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        <div className="flex flex-col items-start justify-start gap-4 p-4 bg-white shadow-xl rounded-xl dark:bg-neutral-800">

          <div className="flex flex-row items-center justify-between gap-4">
            <QualitySVG height="40px" width="40px" />
            <h1 className="text-xl font-bold text-center text-sky-800 md:text-2xl dark:text-lime-400">
              Calidad hasta el sol
            </h1>
          </div>
          <p className="text-base md:text-lg">
            Nuestros paneles solares están diseñados con tecnología de
            vanguardia para ofrecer la mayor eficiencia y durabilidad.
            Fabricados con materiales de alta calidad, garantizan un rendimiento
            excepcional incluso en condiciones climáticas desafiantes.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start gap-4 p-4 bg-white shadow-xl rounded-xl dark:bg-neutral-800">

          <div className="flex flex-row items-center justify-between gap-4">
            <RenewableSVG height="40px" width="40px" />
            <h1 className="text-xl font-bold text-center text-sky-800 md:text-2xl dark:text-lime-400">
              Energía 100% Renovable
            </h1>
          </div>

          <p className="text-base md:text-lg">
            Apostar por la energía solar no solo reduce tu impacto ambiental,
            sino que también te permite ser parte del cambio hacia un futuro más
            limpio y sostenible.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start gap-4 p-4 bg-white shadow-xl rounded-xl dark:bg-neutral-800">

          <div className="flex flex-row items-center justify-between gap-4">
            <SavingSVG height="40px" width="40px" />
            <h1 className="text-xl font-bold text-center text-sky-800 md:text-2xl dark:text-lime-400">
              Ahorro Inteligente
            </h1>
          </div>

          <p className="text-base md:text-lg">
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

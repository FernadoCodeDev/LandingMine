import React from "react";
import imgN from "../../assets/img/imgN.webp";
import SVG1 from "../../assets/svg/SVG1";
import SVG2 from "../../assets/svg/SVG2";
import SVG3 from "../../assets/svg/SVG3";

const FourthSection = () => {
  return (
    <div className="grid items-center justify-center w-full h-auto grid-cols-1 gap-4 md:grid-cols-2 bg-neutral-900">
      <div className="flex flex-col justify-center order-2 p-4 text-center md:order-1">
        <h1 className="font-mono font-bold text-white tex-base md:text-2xl">
          <span className="text-yellow-300 ">SALUD</span> Y{" "}
          <span className="text-yellow-300">NUTRICIÓN</span>
        </h1>

        <p className="text-white text-start">
          Las elecciones alimentarias cotidianas están guiadas por una serie de
          consideraciones, emociones, hábitos, estilos de vida acelerados,
          tradiciones, influencias sociales, religión y placer. Permítanos
          ayudarlo a sentirse seguro de sus elecciones alimentarias mientras
          sigue disfrutando de los alimentos que ama con sesiones de
          asesoramiento nutricional individuales. Ya sea que su objetivo sea
          perder peso, reducir el colesterol u optimizar su salud, tenernos como
          su asesor nutricional privado le brindará el apoyo que necesita para
          mantenerse en el buen camino y motivado.
        </p>

        <div className="flex flex-row justify-end mt-4">
          <button className="w-full p-2 text-base font-semibold text-black bg-yellow-300 rounded-tl-full rounded-br-full lg:w-60 md:text-1xl">
            MÁS INFORMACIÓN
          </button>
        </div>

        <div className="flex flex-row justify-between py-4">
          <SVG1 className="object-contain w-20 h-auto" />
          <SVG2 className="object-contain w-20 h-auto" />
          <SVG3 className="object-contain w-20 h-auto" />
        </div>
      </div>

      <div className="order-1 md:order-2">
        <img
          src={imgN}
          alt="imgN"
          className="w-full h-full"
          style={{ maskImage: "linear-gradient(black 80%, transparent)" }}
        />
      </div>
    </div>
  );
};

export default FourthSection;

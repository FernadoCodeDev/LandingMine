import React from "react";
import LandscapeSVG from "./SVGComponents/LandscapeSVG";
import PeaceSVG from "./SVGComponents/PeaceSVG";
import ExperienceSVG from "./SVGComponents/ExperienceSVG";
import MarshmallowSVG from "./SVGComponents/Marshmallow";
import imgN2 from "../img/imgN2.webp";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black lg:text-2xl bg-beige-100 dark:text-white dark:bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-auto max-w-[80rem]">
        <div className="grid order-1 grid-cols-1 gap-4 md:order-2">
          <h1 className="text-2xl font-bold lg:text-4xl">Descubre la magia de acampar</h1>
          <p className="">
            En Camping Night, cada experiencia de campamento es única. Ya sea
            que busques aventuras en la naturaleza, un momento de paz bajo las
            estrellas o compartir historias alrededor de una fogata con amigos,
            aquí encontrarás el lugar perfecto para vivirlo.
          </p>
          <button className="w-1/2 p-2 font-bold transition-all duration-700 ease-out rounded-full bg-neutral-800 hover:bg-black text-beige-50 dark:text-black dark:bg-beige-50 dark:hover:bg-beige-200">
            Saber más
          </button>

          
        </div>

        <div className="order-3 md:order-2">
          <img src={imgN2} alt="imgN2" className="w-full h-auto rounded-2xl" />
        </div>

        <div className="grid order-2 grid-cols-2 gap-2 md:order-3 md:col-span-2 ">
            <div className="grid grid-cols-1 gap-4 p-2">
              <LandscapeSVG width="60" height="60" />
              <p>
                Explora senderos, escala montañas y sumérgete en la belleza
                natural. Cada rincón de Camping Night está diseñado para que te
                conectes con la naturaleza y vivas momentos inolvidables.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-2">
              <PeaceSVG width="60" height="60" />
              <p>
                Nuestras zonas de camping están alejadas del ruido de la ciudad,
                permitiéndote disfrutar del sonido del viento entre los árboles,
                el canto de los pájaros y la paz que solo la naturaleza puede
                ofrecer.{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-2">
              <ExperienceSVG width="60" height="60" />
              <p>
                Con dos décadas ofreciendo las mejores zonas de campamento, en
                Camping Night sabemos lo que necesitas para una experiencia
                segura, cómoda y auténtica.{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-2">
              <MarshmallowSVG width="60" height="60" />
              <p>
                Nada como terminar el día asando malvaviscos y preparando
                deliciosos s’mores junto a la fogata. ¡La mejor forma de
                compartir y crear recuerdos inolvidables!{" "}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SecondSection;

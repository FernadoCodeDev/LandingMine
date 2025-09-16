import React from "react";
import imgN4 from "../../assets/img/imgN4.webp";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto text-black bg-beige-200 dark:bg-zinc-950 md:text-2xl dark:text-white">
      {/*Round container similar to an ellipse shape width 100% 100% height, and at the top 50% and 100% (100% for top 0% for bottom) */}
      <div
        className="flex items-center justify-center w-full h-auto p-4 bg-beige-300 dark:bg-zinc-900"
        style={{ clipPath: "ellipse(180% 95% at 50% 100%)" }}
      >
        <div className=" grid grid-cols-1 gap-4 max-w-[80rem] p-2">
          <div className="grid grid-cols-2 gap-1 mt-40">
            <h1 className="col-span-2 font-serif text-xl font-bold md:text-2xl lg:text-4xl text-start">
              ELEGANCIA RENOVADA
            </h1>
            <h1 className="col-span-2 font-serif text-xl font-bold text-center md:text-2xl lg:text-4xl">
               LUJO ACOGEDOR{" "}
            </h1>
            <h1 className="col-start-2 font-serif text-xl font-bold text-center text-blue-900 md:text-2xl lg:text-4xl ">
              Y ESTADÍA INOLVIDABLE
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2">
            <img src={imgN4} alt="imgN2" className="w-full h-auto" />

            <div className="flex flex-col gap-4 max-w-[40rem]">
              <h1 className="text-xl font-bold text-center md:text-2xl">
                Sumérgete en la sofisticación y el confort de JR Royal Hotel
              </h1>
              <p className="text-xl md:text-2xl">
                Nuestro hotel ha sido diseñado para ofrecerte una experiencia
                única, combinando un ambiente moderno con la calidez de un
                hogar. Desde nuestra elegante recepción hasta cada rincón de
                nuestras instalaciones, cada detalle ha sido pensado para
                brindarte tranquilidad, exclusividad y el mejor servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

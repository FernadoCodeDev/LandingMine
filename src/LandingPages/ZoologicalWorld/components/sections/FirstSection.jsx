import React from "react";
import imgN1 from "../../assets/img/imgN1.webp";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";
import imgN4 from "../../assets/img/imgN4.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto p-4 text-black bg-white dark:bg-neutral-900 md:mt-[40%] xl:mt-[15%] md:text-2xl dark:text-white ">
      <div className="m-auto max-w-[70rem] grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-orange-500 md:text-4xl">
            ¡Bienvenidos a Zoological World!
          </h1>

          <p className="">
            En nuestro zoológico, nos esforzamos por ofrecer una experiencia
            única que te conecte con la naturaleza y te enseñe sobre la
            importancia de la conservación. Ven y descubre nuestro diverso mundo
            animal, lleno de maravillas y aprendizajes.
          </p>
        </div>

        <div className="flex flex-row items-center gap-4">
          <h1 className="text-3xl font-bold text-center text-orange-500 md:text-4xl lg:text-6xl">
            Convivencia en la Sabana
          </h1>
        </div>

        <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2 ">
          <div className="relative group">
            <img
              src={imgN1}
              alt="imgN1"
              className="w-full h-auto transition-all duration-300 rounded-xl group-hover:opacity-70"
            />

            <div className="absolute w-full h-full bottom-0 left-0 flex flex-col items-center rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[1px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-xl font-bold md:text-2xl">
                Un Encuentro Único
              </h1>

              <p className="text-base md:text-xl">
                Sumérgete en la serenidad de la sabana africana. Aquí, puedes
                interactuar con algunas de las especies más majestuosas, como
                jirafas y cebras. Un lugar donde la tranquilidad de estos
                animales te permite sentirte más cerca de la naturaleza.
              </p>
            </div>
          </div>

          <div className="relative group">
            <img
              src={imgN2}
              alt="imgN2"
              className="w-full h-auto transition-all duration-300 rounded-xl group-hover:opacity-70"
            />

            <div className="absolute w-full h-full bottom-0 left-0 flex flex-col items-center rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[1px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-xl font-bold md:text-2xl">
                Un Mundo Bajo el Agua
              </h1>

              <p className="text-base md:text-xl">
                ¡Explora las profundidades del océano! En nuestro acuario,
                podrás observar especies marinas sorprendentes y aprender sobre
                los ecosistemas acuáticos. Vive la magia de la vida marina en su
                hábitat natural, a solo unos pasos de ti.
              </p>
            </div>
          </div>

          <div className="relative group">
            <img
              src={imgN3}
              alt="imgN3"
              className="w-full h-auto transition-all duration-300 rounded-xl group-hover:opacity-70"
            />

            <div className="absolute w-full h-full bottom-0 left-0 flex flex-col items-center rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[1px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-xl font-bold md:text-2xl">
                Reyes de la Selva
              </h1>

              <p className="text-base md:text-xl">
                Adéntrate en el reino de los leones y descubre la majestuosidad
                de estos imponentes felinos. En Zoological World, podrás
                observar a los reyes de la selva en su hábitat, respetando su
                espacio, mientras aprendes sobre su comportamiento y
                conservación.
              </p>
            </div>
          </div>

          <div className="relative group">
            <img
              src={imgN4}
              alt="imgN4"
              className="w-full h-auto transition-all duration-300 rounded-xl group-hover:opacity-70"
            />

            <div className="absolute w-full h-full bottom-0 left-0 flex flex-col items-center rounded-xl md:rounded-none md:rounded-tr-xl justify-center text-start gap-2 backdrop-blur-[1px] bg-black/60 p-4 m-auto text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-xl font-bold md:text-2xl">
                Gigantes en Peligro
              </h1>

              <p className="text-base md:text-xl">
                Conoce a estos imponentes seres de la naturaleza y aprende por
                qué están en peligro de extinción. Nuestro zoológico trabaja
                incansablemente para promover su conservación y crear conciencia
                sobre la importancia de proteger a los rinocerontes y otras
                especies vulnerables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

import React from "react";
import PantheSVG from "./SVGComponents/pantheSVG";
import ElephantSVG from "./SVGComponents/elephantSVG";
import RhinocerosSVG from "./SVGComponents/rhinocerosSVG";
import HippopotamusSVG from "./SVGComponents/hippopotamus";
import DolphinSVG from "./SVGComponents/dolphinSVG";

const SecondSection = () => {
  return (
    <div className="relative flex-col items-center w-full min-h-screen p-4 text-black bg-white md:flex md:text-2xl dark:text-white dark:bg-neutral-900">
      <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
        Aventura en Zoological World
      </h1>
      <p className="text-xl text-center md:text-2xl">
        Elige la mejor opción para tu aventura en Zoological World y vive
        momentos inolvidables con la naturaleza.
      </p>

      {/* Content less than lg */}
      {/* On mobile devices, it wouldn't be possible to hover over images because you'd have to hold it down. */}

      <div className="grid items-center w-full grid-cols-1 gap-4 m-auto mt-12 md:grid-cols-2 lg:hidden ">
        <div className="relative p-2 bg-orange-500 border-4 border-orange-600 rounded-xl">
          <PantheSVG />

          <div className="absolute bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white ">Mundo Salvaje</h1>

            <p className="text-base text-white ">
              Disfruta de un recorrido por todas las áreas del zoológico y
              conoce más de 500 animales de distintas especies. Una experiencia
              perfecta para toda la familia.
            </p>
            <button className="text-2xl font-bold bg-transparent">
              Comprar
            </button>
          </div>
        </div>

        <div className="relative p-2 bg-yellow-400 border-4 border-yellow-500 rounded-xl">
          <ElephantSVG />
          <div className="absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tl-3xl text-start">
            <h1 className="col-span-2 text-xl font-bold text-white ">
              La Ruta de los Colosos
            </h1>

            <h1 className="text-xl font-bold text-white ">
              Encuentro con los Gigantes
            </h1>
            <h1 className="col-span-2 text-base text-white ">
              Adéntrate en una experiencia especial donde aprenderás sobre
              elefantes, rinocerontes e hipopótamos. Descubre sus hábitos,
              alimentación y el esfuerzo de conservación para proteger a estas
              especies.
            </h1>
            <button className="text-2xl font-bold bg-transparent">
              Comprar
            </button>
          </div>
        </div>

        <div className="relative p-2 bg-orange-600 border-4 border-orange-700">
          <RhinocerosSVG />

          <div className="absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tl-3xl text-start">
            <h1 className="text-xl font-bold text-white ">
              Alimentando a los Pequeños
            </h1>
            <p className="text-base text-white ">
              Sé parte de una experiencia única en la que podrás alimentar y
              aprender sobre crías de animales herbívoros como jirafas,
              rinocerontes y más. Una actividad educativa y emocionante.
            </p>
            <button className="text-2xl font-bold bg-transparent">
              Comprar
            </button>
          </div>
        </div>

        <div className="relative p-2 bg-purple-600 border-4 border-purple-800">
          <HippopotamusSVG />

          <div className="absolute bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white">Guardián VIP</h1>
            <p className="text-base text-white">
              Vive la experiencia más exclusiva con acceso especial a áreas
              restringidas, interacción con cuidadores y una visita guiada para
              conocer de cerca la labor de conservación en Zoological World.
            </p>
            <button className="text-2xl font-bold bg-transparent">
              Comprar
            </button>
          </div>
        </div>

        <div className="relative p-2 bg-blue-500 border-4 border-blue-600 ">
          <DolphinSVG />

          <div className="absolute bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white">Aventura Acuática </h1>
            <p className="text-base text-white">
              Vive una experiencia completa con acceso al zoológico y al
              acuario. Explora la vida terrestre y sumérgete en el asombroso
              mundo marino con especies exóticas e impresionantes.
            </p>
            <button className="text-2xl font-bold bg-transparent">
              Comprar
            </button>
          </div>
        </div>
      </div>

      {/* Content Greater than lg*/}
      <div className="top-40 hidden lg:flex p-2 m-auto max-w-[100rem] w-full h-auto box-border absolute transform ">
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-orange-500 border-4 border-orange-600 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto">
            <PantheSVG />

            <details className="max-w-[10rem] text-orange-200 p-2 text-base bg-transparent">
              <summary className="font-bold">Mundo Salvaje</summary>
              Disfruta de un recorrido por todas las áreas del zoológico y
              conoce más de 500 animales de distintas especies. Una experiencia
              perfecta para toda la familia.
            </details>

            <button className="text-2xl font-bold text-white bg-transparent">
              Comprar
            </button>
          </div>
        </div>

        {/* Elephant Card */}
        <div className=" flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-yellow-400 border-4 border-yellow-500 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center">
            <ElephantSVG />

            <details className="max-w-[10rem] text-amber-700 p-2 text-base bg-transparent">
              <summary className="font-bold">La Ruta de los Colosos</summary>
              <h1 className="font-bold">Encuentro con los Gigantes</h1>
              Adéntrate en una experiencia especial donde aprenderás sobre
              elefantes, rinocerontes e hipopótamos. Descubre sus hábitos,
              alimentación y el esfuerzo de conservación para proteger a estas
              especies.
            </details>

            <button className="text-2xl font-bold text-white bg-transparent ">
              Comprar
            </button>
          </div>
        </div>

        {/* Rhino Card */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-orange-600 border-4 border-orange-700 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center">
            <RhinocerosSVG />
            <details className="max-w-[10rem] text-orange-300 p-2 text-base bg-transparent">
              <summary className="font-bold">
                Alimentando a los Pequeños
              </summary>
              Sé parte de una experiencia única en la que podrás alimentar y
              aprender sobre crías de animales herbívoros como jirafas,
              rinocerontes y más. Una actividad educativa y emocionante.
            </details>

            <button className="text-2xl font-bold text-white bg-transparent">
              Comprar
            </button>
          </div>
        </div>

        {/* Hippopotamus Card */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-500 bg-purple-700 border-4 border-purple-800 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center">
            <HippopotamusSVG />
            <details className="max-w-[10rem] text-purple-400 p-2 text-base bg-transparent">
              <summary className="font-bold">Guardián VIP</summary>
              Vive la experiencia más exclusiva con acceso especial a áreas
              restringidas, interacción con cuidadores y una visita guiada para
              conocer de cerca la labor de conservación en Zoological World.
            </details>

            <button className="text-2xl font-bold text-white bg-transparent">
              Comprar
            </button>
          </div>
        </div>

        {/* Dolphin Card */}
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all bg-blue-500 border-4 border-blue-600 duration hover:grow-[4] hover:max-w-full   ">
          <div className="flex flex-col items-center">
            <DolphinSVG />
            <details className="max-w-[10rem] text-blue-800 p-2 text-base bg-transparent">
              <summary className="font-bold">Aventura Acuática</summary>
              Vive una experiencia completa con acceso al zoológico y al
              acuario. Explora la vida terrestre y sumérgete en el asombroso
              mundo marino con especies exóticas e impresionantes.
            </details>
            <button className="text-2xl font-bold text-white bg-transparent">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

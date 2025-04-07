import React from "react";
import imgN4 from "../img/imgN4.webp";
import imgN5 from "../img/imgN5.webp";
import imgN6 from "../img/imgN6.webp";
import imgN7 from "../img/imgN7.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full text-black min-h-auto bg-slate-950 md:text-2xl dark:text-white ">
      <div className="w-full bg-beige-100 dark:bg-neutral-900">
        <div className="max-w-[90rem] grid grid-cols-1 gap-4 p-2 m-auto md:grid-cols-2 max-w-">
          <div className="grid grid-cols-2 gap-1 ">
            <h1 className="col-span-2 font-serif text-xl font-bold text-center md:text-2xl lg:text-3xl">
              EXPERIENCIAS DE LUJO
            </h1>
            <h1 className="col-start-2 font-serif text-xl font-bold text-center md:text-2xl lg:text-3xl">
              A TU ALCANCE{" "}
            </h1>
          </div>

          <div className="grid grid-cols-2">
            <button className="w-full col-span-2 p-2 font-serif text-xl font-bold text-blue-900 transition-all duration-700 ease-out bg-transparent border-2 border-blue-900 dark:text-beige-100 hover:dark:dark:text-blue-900 md:col-span-1 md:col-start-2 rounded-xl md:rounded-full md:w-32 md:h-32 hover:bg-blue-900 hover:text-beige-100 dark:border-beige-100 dark:hover:bg-beige-100 ">
              Descubrir más
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:col-span-2">
            <div className="flex flex-col items-center justify-center gap-2 p-4 shadow-xl bg-beige-200 dark:bg-neutral-800">
              <img src={imgN4} alt="imgN4" className="w-full h-auto" />
              <h1 className="font-bold text-center">
                HABITACIONES & SUITES ROYAL
              </h1>
              <p className="">
                Desde acogedoras habitaciones hasta lujosas suites, cada espacio
                ha sido diseñado para brindarte el máximo confort y elegancia.
                Descansa en camas premium y disfruta de un ambiente exclusivo.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 p-4 shadow-xl bg-beige-200 dark:bg-neutral-800">
              <img src={imgN5} alt="imgN5" className="w-full h-auto" />
              <h1 className="font-bold text-center">
                PISCINAS PARA RELAJARTE & DISFRUTAR
              </h1>
              <p className="">
                Sumérgete en nuestras refrescantes piscinas y disfruta de un
                ambiente tranquilo y sofisticado. Perfecto para relajarte bajo
                el sol o nadar a cualquier hora del día.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 p-4 shadow-xl bg-beige-200 dark:bg-neutral-800">
              <img src={imgN6} alt="imgN6" className="w-full h-auto" />
              <h1 className="font-bold text-center">
                DESAYUNO BUFFET CONTINENTAL
              </h1>
              <p className="">
                Empieza tu día con un desayuno variado y delicioso. Disfruta de
                una selección de pan recién horneado, frutas frescas, café de
                alta calidad y mucho más en nuestro exclusivo buffet.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 p-4 shadow-xl bg-beige-200 dark:bg-neutral-800">
              <img src={imgN7} alt="imgN7" className="w-full h-auto" />

              <h1 className="font-bold text-center">SAUNA PARA TU BIENESTAR</h1>
              <p className="">
                Déjate envolver por la calidez y el confort de nuestro sauna, el
                lugar perfecto para relajarte y revitalizar cuerpo y mente
                después de un día de exploración o negocios.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Round container similar to an ellipse shape width 100% 100% height, and at the top 50% and 100% (100% for top 0% for bottom) */}
      <div
        className="flex items-center justify-center w-full min-h-[15rem] p-4 bg-beige-100 dark:bg-neutral-900"
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      ></div>
    </div>
  );
};

export default ThirdSection;

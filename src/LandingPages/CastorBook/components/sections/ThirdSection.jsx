import React from "react";
import Masonry from "react-masonry-css";
import imgN6 from "../../assets/img/imgN6.webp";
import imgN7 from "../../assets/img/imgN7.webp";
import imgN8 from "../../assets/img/imgN8.webp";
import imgN9 from "../../assets/img/imgN9.webp";
import imgN10 from "../../assets/img/imgN10.webp";
import imgN11 from "../../assets/img/imgN11.webp";
import imgN12 from "../../assets/img/imgN12.webp";
import Heart from "../../assets/svg/Heart";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto gap-4 p-4 text-black bg-white dark:text-white dark:bg-neutral-900 ">
      <h1 className="p-2 text-2xl font-bold text-center border-b-2 border-blue-400 md:text-4xl dark:border-orange-300">
        Compra tu Libro Ahora
      </h1>
      <p className="text-base md:text-2xl text-center max-w-[50rem]">
        Encuentra el libro perfecto para ti y empieza a disfrutar de nuevas
        aventuras literarias. ¡Haz tu pedido hoy y déjate llevar por el poder de
        la lectura!
      </p>

      {/* Masonry effect*/}
      <Masonry
        breakpointCols={{ default: 3, 1024: 3, 768: 2 }}
        className="flex items-center justify-center gap-2 text-center md:gap-2 max-w-[80rem]"
        columnClassName="flex flex-col gap-2 "
      >
        <div className="relative flex flex-col group rounded-2xl bg-violet-200 md:hidden">
          <div className="flex flex-row items-center justify-between h-full p-4 ">
            <h1 className="font-bold text-black">⭐(4.8)</h1>
            <Heart  width="20" height="20"/>
          </div>
          <img src={imgN6} alt="imgN6" className="w-full h-auto " />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
            <h1 className="text-lg font-bold text-white md:text-2xl">
              La Magia del Sabor
            </h1>
            <h1 className="text-base font-bold text-white md:text-lg">
              $11.99
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col bg-blue-200 group rounded-2xl md:hidden">
          <div className="flex flex-row items-center justify-between h-full p-4 ">
            <h1 className="font-bold text-black">⭐(4.8)</h1>
            <Heart  width="20" height="20"/>
          </div>
          <img src={imgN7} alt="imgN7" className="w-full h-auto " />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
            <h1 className="text-lg font-bold text-white md:text-2xl">
              El Corazón del Misterio
            </h1>
            <h1 className="text-base font-bold text-white md:text-lg">
              $14.99
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col group rounded-2xl bg-sky-200 md:hidden">
          <div className="flex flex-row items-center justify-between h-full p-4 ">
            <h1 className="font-bold text-black">⭐(4.8)</h1>
            <Heart  width="20" height="20"/>
          </div>
          <img src={imgN8} alt="imgN8" className="w-full h-auto " />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
            <h1 className="text-lg font-bold text-white md:text-2xl">
              Viaje al pasado
            </h1>
            <h1 className="text-base font-bold text-white md:text-lg">
              $19.99
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col bg-purple-200 group rounded-2xl md:hidden">
          <div className="flex flex-row items-center justify-between h-full p-4 ">
            <h1 className="font-bold text-black">⭐(4.8)</h1>
            <Heart  width="20" height="20"/>
          </div>
          <img src={imgN9} alt="imgN9" className="w-full h-auto " />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
            <h1 className="text-lg font-bold text-white md:text-2xl">
              Cielo Estrellado
            </h1>
            <h1 className="text-base font-bold text-white md:text-lg">
              $19.99
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col bg-teal-200 group rounded-2xl md:hidden">
          <div className="flex flex-row items-center justify-between h-full p-4 ">
            <h1 className="font-bold text-black">⭐(4.8)</h1>
            <Heart  width="20" height="20"/>
          </div>
          <img src={imgN10} alt="imgN10" className="w-full h-auto " />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
            <h1 className="text-lg font-bold text-white md:text-2xl">
              El arte de crear
            </h1>
            <h1 className="text-base font-bold text-white md:text-lg">
              $19.99
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col group rounded-2xl bg-stone-200 md:hidden">
          <div className="flex flex-row items-center justify-between h-full p-4 ">
            <h1 className="font-bold text-black">⭐(4.8)</h1>
            <Heart  width="20" height="20"/>
          </div>
          <img src={imgN11} alt="imgN11" className="w-full h-auto " />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
            <h1 className="text-lg font-bold text-white md:text-2xl">
              Estrategias del Éxito
            </h1>
            <h1 className="text-base font-bold text-white md:text-lg">
              $19.99
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col group rounded-2xl bg-emerald-200 md:hidden">
          <div className="flex flex-row items-center justify-between h-full p-4 ">
            <h1 className="font-bold text-black">⭐(4.8)</h1>
            <Heart  width="20" height="20"/>
          </div>
          <img src={imgN12} alt="imgN12" className="w-full h-auto " />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
            <h1 className="text-lg font-bold text-white md:text-2xl">
              Corazón de un Alma
            </h1>
            <h1 className="text-base font-bold text-white md:text-lg">
              $19.99
            </h1>
          </div>
        </div>

        <div className="flex-col hidden md:block">
          <div className="relative flex flex-col my-2 group rounded-2xl bg-sky-200">
            <div className="flex flex-row items-center justify-between h-full p-4 ">
              <h1 className="font-bold text-black">⭐(4.8)</h1>
              <Heart  width="20" height="20"/>
            </div>
            <img src={imgN8} alt="imgN8" className="w-full h-auto " />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
              <h1 className="text-lg font-bold text-white md:text-2xl">
                Viaje al pasado
              </h1>
              <h1 className="text-base font-bold text-white md:text-lg">
                $19.99
              </h1>
            </div>
          </div>

          <div className="relative flex flex-col my-2 bg-purple-200 group rounded-2xl">
            <div className="flex flex-row items-center justify-between h-full p-4 ">
              <h1 className="font-bold text-black">⭐(4.8)</h1>
              <Heart  width="20" height="20"/>
            </div>
            <img src={imgN9} alt="imgN9" className="w-full h-auto " />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
              <h1 className="text-lg font-bold text-white md:text-2xl">
                Cielo Estrellado
              </h1>
              <h1 className="text-base font-bold text-white md:text-lg">
                $19.99
              </h1>
            </div>
          </div>

          <div className="relative flex flex-col my-2 bg-teal-200 group rounded-2xl">
            <div className="flex flex-row items-center justify-between h-full p-4 ">
              <h1 className="font-bold text-black">⭐(4.8)</h1>
              <Heart  width="20" height="20"/>
            </div>
            <img src={imgN10} alt="imgN10" className="w-full h-auto " />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
              <h1 className="text-lg font-bold text-white md:text-2xl">
                El arte de crear
              </h1>
              <h1 className="text-base font-bold text-white md:text-lg">
                $19.99
              </h1>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative flex flex-col my-2 group rounded-2xl bg-violet-200 ">
            <div className="flex flex-row items-center justify-between h-full p-4 ">
              <h1 className="font-bold text-black">⭐(4.8)</h1>
              <Heart  width="20" height="20"/>
            </div>
            <img src={imgN6} alt="imgN6" className="w-full h-auto " />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
              <h1 className="text-lg font-bold text-white md:text-2xl">
                La Magia del Sabor
              </h1>
              <h1 className="text-base font-bold text-white md:text-lg">
                $11.99
              </h1>
            </div>
          </div>

          <div className="relative flex flex-col my-2 bg-blue-200 group rounded-2xl">
            <div className="flex flex-row items-center justify-between h-full p-4 ">
              <h1 className="font-bold text-black">⭐(4.8)</h1>
              <Heart  width="20" height="20"/>
            </div>
            <img src={imgN7} alt="imgN7" className="w-full h-auto " />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
              <h1 className="text-lg font-bold text-white md:text-2xl">
                El Corazón del Misterio
              </h1>
              <h1 className="text-base font-bold text-white md:text-lg">
                $14.99
              </h1>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative flex flex-col my-2 group rounded-2xl bg-stone-200">
            <div className="flex flex-row items-center justify-between h-full p-4 ">
              <h1 className="font-bold text-black">⭐(4.8)</h1>
              <Heart  width="20" height="20"/>
            </div>
            <img src={imgN11} alt="imgN11" className="w-full h-auto " />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
              <h1 className="text-lg font-bold text-white md:text-2xl">
                Estrategias del Éxito
              </h1>
              <h1 className="text-base font-bold text-white md:text-lg">
                $19.99
              </h1>
            </div>
          </div>

          <div className="relative flex flex-col my-2 group rounded-2xl bg-emerald-200">
            <div className="flex flex-row items-center justify-between h-full p-4 ">
              <h1 className="font-bold text-black">⭐(4.8)</h1>
              <Heart  width="20" height="20"/>
            </div>

            <img src={imgN12} alt="imgN12" className="w-full h-auto " />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
              <h1 className="text-lg font-bold text-white md:text-2xl">
                Corazón de un Alma
              </h1>
              <h1 className="text-base font-bold text-white md:text-lg">
                $19.99
              </h1>
            </div>
          </div>
        </div>
      </Masonry>
    </div>
  );
};

export default ThirdSection;

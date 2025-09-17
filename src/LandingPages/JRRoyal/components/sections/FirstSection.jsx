import React from "react";
import imgN1 from "../../assets/img/imgN1.webp";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-auto text-black bg-beige-200 dark:bg-zinc-950 dark:text-white">
      <div className="relative flex w-full h-[600px]">
        
        <div
          className="relative hidden h-full bg-center bg-cover md:block flex-[1] dark:border-beige-100 border-zinc-950"
          style={{ backgroundImage: `url(${imgN1})` }}
        />
       
        <div
          className="relative flex-[3] h-full bg-center bg-cover md:border-x border-b dark:border-beige-100 border-zinc-950"
          style={{ backgroundImage: `url(${imgN2})` }}
        >
          <div className="bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 text-white bg-black/60">
            <h3 className="text-sm md:text-base lg:text-2xl">
              Un oasis de comodidad y confort en cada detalle
            </h3>
            <h1 className="font-serif text-2xl font-bold lg:text-5xl">
              BIENVENIDO A
            </h1>
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-7xl">
              JR ROYAL HOTEL
            </h1>
            <p className="text-base md:text-lg max-w-[25rem]">
              Disfruta de una experiencia única donde el lujo y la
              hospitalidad se combinan para brindarte una estancia
              inolvidable.
            </p>
            <button className="w-full p-2 font-serif font-bold transition-all duration-700 ease-out bg-transparent border-2 rounded-xl md:rounded-full md:w-24 md:h-24 text-beige-100 border-beige-100 hover:bg-beige-100 hover:text-blue-900">
              Reservar ahora
            </button>
          </div>
        </div>

        <div
          className="relative hidden h-full bg-center bg-cover md:block flex-[1] border-b dark:border-beige-100 border-zinc-950"
          style={{ backgroundImage: `url(${imgN3})` }}
        />
      </div>
    </div>
  );
};

export default FirstSection;

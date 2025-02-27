import React from "react";

const FirstSection = () => {
  return (
    <div className="relative w-full p-4 text-black border-t-2 border-b-2 border-gray-300 min-h-auto bg-yellow-50">
      <div className="w-1/3 p-2 mb-4 text-center border-2 border-black rounded-full md:w-1/6">
        <h1>INTEGRACIÓN</h1>
      </div>

      <p className="font-serif text-3xl md:text-5xl text-start mb-6 mx-auto max-w-[70rem]">
        Nuestro viaje comenzó con una pasión por la exploración y un compromiso
        de ayudar a otros a experimentar el mundo en todo su esplendor. Con años
        de servicio dedicado, nos hemos convertido en una agencia de viajes de
        primer nivel conocida por nuestro profesionalismo.
      </p>

      <div className="flex flex-row justify-between mx-auto max-w-[70rem]">
        <div className="flex-col justify-center font-serif text-center">
          <h1 className="text-5xl">
            200<span>+</span>
          </h1>
          <p className="text-1xl">Clientes satisfechos</p>
        </div>

        <div className="flex-col justify-center font-serif text-center">
          <h1 className="text-5xl">
            200<span>+</span>
          </h1>
          <p className="text-1xl">Los mejores hoteles</p>
        </div>

        <div className="flex-col justify-center font-serif text-center">
          <h1 className="text-5xl">World</h1>
          <p className="text-1xl">Destino de primera clase</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

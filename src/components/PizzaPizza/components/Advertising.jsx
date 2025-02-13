import React from "react";
import ImgHeader from "../img/ImgHeader.webp";

const Advertising = () => {
  return (
    /* <div className="flex flex-col justify-center w-full h-auto max-w-[80rem] bg-red-600 p-0 my-2 m-auto">
      <div className="grid grid-cols-2 p-0 m-0 ">
        <div className="flex flex-col justify-center p-2 text-center text-white">
          <h1 className="font-bold">Discount uo to 20% for</h1>
          <h2 className="font-bold">Garlic prawn Pizza</h2>
          <p>Enjoy the delicious garlic prawn pizza at a special price!</p>
          <p className="text-start">Until 20 Jan</p>
        </div>

        <div className="">
          <img src={ImgHeader} alt="ImgHeader" className="w-full h-auto" />
        </div>
      </div>
    </div>
*/

    <div className="flex flex-col justify-center w-full h-auto max-w-[80rem] bg-red-600 p-0 my-2 m-auto relative">
      <div className="relative grid grid-cols-2 p-0 m-0">
        {/* Contenido izquierdo (Rojo) */}
        <div className="relative z-10 flex flex-col justify-center p-2 text-center text-white">
          <h1 className="font-bold">Discount up to 20% for</h1>
          <h2 className="font-bold">Garlic Prawn Pizza</h2>
          <p>Enjoy the delicious garlic prawn pizza at a special price!</p>
          <p className="text-start">Until 20 Jan</p>
        </div>

        {/* Contenido derecho (Imagen) */}
        <div className="relative">
          <img src={ImgHeader} alt="ImgHeader" className="w-full h-auto" />
          {/* SVG para la curva */}

          <svg
            className="absolute top-0 left-[-33px] h-auto w-[106px]"
            viewBox="0 0 120 350"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50,0 C1,100 80,100 30,180 C1 Z"
              stroke="#dc2626"
              stroke-width="20"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Advertising;

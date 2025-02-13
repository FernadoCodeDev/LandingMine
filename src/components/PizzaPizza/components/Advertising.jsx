import React from "react";
import ImgHeader from "../img/ImgHeader.webp";

const Advertising = () => {
  return (
    <div className="flex flex-col justify-center w-full h-auto max-w-[80rem] bg-red-600 p-0 my-2 m-auto relative">
      <div className="relative grid grid-cols-2 p-0 m-0">
        <div className="relative z-10 flex flex-col justify-center p-0 text-center text-white">
          <h1 className="font-bold">Discount up to 20% for</h1>
          <h2 className="font-bold">Garlic Prawn Pizza</h2>
          <p className="">
            Enjoy the delicious garlic prawn pizza at a special price!
          </p>
          <p className="p-1 text-start">Until 20 Jan</p>
        </div>

        <div className="relative">
          <div className="relative">
            {/* Imagen */}
            <img src={ImgHeader} alt="ImgHeader" className="w-full h-auto" />

            <div className="absolute top-0 left-0 w-[15%] h-full bg-red-600 clip-s-curve"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;

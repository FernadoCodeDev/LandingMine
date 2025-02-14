import React from "react";
import ImgHeader from "../img/ImgHeader.webp";
import Separation from "../img/Separation.webp";

const Advertising = () => {
  return (
    <div className="flex flex-col justify-center w-full h-auto max-w-[80rem] bg-red-600 p-0 my-2 m-auto relative">
      <div className="relative grid grid-cols-2 p-0 m-0">
        <div className="relative z-10 flex flex-col justify-center p-0 text-center text-white">
          <h1 className="font-bold md:text-[2rem] lg:text[2.5rem]">
            Discount up to 20% for
          </h1>
          <h2 className="font-bold md:text-[1.7rem] lg:text[2.2rem]">
            Garlic Prawn Pizza
          </h2>
          <p className=" md:text-[1.2rem] lg:text[1.7rem]">
            Enjoy the delicious garlic prawn pizza at a special price!
          </p>
          <p className="p-1 text-start md:text-[1rem] lg:text[1.5rem]">
            Until 20 Jan
          </p>
        </div>

        <div className="relative">
          <div className="relative">
            <img src={ImgHeader} alt="ImgHeader" className="w-full h-auto" />

            <div className="absolute top-0 left-0 w-[14.9%] h-full">
              <img src={Separation} alt="ImgHeader" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;

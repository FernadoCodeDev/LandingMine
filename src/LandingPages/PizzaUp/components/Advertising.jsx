import React from "react";
import ImgHeader from "../img/ImgHeader.webp";
import Separation from "../img/Separation.webp";

const Advertising = () => {
  return (
    <div className="flex flex-col justify-center w-full h-auto max-w-[80rem] bg-red-600 p-0 my-2 m-auto relative">
      <div className="relative grid grid-cols-2 p-0 m-0 md:grid-cols-3">
        <div className="relative z-10 flex flex-col justify-center col-span-1 p-0 text-center text-white md:col-span-2">
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

        <div className="absolute z-20 flex flex-row p-1 bg-yellow-300 rounded-full -translate-x-1/4 md:-translate-x-1/5 left-1/2 md:left-[66%] lg:left-[68%] top-6 md:top-10 xl:top-16 rotate-[10deg]">
          <span className="font-bold text-[0.8rem] lg:text-[1.2rem] text-red-600">
            SPECIAL TODAY
          </span>
        </div>

        <div className="absolute z-20 flex flex-row p-1 bg-yellow-300 rounded-full -translate-x-1/4 md:-translate-x-1/5 left-1/2 md:left-[63%] lg:left-[65%] top-12 md:top-[4.2rem] xl:top-24 rotate-[355deg]">
          <span className="font-bold text-[0.8rem] lg:text-[1.2rem] text-red-600">
            Disc up to
          </span>
        </div>

        <div className="absolute z-20 flex flex-row p-1 bg-yellow-300 rounded-full -translate-x-1/4 md:-translate-x-1/5 left-[53%] md:left-[69%] lg:left-[71%] top-[4.5rem] md:top-[5.2rem] lg:top-[5.5rem] xl:top-[6.8rem] rotate-[330deg]">
          <span className="font-bold text-[0.8rem] lg:text-[1.2rem] text-red-600">20%</span>
        </div>

        <div className="relative col-span-1">
          <img src={ImgHeader} alt="ImgHeader" className="w-full h-auto" />

          <div className="absolute top-0 left-0 w-[14.9%] h-full">
            <img src={Separation} alt="ImgHeader" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;

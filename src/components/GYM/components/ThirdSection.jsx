import React from "react";
import ImageTime1 from "../img/ImgTime1.webp";
import ImageTime2 from "../img/ImgTime2.webp";
import ImageTime3 from "../img/ImgTime3.webp";

const ThirdSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-20 text-center bg-yellow-300 ">
        <h1 className="font-mono font-bold text-[1rem] lg:text-[2rem]">
          VIVE LA EXPERIENCIA DE FITNESS DEFINITIVA
        </h1>
      </div>

      <div className="grid justify-center grid-cols-3 m-auto py-4 w-full md:max-w-[100rem] md:p-4">
        <div className="flex flex-col justify-center py-4 bg-transparent">
          <div className="w-full h-auto p-4 opacity-25 bg-neutral-200">
            <h1 className="font-bold text-center text-[1rem]">FLEXI</h1>
            <img
              src={ImageTime1}
              alt="ImageTime1"
              className="w-40 h-auto p-2 m-auto"
            />
            <h1 className="font-bold text-center text-[1rem]">$120</h1>

            <div className="m-auto my-2">
              <p className="text-center">12 Classes per Month </p>
              <p className="text-center">3 Classes per Week</p>
              <p className="text-center">No Joining fees</p>
            </div>

            <button className="w-full font-semibold text-[0.6rem] md:text-[1rem] p-2 text-black bg-yellow-300 rounded-tl-full rounded-br-full">
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 bg-white ">
          <h1 className="font-bold text-center text-[1rem]">ALL ACCESS</h1>
          <img
            src={ImageTime2}
            alt="ImageTime2"
            className="w-40 h-auto p-2 m-auto"
          />
          <h1 className="font-bold text-center text-[1rem]">$260</h1>

          <div className="m-auto my-2">
            <p className="text-center">Unlimited classes per Month</p>
            <p className="text-center">3 Classes per Day</p>
            <p className="text-center">No Joining fees</p>
          </div>

          <button className="w-full font-semibold text-[0.6rem] md:text-[1rem] p-2 text-black transition-all duration-700 ease-out bg-yellow-300 rounded-tl-full rounded-br-full hover:bg-yellow-500">
            MÁS INFORMACIÓN
          </button>
        </div>

        <div className="flex flex-col justify-center py-4 bg-transparent">
          <div className="w-full h-auto p-4 opacity-25 bg-neutral-200">
            <h1 className="font-bold text-center text-[1rem]">ALL ACCESS</h1>
            <img
              src={ImageTime3}
              alt="ImageTime3"
              className="w-40 h-auto p-2 m-auto"
            />
            <h1 className="font-bold text-center text-[1rem]">$160</h1>

            <div className="m-auto my-2">
              <p className="text-center">20 classes per Month</p>
              <p className="text-center">5 Classes per Week</p>
              <p className="text-center">No Joining fees</p>
            </div>

            <button className="w-full font-semibold text-[0.6rem] md:text-[1rem] p-2 text-black bg-yellow-300 rounded-tl-full rounded-br-full">
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

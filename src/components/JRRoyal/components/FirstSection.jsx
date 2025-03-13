import React from "react";
import imgN2 from "../img/imgN2.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-black bg-blue-900 md:text-2xl dark:text-white">
      {/*Round container similar to an ellipse shape width 100% 100% height, and at the top 50% and 100% (100% for top 0% for bottom) */}
      <div
        className="flex items-center justify-center w-full min-h-screen p-4 bg-beige-100 dark:bg-neutral-900"
        style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }}
      >
        <div className=" grid grid-cols-1 gap-4 max-w-[80rem] p-2">
          <div className="grid grid-cols-2 gap-1 mt-40">
            <h1 className="col-span-2 font-serif text-xl font-bold md:text-5xl text-start">
              NEWLY RENOVATED
            </h1>
            <h1 className="col-span-2 font-serif text-xl font-bold text-center md:text-5xl">
              AND INTIMATELY{" "}
            </h1>
            <h1 className="col-start-2 font-serif text-xl font-bold text-center text-blue-900 md:text-5xl ">
              RESIDENTIAL
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2">
            <img src={imgN2} alt="imgN2" className="w-full h-auto" />

            <div className="max-w-[40rem]">
              <p className="text-xl md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                similique dolore esse quas quia laborum officiis recusandae
                ipsam eligendi reiciendis, provident ducimus. Accusantium rem
                iste, dolorem provident quidem voluptates ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

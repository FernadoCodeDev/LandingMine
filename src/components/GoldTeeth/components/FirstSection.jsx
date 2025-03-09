import React from "react";
import imgN4 from "../img/imgN4.webp";
import BookOnlineSVG from "./SVGComponents/BookOnlineSVG";
import VisitCliniCSVG from "./SVGComponents/VisitCliniCSVG";
import Tooth1SVG from "./SVGComponents/Tooth1SVG";

const FirstSection = () => {
  return (
    <div className="relative w-full min-h-screen p-4 text-black bg-beige-100 dark:text-white dark:bg-neutral-900">
      <div className="grid grid-cols-1 items-center justify-center gap-4 md:gap-12 md:grid-cols-2 m-auto max-w-[80rem]">
        <h1 className="text-3xl font-bold text-rose-800">
          Get pearl white teeth aesily
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          aliquam molestiae commodi hic facilis, debitis explicabo odio
          reprehenderit repudiandae. Ipsum illo deserunt minus dolorem, fugiat
          possimus exercitationem necessitatibus doloribus perferendis.
        </p>

        <img
          src={imgN4}
          alt="imgN4"
          className="w-full max-w-[30rem] h-auto rounded-t-full"
        />

        <div className="grid items-center grid-cols-1 gap-2">
          <div className="grid grid-cols-1 ">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 rounded-full bg-beige-100 dark:bg-white">
              <BookOnlineSVG width="40" height="40" />
            </div>
            <h1 className="text-2xl font-bold">Book Online</h1>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              mollitia et quae doloremque voluptatem ratione corrupti
            </p>
          </div>

          <div className="grid grid-cols-1">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 rounded-full bg-beige-100 dark:bg-white">
              <VisitCliniCSVG width="40" height="40" />
            </div>

            <h1 className="text-2xl font-bold">Book Online</h1>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              mollitia et quae doloremque voluptatem ratione corrupti
            </p>
          </div>

          <div className="grid grid-cols-1">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 rounded-full bg-beige-100 dark:bg-white">
              <Tooth1SVG width="40" height="40" />
            </div>

            <h1 className="text-2xl font-bold">Book Online</h1>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              mollitia et quae doloremque voluptatem ratione corrupti
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

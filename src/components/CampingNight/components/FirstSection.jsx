import React from "react";
import CampingTentSVG from "./SVGComponents/CampingTentSVG";
import NatureSVG from "./SVGComponents/NatureSVG";
import imgN1 from "../img/imgN1.webp";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-beige-50 dark:text-white dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-auto max-w-[80rem]">
        <div className="grid grid-cols-1 gap-4">
          <h1 className="font-bold">TEXT</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            fugit quas recusandae consectetur ex aspernatur quaerat. Nostrum
            pariatur facere asperiores exercitationem odit deleniti mollitia
            saepe? Eos, cupiditate. Sunt, quidem eum.
          </p>

          <button className="w-1/2 p-2 font-bold transition-all duration-700 ease-out rounded-full bg-neutral-800 hover:bg-black text-beige-50 dark:text-black dark:bg-beige-50 dark:hover:bg-beige-200">
            Read More
          </button>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-4 p-4 bg-beige-100">
              <CampingTentSVG width="60" height="60" />

              <div>
                <h1 className="text-2xl font-bold">TEXT</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  deserunt consectetur pariatur in accusamus vitae quis
                  explicabo minus nihil, blanditiis animi incidunt eveniet,
                  dicta quae ratione eligendi quos necessitatibus quia!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 bg-beige-100">
              <NatureSVG width="60" height="60" />

              <div>
                <h1 className="text-2xl font-bold">TEXT</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  deserunt consectetur pariatur in accusamus vitae quis
                  explicabo minus nihil, blanditiis animi incidunt eveniet,
                  dicta quae ratione eligendi quos necessitatibus quia!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <img src={imgN1} alt="imgN1" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

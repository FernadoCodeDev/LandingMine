import React from "react";
import LandscapeSVG from "./SVGComponents/LandscapeSVG";
import PeaceSVG from "./SVGComponents/PeaceSVG";
import ExperienceSVG from "./SVGComponents/ExperienceSVG";
import MarshmallowSVG from "./SVGComponents/Marshmallow";
import imgN2 from "../img/imgN2.webp";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-beige-50 dark:text-white dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-auto max-w-[80rem]">
        <div className="grid order-1 grid-cols-1 gap-4 md:order-2">
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

          <div className="grid grid-cols-2 gap-2 ">
            <div className="grid grid-cols-1 gap-4 p-2">
              <LandscapeSVG width="60" height="60" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-2">
              <PeaceSVG width="60" height="60" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-2">
              <ExperienceSVG width="60" height="60" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-2">
              <MarshmallowSVG width="60" height="60" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              </p>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <img src={imgN2} alt="imgN2" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

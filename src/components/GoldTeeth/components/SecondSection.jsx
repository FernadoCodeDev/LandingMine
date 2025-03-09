import React from "react";
import Tooth2SVG from "./SVGComponents/Tooth2SVG";
import Tooth3SVG from "./SVGComponents/Tooth3SVG";
import BracesSVG from "./SVGComponents/BracesSVG";

const SecondSection = () => {
  return (
    <div className="relative w-full min-h-screen p-4 bg-rose-800 text-beige-100">
      <div className="grid grid-cols-1 gap-4 md:gap-8 max-w-[80rem] m-auto">
        <h1 className="text-5xl font-bold text-center lg:text-8xl ">
          A Healthy smile starts here
        </h1>
        <p className="m-auto max-w-[50rem] text-center text-white ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
          inventore molestiae libero praesentium voluptate itaque aspernatur
          sunt temporibus minus? Minima ullam aut fugit dignissimos assumenda,
          quidem magnam delectus blanditiis facere?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 max-w-[80rem] m-auto">
        <div className="grid items-center justify-center grid-cols-1 gap-2 p-4 border rounded-2xl border-beige-100">
          <div className="flex flex-col items-center justify-center w-12 h-12 p-2 m-auto rounded-full bg-beige-100">
            <Tooth2SVG />
          </div>

          <h1 className="text-3xl font-bold text-center text-beige-100">
            General Dentisty
          </h1>

          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            vero fuga alias est ipsum labore quas iure laboriosam unde saepe
            sapiente necessitatibus nemo dignissimos nobis, deleniti dolorem, in
            illo repellendus.
          </p>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-2 p-4 border rounded-2xl bg-beige-100 border-beige-100">
          <div className="flex flex-col items-center justify-center w-12 h-12 p-2 m-auto rounded-full bg-rose-800">
            <Tooth3SVG />
          </div>

          <h1 className="text-3xl font-bold text-center text-rose-800">
            General Dentisty
          </h1>

          <p className="text-center text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            vero fuga alias est ipsum labore quas iure laboriosam unde saepe
            sapiente necessitatibus nemo dignissimos nobis, deleniti dolorem, in
            illo repellendus.
          </p>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-2 p-4 border rounded-2xl border-beige-100">
          <div className="flex flex-col items-center justify-center w-12 h-12 p-2 m-auto rounded-full bg-beige-100">
            <BracesSVG />
          </div>

          <h1 className="text-3xl font-bold text-center text-beige-100">
            General Dentisty
          </h1>

          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            vero fuga alias est ipsum labore quas iure laboriosam unde saepe
            sapiente necessitatibus nemo dignissimos nobis, deleniti dolorem, in
            illo repellendus.
          </p>
        </div>


      </div>
    </div>
  );
};

export default SecondSection;

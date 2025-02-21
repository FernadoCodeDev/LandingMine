import React from "react";
import BackgroundSection from "../img/BackgroundSection.webp";
import SVG1 from "./SVGcomponents/SVG1";
import SVG2 from "./SVGcomponents/SVG2";
import SVG3 from "./SVGcomponents/SVG3";
import SVG4 from "./SVGcomponents/SVG4";
import SVG5 from "./SVGcomponents/SVG5";
import SVG6 from "./SVGcomponents/SVG6";

const FirstSection = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundSection})` }}
      ></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center text-center text-white p-4">
        <h2 className="text-3xl font-bold md:text-5xl">Título de la sección</h2>
        <div className="mt-4 ">
          <p className="text-lg md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui velit
            aperiam dolores, nisi consequuntur aut voluptates beatae ad mollitia
            distinctio iusto? Vero optio dignissimos velit odit voluptatum
            repellendus esse ipsum.
          </p>
          <button className="flex fl mt-4 px-6 py-2 bg-slate-50 hover:bg-slate-300 text-black rounded-full transition-all">
            Botón de acción
          </button>
        </div>
      </div>

      <div className="relative pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 m-auto w-full h-full max-w-[90rem] bg-neutral-700 backdrop-blur-md p-6 rounded-lg text-white">
          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG1 />
            </div>
            <h2 className="text-xl font-semibold p-2">SEO</h2>
            <p className="text-sm p-2">Through organic SEO, paid search and GPS-enabled search, reach customers on an all-new level.</p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG2 />
            </div>
            <h2 className="text-xl font-semibold p-2">Social Media</h2>
            <p className="text-sm p-2">Increase your online following and deliver messages and promotions that wow your audience.</p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG3 />
            </div>
            <h2 className="text-xl font-semibold p-2">Email</h2>
            <p className="text-sm p-2">Reach all your customers at once with creatively designed, strategic email messaging.</p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG4 />
            </div>
            <h2 className="text-xl font-semibold p-2">Paid Search</h2>
            <p className="text-sm p-2">Customers are searching for a business like yours! Help them find you with paid search ads.</p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG5 />
            </div>
            <h2 className="text-xl font-semibold p-2">Web Design</h2>
            <p className="text-sm p-2">Discover our beautiful, lead-generating websites that convert visitors into customers.</p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG6 />
            </div>
            <h2 className="text-xl font-semibold p-2">Content</h2>
            <p className="text-sm p-2">Embrace your one-of-a-kind voice with the help of custom-crafted, search-friendly content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

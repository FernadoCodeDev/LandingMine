import React from "react";
import imgN2 from "../img/imgN2.webp";
import imgN3 from "../img/imgN3.webp";
import imgN4 from "../img/imgN4.webp";
import ArrowSVG from "./SVGComponents/ArrowSVG";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-black bg-blue-200 lg:text-2xl dark:text-white dark:bg-neutral-900">
      <div className="w-full h-auto m-auto max-w-[90rem] grid grid-cols-1 md:grid-cols-3 items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-4 p-2 md:col-span-3">
          <h1 className="text-xl font-bold md:text-3xl"> Top Trending Books</h1>
          <h1 className="text-base md:xl">Most Popular reads of the year</h1>
          <div className="flex flex-row w-full gap-2 m-auto max-w-[40rem]">
            <button className="w-full p-2 font-bold text-black transition-all duration-700 ease-out bg-transparent border-2 border-black dark:text-white dark:border-white dark:border-neutral-800 rounded-2xl hover:bg-white">
              View All
            </button>

            <button className="flex items-center justify-center w-full p-2 font-bold text-black transition-all duration-700 ease-out bg-neutral-800 rounded-2xl hover:bg-black">
              <svg
                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="#fff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 p-4 mt-8 text-black md:col-span-3 md:grid-cols-3">
          <div className="flex flex-col p-4 bg-orange-200 border-t-8 border-l-8 border-r-8 border-white dark:border-neutral-800 md:border-8 md:rounded-2xl">
            <div className="flex flex-row justify-between ">
              <div>
                <h1 className="">System design</h1>
                <h1 className="font-bold">$25</h1>
              </div>

              <div className="w-12 h-12 p-2 text-center bg-white rounded-full">
                <ArrowSVG />
              </div>
            </div>

            <img src={imgN2} alt="imgN2" className="w-40 h-auto m-auto" />
          </div>

          <div className="flex flex-col p-4 border-t-8 border-l-8 border-r-8 border-white dark:border-neutral-800 md:border-l-0 md:border-r-0 md:border-t-8 md:border-b-8 md:my-8 bg-sky-200 ">
            <div className="flex flex-row justify-between ">
              <div>
                <h1 className="">System design</h1>
                <h1 className="font-bold">$25</h1>
              </div>

              <div className="w-12 h-12 p-2 text-center bg-white rounded-full">
                <ArrowSVG />
              </div>
            </div>

            <img src={imgN3} alt="imgN3" className="w-40 h-auto m-auto" />
          </div>

          <div className="flex flex-col p-4 bg-green-200 border-8 border-t-8 border-l-8 border-r-8 border-white dark:border-neutral-800 md:rounded-2xl">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="">System design</h1>
                <h1 className="font-bold">$25</h1>
              </div>

              <div className="w-12 h-12 p-2 text-center bg-white rounded-full">
                <ArrowSVG />
              </div>
            </div>

            <img src={imgN4} alt="imgN4" className="w-40 h-auto m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

import React from "react";
import imgN1 from "../../assets/img/imgN1.webp";

const FirstSection = () => {
  return (
    <div className="relative w-full p-4 text-black bg-white dark:text-white min-h-auto dark:bg-neutral-900">
      <div className="grid grid-cols-1 gap-2 m-auto max-w-[70rem] ">
        <div className="relative  ">
          <img src={imgN1} alt="imgN1" className="w-full h-auto rounded-xl" />

          <div className="absolute inset-0 flex flex-col items-start justify-end text-start gap-4  p-4 m-auto text-white z-10">
            <h1 className="text-2xl md:text-4xl max-w-[30rem]  font-bold">
            Únase a la lucha por un mejor sistema alimentario
            </h1>

            <button className="flex justify-center w-1/2 text-black p-2 font-bold transition-all duration-700 ease-out rounded-full bg-yellow-300 hover:bg-yellow-500">
              Conocer Productos{" "}
              <svg
                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

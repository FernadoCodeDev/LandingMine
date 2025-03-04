import React from "react";

const ThirdSection = () => {
  return (
    <div className="relative w-full min-h-screen p-2 bg-gray-900 text-amber-50">
      <div className="pt-20 md:pt-32 m-auto flex flex-row justify-between w-full border-b-2 my-2 border-amber-50 p-2 max-w-[100rem]">
        <p className="text-5xl font-fantasy ">CONSIGUE TUS ENTRADAS</p>

        <div className="flex flex-row items-end justify-end gap-2">
          <p className="text-xl ">CONSIGUE TUS ENTRADAS</p>
          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 border border-purple-400 rounded-full cursor-pointer">
            <svg
              class="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
              data-slot="icon"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ThirdSection;

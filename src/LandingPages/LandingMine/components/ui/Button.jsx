import React from "react";

const Button = () => {
  return (
    <div className="w-full md:col-span-2 lg:col-span-3">
      <a href="/Collection">
        <button class="overflow-hidden relative w-full p-2 h-12 bg-orange-500 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
          Explorar
          <span class="absolute w-full h-32 -top-8 left-0 bg-orange-200 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-500 duration-1000 origin-center"></span>
          <span class="absolute w-full h-32 -top-8 left-0 bg-orange-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-700 duration-700 origin-center"></span>
          <span class="absolute w-full h-32 -top-8 left-0 bg-orange-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-1000 duration-500 origin-center"></span>
          <span class="absolute inset-0 w-full h-full flex items-center justify-center text-center m-auto group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 z-10">
            LandingMine
          </span>
        </button>
      </a>
    </div>
  );
};
export default Button;

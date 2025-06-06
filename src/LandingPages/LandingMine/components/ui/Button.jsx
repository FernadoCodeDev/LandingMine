import React from "react";

const Button = () => {
  return (
    <div className="w-full sm:col-span-2 lg:col-span-3 xl:col-span-4">
      <a href="/Collection">
        <button className="relative z-10 w-full h-12 p-2 overflow-hidden text-xl font-bold text-white bg-orange-500 border-none rounded-md cursor-pointer group">
          Explorar
          <span className="absolute left-0 w-full h-32 transition-transform duration-1000 origin-center transform scale-0 bg-orange-200 rounded-full -top-8 group-hover:scale-100 group-hover:duration-500"></span>
          <span className="absolute left-0 w-full h-32 transition-transform duration-700 origin-center transform scale-0 bg-orange-400 rounded-full -top-8 group-hover:scale-100 group-hover:duration-700"></span>
          <span className="absolute left-0 w-full h-32 transition-transform duration-500 origin-center transform scale-0 bg-orange-600 rounded-full -top-8 group-hover:scale-100 group-hover:duration-1000"></span>
          <span className="absolute inset-0 z-10 flex items-center justify-center w-full h-full m-auto text-center duration-100 opacity-0 group-hover:opacity-100 group-hover:duration-1000">
            LandingMine
          </span>
        </button>
      </a>
    </div>
  );
};
export default Button;

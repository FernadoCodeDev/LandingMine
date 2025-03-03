import React from "react";

const FirstSection = () => {
  return (
    <div className="relative w-full p-4 text-black bg-white dark:text-white min-h-auto dark:bg-neutral-800">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center mx-auto max-w-[70rem]">
        <div className="flex-col justify-center text-center ">
          <h1 className="text-5xl font-bold">
            128<span className="font-bold text-blue-400">K</span>
          </h1>
          <p className="text-1xl">Inquilinos</p>
        </div>

        <div className="flex-col justify-center text-center ">
          <h1 className="text-5xl font-bold">
            300<span className="font-bold text-blue-400">+</span>
          </h1>
          <p className="text-1xl">Especialistas</p>
        </div>

        <div className="flex-col justify-center text-center ">
          <h1 className="text-5xl font-bold">
            78<span className="font-bold text-blue-400">%</span>
          </h1>
          <p className="text-1xl">Crecimiento anual</p>
        </div>

        <div className="flex-col justify-center text-center ">
          <h1 className="text-5xl font-bold">
            10<span className="font-bold text-blue-400">K</span>
          </h1>
          <p className="text-1xl">Propiedades</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

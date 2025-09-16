import React from "react";

const SecondSection = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen gap-4 p-4 bg-beige-300 dark:bg-slate-950 text-slate-950 dark:text-beige-50">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center m-auto max-w-[80rem] gap-4 md:gap-12">
        <div className="grid grid-cols-1 ">
          <h1 className="font-bold text-center text-7xl md:text-8xl">
            200
          </h1>
          <h1 className="text-4xl text-center md:text-5xl">
          Campeones siendo formados en distintas ciudades
          </h1>
        </div>

        <div className="grid grid-cols-1 ">
          <h1 className="font-bold text-center text-7xl md:text-8xl">
            10,000
          </h1>
          <h1 className="text-4xl text-center md:text-5xl">
          Luchadores forjados en cada ring
          </h1>
        </div>

        <div className="grid grid-cols-1 ">
          <h1 className="font-bold text-center text-7xl md:text-8xl">
            500
          </h1>
          <h1 className="text-4xl text-center md:text-5xl">
          Victorias en torneos y exhibiciones
          </h1>
        </div>

        <div className="grid grid-cols-1 ">
          <h1 className="font-bold text-center text-7xl md:text-8xl">
            +1,000
          </h1>
          <h1 className="text-4xl text-center md:text-5xl">
          Batallas ganadas con honor y pasión
          </h1>
        </div>

      </div>
    </div>
  );
};

export default SecondSection;

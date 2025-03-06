import React from "react";

const SecondSection = () => {
  return (
    <div className="flex items-center justify-center relative w-full min-h-screen  bg-orange-100  dark:bg-cyan-950 text-amber-50 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center m-auto max-w-[70rem] gap-4 md:gap-12">
        <div className="grid grid-cols-1  ">
          <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-7xl md:text-9xl">
            1,000
          </h1>
          <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-4xl md:text-6xl">
          Campeones siendo formados en distintas ciudades
          </h1>
        </div>

        <div className="grid grid-cols-1  ">
          <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-7xl md:text-9xl">
            10,000
          </h1>
          <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-4xl md:text-6xl">
          Luchadores forjados en cada ring
          </h1>
        </div>

        <div className="grid grid-cols-1  ">
          <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-7xl md:text-9xl">
            500
          </h1>
          <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-4xl md:text-6xl">
          Victorias en torneos y exhibiciones
          </h1>
        </div>

        <div className="grid grid-cols-1  ">
          <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-7xl md:text-9xl">
            +1,000
          </h1>
          <h1 className="text-center text-cyan-950 dark:text-orange-50 font-bold text-4xl md:text-6xl">
          Batallas ganadas con honor y pasión
          </h1>
        </div>

      
      </div>
    </div>
  );
};

export default SecondSection;

import React from "react";
import Paginator from "../Pagination/Paginator";
import Page1 from "../Pagination/page1"
import Page2 from "../Pagination/page2"
import Page3 from "../Pagination/page3"
import Page4 from "../Pagination/page4"



const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto gap-4 p-4 text-black bg-white dark:text-white dark:bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 pb-4 border-slate-300 gap-2 m-auto max-w-[80rem]">
        <h1 className="text-2xl font-bold text-center md:text-6xl">
          Propiedades Populares
        </h1>

        <p className="text-start md:text-2xl ">
          brindamos un servicio completo para la venta, compra o alquiler de
          inmuebles, brindamos un brindamos un servicio completo para la venta.
        </p>
      </div>

      <Paginator pages={[Page1, Page2, Page3, Page4]} />


      <button className="flex flex-col font-bold  text-center transition-all duration-700 ease-out bg-blue-400 hover:bg-blue-600 text-white md:w-1/2 dark:bg-neutral-900 dark:hover:bg-black my-12 p-2 w-full max-w-[70rem] m-auto">
        Ver todas
      </button>
    </div>
  );
};

export default SecondSection;

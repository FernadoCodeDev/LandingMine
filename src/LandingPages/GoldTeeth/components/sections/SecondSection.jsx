import React from "react";
import Tooth2SVG from "../../assets/svg/Tooth2SVG";
import Tooth3SVG from "../../assets/svg/Tooth3SVG";
import BracesSVG from "../../assets/svg/BracesSVG";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col lg:text-xl items-center justify-center w-full min-h-screen p-4 bg-rose-800 text-beige-100">
      <div className="grid grid-cols-1 gap-4 md:gap-8 max-w-[80rem] m-auto">
        <h1 className="text-5xl font-bold text-center lg:text-8xl ">
          Una sonrisa saludable empieza aquí
        </h1>
        <p className="m-auto max-w-[50rem] text-center text-white ">
          Contamos con un servicio para contactar al médico en línea para una
          consulta sobre tu salud dental o preguntar horarios de trabajo en la
          clínica.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 max-w-[80rem] m-auto">
        <div className="grid items-center justify-center grid-cols-1 gap-2 p-4 border rounded-2xl border-beige-100">
          <div className="flex flex-col items-center justify-center w-12 h-12 p-2 m-auto rounded-full bg-beige-100">
            <Tooth2SVG />
          </div>

          <h1 className="text-3xl font-bold text-center lg:text-5xl text-beige-100">
            Odontología general
          </h1>

          <p className="text-center">
            Desde exámenes dentales regulares y limpiezas hasta empastes y
            extracciones, nuestros servicios de odontología general están
            diseñados para mantener su salud bucal en óptimas condiciones.
          </p>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-2 p-4 border rounded-2xl bg-beige-100 border-beige-100">
          <div className="flex flex-col items-center justify-center w-12 h-12 p-2 m-auto rounded-full bg-rose-800">
            <Tooth3SVG />
          </div>

          <h1 className="text-3xl font-bold text-center lg:text-5xl text-rose-800">
            Odontología cosmética
          </h1>

          <p className="text-center text-black">
            Transforme su sonrisa con nuestra gama de tratamientos dentales
            cosméticos, que incluyen blanqueamiento dental, carillas y cambios
            de imagen de la sonrisa. Consiga una sonrisa deslumbrante
          </p>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-2 p-4 border rounded-2xl border-beige-100">
          <div className="flex flex-col items-center justify-center w-12 h-12 p-2 m-auto rounded-full bg-beige-100">
            <BracesSVG />
          </div>

          <h1 className="text-3xl font-bold text-center lg:text-5xl text-beige-100">
            Odontología restauradora
          </h1>

          <p className="text-center">
            Repare los dientes dañados o faltantes con nuestros tratamientos
            restauradores, como implantes dentales, coronas, puentes y prótesis
            dentales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

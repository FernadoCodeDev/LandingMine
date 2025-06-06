import React from "react";
import Masonry from "react-masonry-css";
import SVGemailing from "../../assets/svg/SVG-emailing";
import SVGvoicemail from "../../assets/svg/SVG-voicemail";
import SVGtexting from "../../assets/svg/SVG-texting ";
import SVGstorage from "../../assets/svg/SVG-storage";
import SVGbilling from "../../assets/svg/SVG-billing";
import SVGmarketing from "../../assets/svg/SVG-marketing";
import SVGManage from "../../assets/svg/SVG-Manage";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-red-500">
      <div className="grid justify-between grid-cols-1 p-2 text-white md:grid-cols-2 m-auto max-w-[80rem]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="w-1/2 p-2 text-center bg-red-400 rounded-lg md:w-1/3">
              <h1>INTEGRACIÓN</h1>
            </div>
            <h1 className="m-2 text-3xl font-bold md:text-8xl">
              Compra en cualquier lugar
            </h1>
          </div>
          <div>
            <p className="p-2 text-start text-base md:text-2xl max-w-[40rem]">
              Ahora es mucho más fácil pagar a alguien. Todo lo que necesitas es
              una dirección de correo electrónico para enviar pagos comerciales
              transfronterizos en más de 25 divisas a casi cualquier persona, en
              cualquier lugar.
            </p>

            <button className="p-2 mt-2 font-bold text-black transition-all duration-700 ease-out bg-white rounded-2xl md:text-2xl hover:bg-gray-200">
              Explorar más
            </button>
          </div>
        </div>

        {/* Masonry efect*/}
        <Masonry
          breakpointCols={{ default: 3, 768: 3, 500: 3 }}
          className="flex items-center justify-center gap-2 p-4 text-center"
          columnClassName="flex flex-col"
        >
          <div>
            <div className="flex flex-col items-center justify-center p-4 mt-2 text-center bg-red-400 rounded-3xl ">
              <SVGemailing className="max-w-[200px]" />
              <h1 className="mt-4 font-bold text-white">Emailing</h1>
            </div>

            <div className="flex flex-col items-center justify-center p-4 mt-2 text-center bg-red-400 rounded-3xl ">
              <SVGstorage className="max-w-[200px]" />
              <h1 className="font-bold text-white">Storage</h1>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center p-4 mt-2 text-center bg-red-400 rounded-3xl ">
              <SVGvoicemail className="max-w-[200px]" />
              <h1 className="font-bold text-white">Voicemail </h1>
            </div>

            <div className="flex flex-col items-center justify-center p-4 mt-2 text-center bg-red-400 rounded-3xl ">
              <SVGbilling className="max-w-[200px]" />
              <h1 className="font-bold text-white">Billing</h1>
            </div>

            <div className="flex flex-col items-center justify-center p-4 mt-2 text-center bg-red-400 rounded-3xl ">
              <SVGManage className="max-w-[200px]" />
              <h1 className="font-bold text-white">Manage</h1>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center p-4 mt-2 text-center bg-red-400 rounded-3xl ">
              <SVGtexting className="max-w-[200px]" />
              <h1 className="font-bold text-white">Texting</h1>
            </div>

            <div className="flex flex-col items-center justify-center p-4 mt-2 text-center bg-red-400 rounded-3xl ">
              <SVGmarketing className="max-w-[200px]" />
              <h1 className="font-bold text-white">Marketing</h1>
            </div>
          </div>
        </Masonry>
      </div>
    </div>
  );
};

export default SecondSection;

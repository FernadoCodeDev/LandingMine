import React from "react";
import Masonry from "react-masonry-css";
import SVGemailing from "./svgcomponets/SVG-emailing";
import SVGvoicemail from "./svgcomponets/SVG-voicemail";
import SVGtexting from "./svgcomponets/SVG-texting ";
import SVGstorage from "./svgcomponets/SVG-storage";
import SVGbilling from "./svgcomponets/SVG-billing";
import SVGmarketing from "./svgcomponets/SVG-marketing";
import SVGManage from "./svgcomponets/SVG-Manage";

const SecondSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-red-500">
      <div className="grid justify-between grid-cols-1 p-2 text-white md:grid-cols-2">
        <div>
          <div className="w-1/3 p-2 text-center bg-red-400 rounded-lg">
            <h1>INTEGRACIÓN</h1>
          </div>
          <h1 className="text-3xl font-bold">Compra en cualquier lugar</h1>
          <p className="p-2 text-start max-w-[40rem]">
            Ahora es mucho más fácil pagar a alguien. Todo lo que necesitas es
            una dirección de correo electrónico para enviar pagos comerciales
            transfronterizos en más de 25 divisas a casi cualquier persona, en
            cualquier lugar.
          </p>
          <button className="p-3 mt-2 font-bold text-black transition-all duration-700 ease-out bg-white rounded-full hover:bg-gray-200">
          Explorar más
          </button>
        </div>

        {/* Masonry efect*/}
        <Masonry
          breakpointCols={{ default: 3, 768: 3, 500: 3 }}
          className="flex items-center justify-center gap-2 p-4 text-center"
          columnClassName="flex flex-col"
        >
          <div>
            <div className="p-4 mb-2 bg-red-400 rounded-3xl">
              <SVGemailing />
            </div>

            <div className="p-4 mt-2 bg-red-400 rounded-3xl">
              <SVGstorage />
            </div>
          </div>

          <div className="">
            <div className="p-4 mb-2 bg-red-400 rounded-3xl">
              <SVGvoicemail />
            </div>

            <div className="p-4 my-2 bg-red-400 rounded-3xl">
              <SVGbilling />
            </div>

            <div className="p-4 mt-2 bg-red-400 rounded-3xl">
              <SVGManage />
            </div>
          </div>

          <div>
            <div className="p-4 mb-2 bg-red-400 rounded-3xl">
              <SVGtexting />
            </div>

            <div className="p-4 mt-2 bg-red-400 rounded-3xl">
              <SVGmarketing />
            </div>
          </div>
        </Masonry>
      </div>
    </div>
  );
};

export default SecondSection;

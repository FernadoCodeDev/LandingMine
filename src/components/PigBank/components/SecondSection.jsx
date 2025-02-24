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
      <div className="grid justify-between grid-cols-1 md:grid-cols-2">
        <div>
          <div>Integration</div>
          <h1>Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            dolores...
          </p>
          <button className="bg-white">Lorem</button>
        </div>

        {/* Masonry efect*/}
        <Masonry
          breakpointCols={{ default: 3, 768: 3, 500: 3 }}
          className="flex items-center justify-center gap-2 p-4 text-center"
          columnClassName="flex flex-col"
        >
          <div >
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

import React from "react";
import Masonry from "react-masonry-css";

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
          breakpointCols={{ default: 3, 768: 2, 500: 1 }}
          className="flex gap-4 p-4"
          columnClassName="flex flex-col gap-4"
        >
          <div className="p-6 bg-red-400">
            
          </div>


        </Masonry>
      </div>
    </div>
  );
};

export default SecondSection;

import React from "react";
import BowlingBallSlider from "../ui/Slider";
import Masonry from "react-masonry-css";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";
import imgN4 from "../../assets/img/imgN4.webp";
import imgN5 from "../../assets/img/imgN5.webp";
import imgN6 from "../../assets/img/imgN6.webp";
import imgN7 from "../../assets/img/imgN7.webp";
import imgN8 from "../../assets/img/imgN8.webp";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-black bg-white md:text-2xl dark:border-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="w-full h-auto m-auto ">
        <BowlingBallSlider />
      </div>

      <div className="m-auto max-w-[80rem]">
        <Masonry
          breakpointCols={{ default: 3, 768: 3, 767: 2 }}
          className="flex items-center justify-center gap-2 p-4 text-center"
          columnClassName="flex flex-col gap-2"
        >
          <img src={imgN2} alt="imgN2" className="w-full h-auto" />
          <img src={imgN3} alt="imgN3" className="w-full h-auto" />
          <img src={imgN4} alt="imgN4" className="w-full h-auto" />
          <img src={imgN5} alt="imgN5" className="w-full h-auto" />
          <img src={imgN6} alt="imgN6" className="w-full h-auto" />

          <div className="p-2 bg-green-900">
            <img src={imgN7} alt="imgN7" className="w-full h-auto" />
          </div>
          <img src={imgN8} alt="imgN8" className="w-full h-auto" />
        </Masonry>
      </div>


    </div>
  );
};

export default SecondSection;

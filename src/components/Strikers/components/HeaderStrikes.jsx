import React from "react";
import StrikesLogo from "../img/Strike'sLogo.webp";
import MobileMenu from "../../GlobalComponents/MobileMenu";
import DarkMode from "../../GlobalComponents/DarkMode";
import imgN1 from "../img/imgN1.webp";

const HeaderStrikes = () => {
  return (
    <div className="relative w-full min-h-screen text-black bg-white">
      <div className="relative grid items-start h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 items-center md:order-1 md:w-auto md:h-20 md:backdrop-blur-[4px] md:bg-white/20">
          <MobileMenu
            textColor="text-black transition-all duration-700 ease-out"
            hoverColor="hover:text-orange-500"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert"
          />
        </div>

        <img
          src={StrikesLogo}
          alt="StrikesLogo"
          className="order-1 object-contain w-40 h-auto mx-auto cursor-pointer md:order-2"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[1px] bg-black/40 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative m-auto grid grid-cols-1 gap-4 items-center text-center max-w-[100rem] order-4 col-span-2 md:col-span-3">
          <div className="flex flex-col items-center ">
            <h1 className="font-serif text-3xl font-bold text-center text-orange-500 lg:text-6xl ">
              Text Text
            </h1>
          </div>

          <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 ">
              <p className=" max-w-[25rem] text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                cupiditate dolorum natus amet magni culpa nobis ducimus, unde
                quasi voluptatem ipsam ipsa dicta soluta exercitationem tempora,
                rem id quidem nihil!
              </p>

              <button className="w-full p-2 font-serif font-bold transition-all duration-700 ease-out bg-transparent border-2 border-orange-300 hover:text-white rounded-xl md:rounded-full md:m-auto md:w-1/2 hover:bg-orange-500 ">
                lorem
              </button>
            </div>

            <div className="hidden md:block">
              <img src={imgN1} alt="imgN1" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderStrikes;

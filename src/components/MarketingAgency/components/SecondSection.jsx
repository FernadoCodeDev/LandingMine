import React from "react";
import laptop from "../img/laptop.webp";
import KeysHome from "../img/KeysHome.webp";
import CosmicPizza from "../img/CosmicPizza.webp";
import LandingMine from "../img/LandingMine.webp";
import PizzaPizza from "../img/PizzaPizza.webp";
import GYMLogo from "../img/GYMLogo.webp";
import Pig from "../img/Pig Bank.webp";

const SecondSection = () => {
  return (
    <div className="w-full h-auto pb-2 bg-gray-100">
      <div className="">
        <div className="">
          <h1 className="">AAAAA</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            impedit similique eius, recusandae officia consequuntur sunt sequi,
            quae amet hic porro aliquid sed ipsum nam obcaecati accusamus quo
            pariatur? Doloribus?
          </p>

          <button className="">AAA</button>
          <button className="">BBB</button>
        </div>

        <div className="">
          <img src={laptop} alt="laptop" className="drop-shadow-2xl" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 m-auto p-4 max-w-[80rem]">
        <div className="p-2 bg-white rounded-xl">
          <img
            src={CosmicPizza}
            alt="CosmicPizza"
            className="object-contain w-40 h-40 m-auto"
          />
        </div>

        <div className="p-2 rounded-xl bg-transparent border-2 border-gray-600 ">
          <img
            src={KeysHome}
            alt="KeysHome"
            className="object-contain w-40 h-40 m-auto"
          />
        </div>

        <div className="p-2 rounded-xl bg-transparent border-2 border-gray-600 ">
          <img
            src={LandingMine}
            alt="LandingMine"
            className="object-contain w-40 h-40 m-auto"
          />
        </div>

        <div className="p-2 rounded-xl bg-transparent border-2 border-gray-600 ">
          <img
            src={PizzaPizza}
            alt="PizzaPizza"
            className="object-contain w-40 h-40 m-auto"
          />
        </div>

        <div className="p-2 rounded-xl bg-transparent border-2 border-gray-600 ">
          <img
            src={GYMLogo}
            alt="GYMLogo"
            className="object-contain w-40 h-40 m-auto"
          />
        </div>

        <div className="p-2 rounded-xl bg-transparent border-2 border-gray-600 ">
          <img
            src={Pig}
            alt="Pig"
            className="object-contain w-40 h-40 m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

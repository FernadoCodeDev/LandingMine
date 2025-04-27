import React from "react";
import Pizza1 from "../../assets/img/Pizza1.webp";
import Pizza2 from "../../assets/img/Pizza2.webp";
import Pizza3 from "../../assets/img/Pizza3.webp";
import Pizza4 from "../../assets/img/Pizza4.webp";
import Pizza5 from "../../assets/img/Pizza5.webp";
import Pizza6 from "../../assets/img/Pizza6.webp";
import Close from "../../assets/svg/close";
import LeftHaf from "../../assets/svg/LeftHaf";
import Circle from "../../assets/svg/Circle";
import RightHalf from "../../assets/svg/RightHalf";
import Check from "../../assets/svg/Check";

export const pizzas = [
  {
    id: 1,
    name: "Mediterranean Pizza",
    price: 12,
    image: Pizza1,
  },
  {
    id: 2,
    name: "Country Pizza",
    price: 12,
    image: Pizza2,
  },

  {
    id: 3,
    name: "Margherita pizza",
    price: 12,
    image: Pizza3,
  },

  {
    id: 4,
    name: "Cheeseburger",
    price: 12,
    image: Pizza4,
  },

  {
    id: 5,
    name: "Double Pepperoni Pizza",
    price: 12,
    image: Pizza5,
  },

  {
    id: 6,
    name: "Four Cheese Pizza",
    price: 12,
    image: Pizza6,
  },
];

export default function Modal({ isOpen, onClose, pizza }) {
  if (!isOpen || !pizza) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-black bg-black bg-opacity-60">
      <div className="relative w-full max-w-[60rem] p-2 bg-white rounded-xl">
        <button
          onClick={onClose}
          className="absolute w-20 h-auto top-2 right-2 h"
        >
          <Close />
        </button>

        <div className="grid w-full grid-cols-2 gap-2">
          <div className="">
            <img src={pizza.image} alt={pizza.name} className="w-full h-auto md:max-w-96" />
            <h2 className="mb-2 text-xl font-bold md:text-2xl">{pizza.name}</h2>
            <p className="text-lg">${pizza.price}</p>

            <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3">
              <botton className="p-2 font-bold transition duration-700 ease-out cursor-pointer hover:bg-gray-300 ">
                Pequeña
              </botton>
              <botton className="p-2 font-bold bg-gray-300 border-b-2 border-red-600 cursor-pointer ">
                Mediana
              </botton>
              <botton className="p-2 font-bold transition duration-700 ease-out cursor-pointer hover:bg-gray-300 ">
                Grande
              </botton>
            </div>
          </div>

          <div className="grid items-center justify-center grid-cols-1 gap-4 mt-24">
            <h1 className="text-xl font-bold md:text-2xl">
              Agregar ingredientes
            </h1>

            <div className="grid grid-cols-2 gap-2 ">
              <div>
                <p className="font-bold text-red-600 text-start">pepperoni</p>
              </div>

              <div className="grid grid-cols-3">
                <LeftHaf width="25" height="25" />
                <Circle width="25" height="25" />
                <RightHalf width="25" height="25" />
              </div>

              <div>
                <p className="font-bold text-red-600 text-start">Jamón</p>
              </div>

              <div className="grid grid-cols-3">
                <LeftHaf width="25" height="25" />
                <Circle width="25" height="25" />
                <RightHalf width="25" height="25" />
              </div>

              <div>
                <p className="font-bold text-red-600 text-start">Tocino</p>
              </div>

              <div className="grid grid-cols-3">
                <LeftHaf width="25" height="25" />
                <Circle width="25" height="25" />
                <RightHalf width="25" height="25" />
              </div>

              <div>
                <p className="font-bold text-red-600 text-start">Extra Queso</p>
              </div>

              <div className="grid grid-cols-3">
                <LeftHaf width="25" height="25" />
                <Check width="25" height="25" />
                <RightHalf width="25" height="25" />
              </div>

              <div>
                <p className="font-bold text-red-600 text-start">Piña</p>
              </div>

              <div className="grid grid-cols-3">
                <LeftHaf width="25" height="25" />
                <Circle width="25" height="25" />
                <RightHalf width="25" height="25" />
              </div>
            </div>

            <botton className="p-2 font-bold transition duration-700 ease-out cursor-pointer bg-lime-400 hover:text-white hover:bg-lime-600">
              Agregar
            </botton>
          </div>
        </div>
      </div>
    </div>
  );
}

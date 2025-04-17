import React from "react";
import imgN5 from "../../assets/img/imgN5.webp";
import imgN6 from "../../assets/img/imgN6.webp";
import imgN7 from "../../assets/img/imgN7.webp";
import Close from "../../assets/svg/Close";

export const cars = [
  {
    id: 1,
    name: "Coupe Negro",
    price: "500",
    image: imgN5,
  },
  {
    id: 2,
    name: "CHEVROLET BOLT EUV",
    price: "600",
    image: imgN6,
  },

  {
    id: 3,
    name: "Nyobolt EV",
    price: "1,000",
    image: imgN7,
  },
];

export default function Modal({ isOpen, onClose, car }) {
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-black bg-black bg-opacity-60">
      <div className="relative w-full max-w-[60rem] p-2 bg-white rounded-xl">
        <button
          onClick={onClose}
          className="absolute w-20 h-auto top-2 right-2 h"
        >
          <Close />
        </button>

        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
          <div className="">
            <h2 className="mb-2 text-xl font-bold md:text-2xl">{car.name}</h2>
            <p className="text-gray-400 text-start">
              <span className="font-bold text-black">${car.price}</span>/day
            </p>
            <img src={car.image} alt={car.name} className="w-full h-auto rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Cooktopia from "../../assets/img/Cooktopia.webp";
import DreamHouse from "../../assets/img/DreamHouse.webp";
import GoldTeeth from "../../assets/img/GoldTeeth.webp";
import PizzaUp from "../../assets/img/PizzaUp.webp";
import GYM from "../../assets/img/GYMLogo.webp";
import Pig from "../../assets/img/Pig Bank.webp";
import Close from "../../assets/svg/Close";

export const Customers = [
  {
    id: 1,
    image: Cooktopia,
  },
  {
    id: 2,
    image: DreamHouse,
  },

  {
    id: 3,
    image: GoldTeeth,
  },

  {
    id: 4,
    image: PizzaUp,
  },

  {
    id: 5,
    image: GYM,
  },

  {
    id: 6,
    image: Pig,
  },
];

export default function Cards({ isOpen, onClose, Customer }) {
  if (!isOpen || !Customer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-black bg-black bg-opacity-60">
      <div className="relative w-full max-w-[60rem] p-2 bg-white rounded-xl">
        <button
          onClick={onClose}
          className="absolute w-20 h-auto top-2 right-2 "
        >
          <Close />
        </button>

        <div className="flex flex-col items-center justify-center w-full mt-20">
          <div className="">
            <img
              src={Customer.image}
              alt={Customer.image}
              className="rounded"
            />

            <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

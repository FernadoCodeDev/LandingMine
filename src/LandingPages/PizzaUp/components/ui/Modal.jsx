import React from "react";
import Pizza1 from "../../assets/img/Pizza1.webp";
import Pizza2 from "../../assets/img/Pizza2.webp";
import Pizza3 from "../../assets/img/Pizza3.webp";
import Pizza4 from "../../assets/img/Pizza4.webp";
import Pizza5 from "../../assets/img/Pizza5.webp";
import Pizza6 from "../../assets/img/Pizza6.webp";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-2 rounded-xl w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-2 right-2 hover:text-black"
        >
          x
        </button>

        <img src={pizza.image} alt={pizza.name} className="mb-4 rounded" />
        <h2 className="mb-2 text-2xl font-bold">{pizza.name}</h2>
        <p className="mb-4 text-lg">${pizza.price}</p>

        {/* data*/}
        <p className="text-sm text-gray-600">Opcion 1</p>
      </div>
    </div>
  );
}

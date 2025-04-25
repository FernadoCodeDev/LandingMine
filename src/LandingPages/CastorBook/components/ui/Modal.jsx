import React from "react";
import Close from "../../assets/svg/Close";
import imgN6 from "../../assets/img/imgN6.webp";
import imgN7 from "../../assets/img/imgN7.webp";
import imgN8 from "../../assets/img/imgN8.webp";
import imgN9 from "../../assets/img/imgN9.webp";
import imgN10 from "../../assets/img/imgN10.webp";
import imgN11 from "../../assets/img/imgN11.webp";
import imgN12 from "../../assets/img/imgN12.webp";
import Heart from "../../assets/svg/Heart";
export const Books = [
  {
    id: 1,
    name: "La Magia del Sabor",
    text: "Lorem",
    image: imgN6,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-violet-200",
    },
  },
  {
    id: 2,
    name: "El Corazón del Misterio",
    text: "Lorem",
    image: imgN7,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-blue-200",
    },
  },
  {
    id: 3,
    name: "Viaje al pasado",
    text: "Lorem",
    image: imgN8,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-sky-200",
    },
  },
  {
    id: 4,
    name: "Cielo Estrellado",
    text: "Lorem",
    image: imgN9,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-purple-200",
    },
  },
  {
    id: 5,
    name: "El arte de crear",
    text: "Lorem",
    image: imgN10,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-teal-200",
    },
  },
  {
    id: 6,
    name: "Estrategias del Éxito",
    text: "Lorem",
    image: imgN11,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-stone-200",
    },
  },
  {
    id: 7,
    name: "Corazón de un Alma",
    text: "Lorem",
    image: imgN12,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-emerald-200",
    },
  },
];

export default function Modal({ isOpen, onClose, Book }) {
  if (!isOpen || !Book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-black bg-black bg-opacity-60">
      <div
        className={`${Book.color.base}  p-2 m-auto overflow-hidden w-full md:w-1/2 xl:w-1/3 relative flex flex-col my-2 group rounded-2xl`}
      >
        <button
          onClick={onClose}
          className="absolute z-20 w-16 h-auto top-4 right-4"
        >
          <Close />
        </button>

        <div className="z-20 flex flex-col items-center justify-center w-full gap-4 p-4 mt-20 text-">
          <div className="flex flex-row items-center justify-between w-full p-4 ">
            <h1 className="font-bold text-black">⭐{Book.start}</h1>
            <Heart width="20" height="20" />
          </div>

          <img src={Book.image} alt="img" className="w-full h-auto " />
          <h1 className="text-lg font-bold md:text-2xl">
            {Book.name}
          </h1>

          <p className="text-base md:text-lg">{Book.text}</p>
          <h1 className="text-base font-bold md:text-lg">
            {Book.price}
          </h1>

          <button
            className={`p-2 text-white transition duration-700 ease-out bg-blue-400  border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-800  rounded-lg`}
          >
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
}

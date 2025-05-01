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
    text: "Descubre recetas irresistibles para cada ocasión. Desde platos rápidos hasta menús gourmet, este libro transformará tu cocina en un verdadero santuario culinario.",
    image: imgN6,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-violet-200",
      baseButton: "bg-violet-400",
      border: "border-violet-500",
      baseHover: "bg-violet-600",
      borderHover: "border-violet-700",
    },
  },
  {
    id: 2,
    name: "El Corazón del Misterio",
    text: "Un thriller apasionante que te mantendrá al borde de tu asiento. Un detective debe resolver el misterio de una desaparición en la ciudad, pero la verdad es más oscura de lo que imagina.",
    image: imgN7,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-blue-200",
      baseButton: "bg-blue-400",
      border: "border-blue-500",
      baseHover: "bg-blue-600",
      borderHover: "border-blue-700",
    },
  },
  {
    id: 3,
    name: "Viaje al pasado",
    text: "Una historia épica que te lleva a los momentos cruciales de la historia humana. Viaja en el tiempo y vive las grandes civilizaciones de la antigüedad.",
    image: imgN8,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-sky-200",
      baseButton: "bg-sky-400",
      border: "border-sky-500",
      baseHover: "bg-sky-600",
      borderHover: "border-sky-700",
    },
  },
  {
    id: 4,
    name: "Cielo Estrellado",
    text: "Un relato de ciencia ficción que combina el misterio del universo con las relaciones humanas. Un astronauta perdido en el espacio descubrirá secretos que podrían cambiar el destino de la humanidad.",
    image: imgN9,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-purple-200",
      baseButton: "bg-purple-400",
      border: "border-purple-500",
      baseHover: "bg-purple-600",
      borderHover: "border-purple-700",
    },
  },
  {
    id: 5,
    name: "El arte de crear",
    text: "na guía imprescindible para artistas de todas las disciplinas. Aprende técnicas, inspira tu creatividad y descubre nuevas forma de expresión artística.",
    image: imgN10,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-teal-200",
      baseButton: "bg-teal-400",
      border: "border-teal-500",
      baseHover: "bg-teal-600",
      borderHover: "border-teal-700",
    },
  },
  {
    id: 6,
    name: "Estrategias del Éxito",
    text: "Un enfoque revolucionario sobre cómo alcanzar tus metas. Con consejos de expertos, este libro te guiará paso a paso para construir el éxito en tu vida personal y profesional.",
    image: imgN11,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-stone-200",
      baseButton: "bg-stone-400",
      border: "border-stone-500",
      baseHover: "bg-stone-600",
      borderHover: "border-stone-700",
    },
  },
  {
    id: 7,
    name: "Corazón de un Alma",
    text: "Una colección de relatos conmovedores sobre el amor, la pérdida y la redención. Perfecto para quienes disfrutan de historias que tocan el alma.",
    image: imgN12,
    price: "$14.99",
    start: "4.9",
    color: {
      base: "bg-emerald-200",
      baseButton: "bg-emerald-400",
      border: "border-emerald-500",
      baseHover: "bg-emerald-600",
      borderHover: "border-emerald-700",
    },
  },
];

export default function Modal({ isOpen, onClose, Book }) {
  if (!isOpen || !Book) return null;

  function getButtonClasses(color) {
    return `px-4 py-2 w-full text-white transition border-2 rounded-lg 
            ${color.baseButton} ${color.border} 
            hover:${color.baseHover} hover:${color.borderHover}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-black bg-black bg-opacity-60">
      <div
        className={`${Book.color.base}  p-2 m-auto overflow-hidden w-full md:w-1/2 relative flex flex-col my-2 group rounded-2xl`}
      >
        <button
          onClick={onClose}
          className="absolute z-20 w-16 h-auto top-4 right-4"
        >
          <Close />
        </button>

        <div className="z-20 grid items-center justify-center w-full grid-cols-1 gap-2 p-4 mt-20 md:grid-cols-2 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row items-center justify-between w-full ">
              <h1 className="font-bold text-black">⭐{Book.start}</h1>
              <Heart width="20" height="20" />
            </div>
            <img
              src={Book.image}
              alt="img"
              className="hidden w-full h-auto md:block"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src={Book.image}
              alt="img"
              className="w-full h-auto md:hidden"
            />
            <h1 className="text-lg font-bold md:text-2xl">{Book.name}</h1>

            <p className="text-base md:text-lg">{Book.text}</p>
            <h1 className="text-base font-bold md:text-lg">{Book.price}</h1>

            <button className={getButtonClasses(Book.color)}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

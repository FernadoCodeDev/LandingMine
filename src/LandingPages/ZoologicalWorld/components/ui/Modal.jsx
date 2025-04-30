import React from "react";
import Close from "../../assets/svg/Close";
import PantheSVG from "../../assets/svg/pantheSVG";
import ElephantSVG from "../../assets/svg/elephantSVG";
import RhinocerosSVG from "../../assets/svg/rhinocerosSVG";
import HippopotamusSVG from "../../assets/svg/hippopotamus";
import DolphinSVG from "../../assets/svg/dolphinSVG";
import WildWorld from "../../assets/img/WildWorld.webp";
import RouteoftheColossi from "../../assets/img/RouteoftheColossi.webp";
import FeedingtheLittleOnes from "../../assets/img/FeedingtheLittleOnes.webp";
import VIPGuardian from "../../assets/img/VIPGuardian.webp";
import AquaticAdventure from "../../assets/img/AquaticAdventure.webp";

export const Packages = [
  {
    id: 1,
    name: "Mundo Salvaje",
    text: "Disfruta de un recorrido por todas las áreas del zoológico y conoce más de 500 animales de distintas especies. Una experiencia perfecta para toda la familia.",
    image: WildWorld,
    svg: PantheSVG,
    color: {
      base: "bg-orange-400",
      border: "border-orange-600",
      baseHover: "bg-orange-700",
      borderHover: "border-orange-800",
    },
  },
  {
    id: 2,
    name: "La Ruta de los Colosos",
    text: "En el encuentro con los Gigantes Adéntrate en una experiencia especial donde aprenderás sobre elefantes, rinocerontes e hipopótamos. Descubre sus hábitos, alimentación y el esfuerzo de conservación para proteger a estas especies.",
    image: RouteoftheColossi,
    svg: ElephantSVG,
    color: {
      base: "bg-yellow-400",
      border: "border-yellow-600",
      baseHover: "bg-yellow-700",
      borderHover: "border-yellow-800",
    },
  },
  {
    id: 3,
    name: "Guardián VIP",
    text: "Vive la experiencia más exclusiva con acceso especial a áreas restringidas, interacción con cuidadores y una visita guiada para conocer de cerca la labor de conservación en Zoological World.",
    image: VIPGuardian,
    svg: RhinocerosSVG,
    color: {
      base: "bg-emerald-400",
      border: "border-emerald-600",
      baseHover: "bg-emerald-700",
      borderHover: "border-emerald-800",
    },
  },
  {
    id: 4,
    name: "Alimentando a los Pequeños",
    text: "Sé parte de una experiencia única en la que podrás alimentar y aprender sobre crías de animales herbívoros como jirafas, rinocerontes y más. Una actividad educativa y emocionante.",
    image: FeedingtheLittleOnes,
    svg: HippopotamusSVG,
    color: {
      base: "bg-purple-400",
      border: "border-purple-600",
      baseHover: "bg-purple-700",
      borderHover: "border-purple-800",
    },
  },
  {
    id: 5,
    name: "Aventura Acuática",
    text: "Vive una experiencia completa con acceso al zoológico y al acuario. Explora la vida terrestre y sumérgete en el asombroso mundo marino con especies exóticas e impresionantes.",
    image: AquaticAdventure,
    svg: DolphinSVG,
    color: {
      base: "bg-blue-400",
      border: "border-blue-600",
      baseHover: "bg-blue-700",
      borderHover: "border-blue-800",
    },
  },
];

export default function Modal({ isOpen, onClose, Package }) {
  if (!isOpen || !Package) return null;

  function getButtonClasses(color) {
    return `px-4 py-2 mt-4 text-white transition border-2 rounded-lg 
            ${color.base} ${color.border} 
            hover:${color.baseHover} hover:${color.borderHover}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-black bg-black bg-opacity-60">
      <div
        className="relative p-2 m-auto overflow-hidden w-80 md:w-1/2 xl:w-1/3 rounded-2xl"
        style={{
          backgroundImage: `url(${Package.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-10 bg-black/40" />

        <button
          onClick={onClose}
          className="absolute z-20 w-16 h-auto top-4 right-4"
        >
          <Close />
        </button>

        <div className="relative z-20 flex flex-col items-center justify-center w-full gap-4 p-4 mt-20 text-white">
          <h1 className="text-xl font-bold md:text-2xl">{Package.name}</h1>
          <h3 className="text-lg md:text-xl">{Package.text}</h3>

          <button className={getButtonClasses(Package.color)}>COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

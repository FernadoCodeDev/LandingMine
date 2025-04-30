import React from "react";
import { useEffect, useState } from "react";
import Close from "../../assets/svg/Close";
import imgN4 from "../../assets/img/imgN4.webp";
import Room2 from "../../assets/img/Room2.webp";
import Room3 from "../../assets/img/Room3.webp";
import Bed from "../../assets/svg/Bed";
import RoomService from "../../assets/svg/RoomService";
import Wifi from "../../assets/svg/Wifi";

import imgN5 from "../../assets/img/imgN5.webp";
import Beach from "../../assets/img/Beach.webp";
import Voley from "../../assets/img/Voley.webp";
import Pool from "../../assets/svg/pool";
import BeachSVG from "../../assets/svg/Beach";
import Volleyball from "../../assets/svg/Volleyball";

import imgN6 from "../../assets/img/imgN6.webp";
import Buffet2 from "../../assets/img/Buffet2.webp";
import Tiramisú from "../../assets/img/Tiramisú.webp";
import Menu from "../../assets/svg/menu";
import Quality from "../../assets/svg/Quality";
import Dessert from "../../assets/svg/Dessert";

import imgN7 from "../../assets/img/imgN7.webp";
import Jacuzzi from "../../assets/img/Jacuzzi.webp";
import Relaxation from "../../assets/img/Relaxation.webp";
import Sauna from "../../assets/svg/Sauna";
import JacuzziSVG from "../../assets/svg/Jacuzzi";
import RelaxationSVG from "../../assets/svg/Relaxation";

export const Services = [
  {
    id: 1,
    name: "HABITACIONES & SUITES ROYAL",
    text: "Desde acogedoras habitaciones hasta lujosas suites con Room services y Wifi, cada espacio ha sido diseñado para brindarte el máximo confort y elegancia. Descansa en camas premium y disfruta de un ambiente exclusivo. ",
    image1: imgN4,
    image2: Room2,
    image3: Room3,
    svg1: Bed,
    svg2: RoomService,
    svg3: Wifi,
    textSVG1: "Hasta 5 camas por habitación",
    textSVG2: "Room Services",
    textSVG3: "Wifi",
  },
  {
    id: 2,
    name: "PISCINAS PARA RELAJARTE & DISFRUTAR",
    text: "Sumérgete en nuestras refrescantes piscinas, en la playa o en las canchas volleyball y disfruta de un ambiente tranquilo y sofisticado. Perfecto para relajarte bajo el sol o nadar a cualquier hora del día.",
    image1: imgN5,
    image2: Beach,
    image3: Voley,
    svg1: Pool,
    svg2: BeachSVG,
    svg3: Volleyball,
    textSVG1: "Piscina",
    textSVG2: "Playa",
    textSVG3: "Cancha de volleyball ",
  },
  {
    id: 3,
    name: "DESAYUNO BUFFET CONTINENTAL",
    text: "Empieza tu día con un desayuno variado y delicioso. Disfruta de una selección de pan recién horneado, frutas frescas, café de alta calidad y mucho más en nuestro exclusivo buffet.",
    image1: imgN6,
    image2: Buffet2,
    image3: Tiramisú,
    svg1: Menu,
    svg2: Quality,
    svg3: Dessert,
    textSVG1: "Gran menú",
    textSVG2: "Calidad Royal",
    textSVG3: "Gran variedad en postres",
  },
  {
    id: 4,
    name: "SAUNA PARA TU BIENESTAR",
    text: "Déjate envolver por la calidez y el confort de nuestro sauna y jacuzzi, el lugar perfecto para relajarte y revitalizar cuerpo y mente después de un día de exploración o negocios.",
    image1: imgN7,
    image2: Jacuzzi,
    image3: Relaxation,
    svg1: Sauna,
    svg2: JacuzziSVG,
    svg3: RelaxationSVG,
    textSVG1: "Sauna",
    textSVG2: "Jacuzzi",
    textSVG3: "Relajación Royal",
  },
];

export default function Modal({ isOpen, onClose, Service }) {
  if (!isOpen || !Service) return null;

  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = [Service.image1, Service.image2, Service.image3];

  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [Service]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [bgImages]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-white bg-black bg-opacity-60">
      <div
        className="relative p-2 m-auto overflow-hidden max-w-[70rem] rounded-2xl transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${bgImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-10 bg-black/60" />
        <button
          onClick={onClose}
          className="absolute z-20 w-16 h-auto top-4 right-4"
        >
          <Close />
        </button>

        <div className="relative z-20 grid grid-cols-1 gap-4 p-4 mt-16 ">
          <div className="grid items-center grid-cols-1 gap-4 ">
            <div className="grid items-center w-full grid-cols-3 gap-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-auto">
                  {Service.svg1 && React.createElement(Service.svg1)}
                </div>
                <p className="text-base md:text-xl">{Service.textSVG1}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-auto">
                  {Service.svg2 && React.createElement(Service.svg2)}
                </div>
                <p className="text-base md:text-xl">{Service.textSVG2}</p>
              </div>

              <div className="flex flex-col items-center gap-2 ">
                <div className="w-12 h-auto">
                  {Service.svg3 && React.createElement(Service.svg3)}
                </div>
                <p className="text-base md:text-xl">{Service.textSVG3}</p>
              </div>
            </div>
          </div>

          <div className="grid items-center grid-cols-1 gap-4 ">
            <h1 className="font-serif text-xl font-bold md:text-2xl">
              {Service.name}
            </h1>
            <p className="text-base md:text-xl m-auto max-w-[40rem]">
              {Service.text}
            </p>
            <button className="w-full p-2 font-serif text-xl font-bold transition-all duration-700 ease-out bg-transparent border-2 border-white rounded-xl hover:bg-white hover:text-blue-900">
              Registarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

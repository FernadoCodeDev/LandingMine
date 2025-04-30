import React from "react";
import imgN5 from "../../assets/img/imgN5.webp";
import imgN6 from "../../assets/img/imgN6.webp";
import imgN7 from "../../assets/img/imgN7.webp";
import Close from "../../assets/svg/Close";
import SteeringWheel from "../../assets/svg/SteeringWheel";
import Engine from "../../assets/svg/Engine";
import Ray from "../../assets/svg/ray";
import CarSeat from "../../assets/svg/CarSeat";
import Battery from "../../assets/svg/Battery";
import Compass from "../../assets/svg/Compass";
import CarwithWiFi from "../../assets/svg/CarwithWi-Fi";
import AI from "../../assets/svg/AI";

export const cars = [
  {
    id: 1,
    name: "Coupe Negro",
    title: "Elegancia que Impone",
    price: "500",
    image: imgN5,
    svg1: SteeringWheel,
    text1: "Asistente de conducción inteligente",
    svg2: Engine,
    text2: "2.0L Turbo",
    svg3: Ray,
    text3: "250 HP",
    svg4: CarSeat,
    text4: "Gran comodidad",
  },
  {
    id: 2,
    name: "CHEVROLET BOLT EUV",
    title: "Tecnología al Volante",
    price: "600",
    image: imgN6,
    svg1: Battery,
    text1: "100% Eléctrico",
    svg2: Ray,
    text2: "Carga rápida (0-80% en 30 min)",
    svg3: Compass,
    text3: " Navegador integrado",
    svg4: CarwithWiFi,
    text4: "Coche con wifi autonomía y conectividad",
  },

  {
    id: 3,
    name: "Nyobolt EV",
    title: "El Futuro de la Movilidad",
    price: "1,000",
    image: imgN7,
    svg1: Battery,
    text1: "Carga completa en 6 minutos",
    svg2: Engine,
    text2: "Motor eléctrico de última generación",
    svg3: Ray,
    text3: "0-100 km/h en 2.5s",
    svg4: AI,
    text4: "Tecnología de inteligencia artificial",
  },
];

export default function Modal({ isOpen, onClose, car }) {
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-black bg-black bg-opacity-60">
      <div className="relative w-full max-w-[60rem] p-2 bg-white rounded-xl">
        <button
          onClick={onClose}
          className="absolute w-20 h-auto top-2 right-2 "
        >
          <Close />
        </button>

        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-1">
          <div className="">
            <h1 className="mb-2 text-xl font-bold md:text-2xl">{car.name}</h1>
            <h3 className="text-lg md:text-xl">{car.title}</h3>
            <p className="text-gray-400 text-start">
              <span className="font-bold text-black">${car.price}</span>/day
            </p>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-auto m-auto rounded sm:max-w-4xl"
            />
          </div>

          <div className="grid items-center justify-center grid-cols-2 gap-4 md:mt-20">
            <div className="grid items-center justify-center grid-cols-1 gap-2">
            {car.svg1 && React.createElement(car.svg1)}

              <h1 className="text-base md:text-lg">{car.text1}</h1>
            </div>
            <div className="grid items-center justify-center grid-cols-1 gap-2">
            {car.svg2 && React.createElement(car.svg2)}

              <h1 className="text-base md:text-lg">{car.text2}</h1>
            </div>

            <div className="grid items-center justify-center grid-cols-1 gap-2">
            {car.svg3 && React.createElement(car.svg3)}

              <h1 className="text-base md:text-lg">{car.text3}</h1>
            </div>

            <div className="grid items-center justify-center grid-cols-1 gap-2">
            {car.svg4 && React.createElement(car.svg4)}

              <h1 className="text-base md:text-lg">{car.text4}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

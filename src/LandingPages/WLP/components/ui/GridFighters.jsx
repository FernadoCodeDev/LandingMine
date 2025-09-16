import { useState } from "react";
import Table1 from "../../assets/img/Table1.webp";
import Table2 from "../../assets/img/Table2.webp";
import Table3 from "../../assets/img/Table3.webp";
import Table4 from "../../assets/img/Table4.webp";
import Pose1 from "../../assets/img/pose1.webp";
import Pose2 from "../../assets/img/pose2.webp";
import Pose3 from "../../assets/img/pose3.webp";
import Pose4 from "../../assets/img/pose4.webp";

const fighters = [
  {
    id: 1,
    name: "Primer Round",
    Duration: "2 semanas",
    image: Table1,
    pose: Pose1,
    info: "En este primer round te enseñaremos las bases de la lucha libre: calentamientos, ejercicios físicos y las primeras técnicas de movimiento. Ideal si nunca has entrenado antes o si quieres probar si esto es lo tuyo.",
  },
  {
    id: 2,
    name: " Modo Físico",
    Duration: "1 mes",
    image: Table2,
    pose: Pose2,
    info: "Este paquete es para quienes quieren ponerse en forma como un luchador de verdad. Aquí te concentrarás en fortalecer tu cuerpo, mejorar tu resistencia y dominar técnicas básicas. Con rutinas diseñadas para desarrollar músculo y agilidad, este es el siguiente paso para transformar tu cuerpo en una máquina de combate.",
  },
  {
    id: 3,
    name: "Movimiento Total",
    Duration: "6 semanas",
    image: Table3,
    pose: Pose3,
    info: "¿Ya tienes bases? ¡Entonces es hora de volar! En este nivel llevarás tu técnica a otro nivel: aprenderás movimientos más complejos, vuelos, caídas seguras y cómo controlar tu cuerpo como un verdadero profesional.",
  },
  {
    id: 4,
    name: "Campeón WLP",
    Duration: "2 Meses",
    image: Table4,
    pose: Pose4,
    info: "Este es el entrenamiento más completo: condición física, técnicas avanzadas, performance en el ring y entrenamiento mental. Al finalizar este programa estarás listo para competir, dar exhibiciones o simplemente saber que llevas un luchador completo dentro de ti.",
  },
];

export default function fightersGrid() {
  const [selected, setSelected] = useState(1);
  const [hovered, setHovered] = useState(null);

  const activeId = hovered || selected;
  const activeFighter = fighters.find((l) => l.id === activeId);

  return (
    <div className="max-w-[80rem] p-4 m-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Selecciona tu Luchador
      </h1>

      {/* INFORMATION BOX*/}
      {activeFighter && (
        <div className="grid grid-cols-1 gap-4 p-4 mb-8 text-white bg-gray-800 rounded-lg shadow-lg md:grid-cols-2">
          <img
            src={activeFighter.pose}
            alt={activeFighter.name}
            className="w-full h-auto invert"
          />
          <div className="grid items-center justify-center grid-cols-1 gap-4">
            <h2 className="mb-2 text-2xl font-bold">{activeFighter.name}</h2>
            <h4 className="text-xl">{activeFighter.Duration}</h4>
            <p className="text-base">{activeFighter.info}</p>
            <button className="flex justify-center w-full p-2 font-bold transition-all duration-700 ease-out rounded-xl bg-slate-700 hover:bg-slate-900 md:text-2xl ">
              Inscribirse
            </button>
          </div>
        </div>
      )}

      {/* SELECTION PANEL */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {fighters.map((fighter) => (
          <div
            key={fighter.id}
            onMouseEnter={() => setHovered(fighter.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(fighter.id)}
            className={`cursor-pointer overflow-hidden ${
              selected === fighter.id ? "" : ""
            }`}
          >
            <img
              src={fighter.image}
              alt={fighter.name}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

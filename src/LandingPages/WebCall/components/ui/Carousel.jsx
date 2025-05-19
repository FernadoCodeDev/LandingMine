import React, { useState } from "react";
import CheckSVG from "../../assets/svg/CheckSVG";

const packages = [
  {
    id: 1,
    title: "REGULAR",
    price: "$65",
    li1: "Evento de 1 día",
    li2: "5 Charlas",
    li3: "Sesión de interacción",
    li4: "Almuerzo y café",
  },
  {
    id: 2,
    title: "PREMIUN",
    price: "$95",
    li1: "Evento de 2 día",
    li2: "10 Charlas",
    li3: "Sesión de interacción",
    li4: "Almuerzo y café",
  },
  {
    id: 3,
    title: "VIP",
    price: "$150",
    li1: "Evento de 3 día",
    li2: "20 Charlas",
    li3: "Sesión de interacción",
    li4: "Almuerzo y café",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const handleRight = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  const getVisiblePackages = () => {
    const prevIndex = (currentIndex - 1 + packages.length) % packages.length;
    const nextIndex = (currentIndex + 1) % packages.length;
    return [packages[prevIndex], packages[currentIndex], packages[nextIndex]];
  };

  return (
    <div className="w-full py-6 mx-auto">
      <div className="p-4 grid grid-cols-2 m-auto items-center justify-center mb-4 max-w-[40rem]">
        <button
          onClick={handleLeft}
          className="p-2 transition-all duration-700 ease-out border border-purple-400 rounded-l-2xl hover:bg-purple-600"
        >
          <svg
            className="w-12 h-auto m-auto rotate-180"
            fill="#fff"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </button>
        <button
          onClick={handleRight}
          className="p-2 transition-all duration-700 ease-out border border-purple-400 rounded-r-2xl hover:bg-purple-600"
        >
          <svg
            className="w-12 h-auto m-auto"
            fill="#FFF"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 m-auto max-w-[80rem]">
        {getVisiblePackages().map((pkg, i) => {
          const isSelected = i === 1;
          const positionClass = isSelected
            ? "scale-100 opacity-100 z-10"
            : "scale-90 opacity-50 z-0 hidden md:block";

          return (
            <div
              key={pkg.id}
              className={`${positionClass} w-full rounded-xl bg-white flex flex-col justify-center`}
            >
              <div className="w-full px-4 py-2 border-b border-indigo-500">
                <h1 className="text-lg font-bold md:text-xl">{pkg.title}</h1>
              </div>

              <h1 className="px-4 py-2 text-3xl md:text-6xl font-fantasy">
                {pkg.price}
              </h1>

              <ul className="px-4 py-2">
                <li className="flex items-center gap-2 md:text-2xl">
                  <CheckSVG width="12" height="12" /> {pkg.li1}
                </li>
                <li className="flex items-center gap-2 md:text-2xl">
                  <CheckSVG width="12" height="12" /> {pkg.li2}
                </li>
                <li className="flex items-center gap-2 md:text-2xl">
                  <CheckSVG width="12" height="12" /> {pkg.li3}
                </li>
                <li className="flex items-center gap-2 md:text-2xl">
                  <CheckSVG width="12" height="12" /> {pkg.li4}
                </li>
              </ul>

              <button
                className={`transition-all duration-700 ease-out w-full p-2 mt-2 font-semibold text-white bg-purple-400 ${
                  isSelected
                    ? "hover:bg-purple-600 cursor-pointer"
                    : "cursor-default"
                }`}
              >
                Comprar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

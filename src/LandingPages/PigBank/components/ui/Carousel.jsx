import React, { useState } from "react";
import CardGreen from "../../assets/img/CardGreen.webp";
import CardPink from "../../assets/img/CardPink.webp";
import CardBlack from "../../assets/img/CardBlack.webp";

const packages = [
  {
    id: 1,
    title: "Pig Start",
    image: CardGreen,
  },
  {
    id: 2,
    title: "Pig Clásica",
    image: CardPink,
  },
  {
    id: 3,
    title: "Pig Pro",
    image: CardBlack,
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
          className="p-2 transition-all duration-700 ease-out border border-red-400 rounded-l-2xl hover:bg-red-600"
        >
          <svg
            className="w-12 h-auto m-auto rotate-180"
            fill="currentColor"
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
          className="p-2 transition-all duration-700 ease-out border border-red-400 rounded-r-2xl hover:bg-red-600"
        >
          <svg
            className="w-12 h-auto m-auto"
            fill="currentColor"
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
      <div className="flex items-center justify-center gap-4">
        {getVisiblePackages().map((pkg, i) => {
          let positionClass = "";

          if (i === 1) {
         
            positionClass = "scale-100 opacity-100 z-10";
          } else {
    
            positionClass = "scale-90 opacity-50 z-0 hidden md:block";
          }

          return (
            <div
              key={pkg.id}
              className={`${positionClass} rounded-2xl bg-white p-4 shadow text-center w-full`}
            >
              <h1 className="text-lg font-bold text-black md:text-xl">
                {pkg.title}
              </h1>
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-auto py-8 mx-auto"
              />
              <button
                className={`transition-all duration-700 ease-out w-full font-semibold text-lg lg:text-xl p-2 text-black bg-red-400 rounded-2xl
                  ${
                    i === 1
                      ? "hover:bg-red-600 cursor-pointer"
                      : "cursor-default"
                  }`}
                disabled={i !== 1}
              >
                MÁS INFORMACIÓN
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

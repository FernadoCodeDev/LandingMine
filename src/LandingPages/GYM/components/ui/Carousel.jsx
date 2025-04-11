import React, { useState } from "react";
import ImageTime1 from "../../assets/img/ImgTime1.webp";
import ImageTime2 from "../../assets/img/ImgTime2.webp";
import ImageTime3 from "../../assets/img/ImgTime3.webp";

const packages = [
  {
    id: 1,
    title: "FLEXIBLE",
    price: "$120",
    image: ImageTime1,
    details: [
      "12 Clases por mes",
      "3 Clases por semana",
      "Sin tarifas de inscripción",
    ],
  },
  {
    id: 2,
    title: "TODO ACCESO",
    price: "$260",
    image: ImageTime2,
    details: [
      "Clases ilimitadas por mes",
      "3 Clases por día",
      "Sin tarifas de inscripción",
    ],
  },
  {
    id: 3,
    title: "FUERA DEL CONFORT",
    price: "$160",
    image: ImageTime3,
    details: [
      "20 clases por mes",
      "5 Clases por semana",
      "Sin tarifas de inscripción",
    ],
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const handleRight = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  return (
    <div className="w-full max-w-6xl py-6 mx-auto">
      <div className="p-4 grid grid-cols-2 m-auto items-center justify-center mb-4 max-w-[40rem]">
        <button
          onClick={handleLeft}
          className="p-2 transition-all duration-700 ease-out border border-yellow-400 rounded-l-2xl hover:bg-yellow-400"
        >
          <svg
            class="w-12 h-auto rotate-180 m-auto "
            data-slot="icon"
            aria-hidden="true"
            fill="#fffbeb"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          onClick={handleRight}
          className="p-2 transition-all duration-700 ease-out border border-yellow-400 rounded-r-2xl hover:bg-yellow-400"
        >
          <svg
            class="w-12 h-auto m-auto"
            data-slot="icon"
            aria-hidden="true"
            fill="#fffbeb"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-3">
        {packages.map((pkg, i) => {
          const position =
            i === currentIndex
              ? "center"
              : i === (currentIndex - 1 + packages.length) % packages.length
              ? "left"
              : i === (currentIndex + 1) % packages.length
              ? "right"
              : "hidden";

          if (position === "hidden") return null;

          return (
            <div
              key={pkg.id}
              className={`transition-all duration-700 ease-in-out ${
                position === "center"
                  ? "opacity-100 scale-100"
                  : "opacity-20 scale-90 hidden md:block "
              } bg-white p-4 rounded shadow text-center`}
            >
              <h1 className="text-lg font-bold md:text-xl">{pkg.title}</h1>
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-40 h-auto p-2 mx-auto"
              />
              <h2 className="text-lg font-bold md:text-xl">{pkg.price}</h2>
              <div className="my-2">
                {pkg.details.map((d, idx) => (
                  <p key={idx} className="text-center">
                    {d}
                  </p>
                ))}
              </div>
              <button
                className={`transition-all duration-700 ease-out w-full font-semibold text-lg lg:text-xl p-2 text-black bg-yellow-300 rounded-tl-full rounded-br-full
                    ${
                      position === "center"
                        ? "hover:bg-yellow-500 cursor-pointer"
                        : "cursor-default"

                      /* Prevents hovering on unselected items. Since only one should be 
                      selected, it is checked if it is selected and if so, add the hover, 
                      otherwise add cursor-default */
                    }
                    `}
                disabled={position !== "center"}
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

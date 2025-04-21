import React, { useState } from "react";
import imgN3 from "../../assets/img/imgN3.webp";
import imgN4 from "../../assets/img/imgN4.webp";
import Tomato from "../../assets/img/Tomato.webp";
import Eggplant from "../../assets/img/Eggplant.webp";
import Pumpkin from "../../assets/img/Pumpkin.webp";
import BlackberriesgN4 from "../../assets/img/Blackberries.webp";

const packages = [
  {
    id: 1,
    title: "Cerezas Dulces y Jugosas",
    text: "Disfruta de la frescura y dulzura de nuestras cerezas 100% orgánicas. Cultivadas con esmero, son una fuente natural de antioxidantes, perfectas para cuidar tu salud y deleitar tu paladar.",
    img: imgN3,
  },
  {
    id: 2,
    title: "Aguacates Cremosos y Nutritivos",
    text: "Fuente de grasas saludables, vitaminas y minerales, nuestros aguacates son el complemento perfecto para cualquier comida. Cultivados con respeto por la tierra, garantizan frescura y calidad en cada bocado.",
    img: imgN4,
  },
  {
    id: 3,
    title: "Tomates Frescos y Sabrosos",
    text: "Disfruta de la frescura y el sabor natural de nuestros tomates 100% orgánicos. Cultivados de manera responsable, son perfectos para añadir a tus ensaladas, salsas y platos favoritos, llenos de vitaminas y antioxidantes.",
    img: Tomato,
  },
  {
    id: 4,
    title: "Berenjenas Tiernas y Deliciosas",
    text: "Nuestras berenjenas orgánicas son suaves, sabrosas y ricas en fibra. Ideales para cocinar de diversas formas, aportan un toque único a tus platillos, siempre respetando la naturaleza y el sabor auténtico.",
    img: Eggplant,
  },
  {
    id: 5,
    title: "Calabazas Nutritivas y Versátiles",
    text: "Las calabazas orgánicas que ofrecemos son una excelente fuente de vitaminas y minerales. Frescas y sabrosas, perfectas para guisos, sopas y ensaladas, garantizando un sabor único y nutritivo en cada bocado.",
    img: Pumpkin,
  },
  {
    id: 6,
    title: "Moras Frescas y Ricas en Antioxidantes",
    text: "Nuestras moras orgánicas son pequeñas pero poderosas, cargadas de antioxidantes que benefician tu salud. Perfectas para disfrutar solas, en batidos o como complemento en tus postres favoritos, siempre frescas y deliciosas.",
    img: BlackberriesgN4,
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
    return [packages[prevIndex], packages[currentIndex]];
  };

  return (
    <div className="w-full py-6 mx-auto">
      <div className="p-4 grid grid-cols-2 m-auto items-center justify-center mb-4 max-w-[40rem]">
        <button
          onClick={handleLeft}
          className="p-2 transition-all duration-700 ease-out border border-yellow-400 rounded-l-2xl hover:bg-yellow-400"
        >
          <svg
            className="w-12 h-auto m-auto rotate-180"
            fill="currentcolor"
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
          className="p-2 transition-all duration-700 ease-out border border-yellow-400 rounded-r-2xl hover:bg-yellow-400"
        >
          <svg
            className="w-12 h-auto m-auto "
            fill="currentcolor"
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

      <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-2 ">
        {getVisiblePackages().map((pkg, i) => {
          const isSelected = i === 1;
          const positionClass = isSelected ? "" : " hidden md:block";

          return (
            <div key={pkg.id} className={`${positionClass} relative`}>
              <img
                src={pkg.img}
                alt="imgN3"
                className="w-full h-auto rounded-xl"
              />

              <div className="absolute inset-0 z-10 flex flex-col items-start justify-end gap-4 p-4 m-auto text-white text-start">
                <h1 className="text-2xl md:text-4xl max-w-[30rem]  font-bold">
                  {pkg.title}
                </h1>

                <p className="max-w-[30rem]">{pkg.text}</p>

                <button className="flex items-center justify-center w-full p-2 text-xl font-bold text-black transition-all duration-700 ease-out bg-yellow-300 rounded-full md:w-1/2 hover:bg-yellow-500">
                  Ver más{" "}
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

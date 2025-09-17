import React from "react";
import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { Services } from "../ui/Modal";

function ServicesCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedService, setSelectedService] = useState(null);

  const handleClick = (Service) => {
    setSelectedService(Service);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2">
      {Services.map((Service) => (
        <div
          key={Service.id}
          className="flex flex-col items-center w-full gap-2 p-4 bg-beige-200 rounded-xl dark:bg-zinc-950"
          onClick={() => handleClick(Service)}
        >
          <img
            src={Service.image1}
            alt="image"
            className="w-full h-auto rounded-xl"
          />

          <div className="flex flex-col w-full gap-2 ">
            <h1 className="font-serif font-bold text-start">{Service.name}</h1>
            <div className="grid items-start w-full grid-cols-3 gap-2">
              <div className="flex flex-col items-center justify-start gap-2 text-center ">
                <div className="object-contain w-12 h-12">
                  {Service.svg1 && React.createElement(Service.svg1)}
                </div>
                <p className="text-base md:text-lg">{Service.textSVG1}</p>
              </div>
              <div className="flex flex-col items-center justify-start gap-2 text-center">
                <div className="object-contain w-12 h-12">
                  {Service.svg2 && React.createElement(Service.svg2)}
                </div>
                <p className="text-base md:text-lg">{Service.textSVG2}</p>
              </div>

              <div className="flex flex-col items-center justify-start gap-2 text-center">
                <div className="object-contain w-12 h-12">
                  {Service.svg3 && React.createElement(Service.svg3)}
                </div>
                <p className="text-base md:text-lg">{Service.textSVG3}</p>
              </div>
            </div>
            <button className="w-full p-2 font-serif text-xl font-bold text-blue-900 transition-all duration-700 ease-out bg-transparent border-2 border-blue-900 md:w-1/3 dark:text-beige-100 hover:dark:dark:text-blue-900 rounded-xl hover:bg-blue-900 hover:text-beige-100 dark:border-beige-100 dark:hover:bg-beige-100 ">
              Ver más
            </button>
          </div>
        </div>
      ))}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        Service={SelectedService}
      />
    </div>
  );
}

export default ServicesCard;

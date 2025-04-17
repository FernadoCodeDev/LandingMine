import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { cars } from "../ui/Modal";

function carCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedCar, setSelectedCar] = useState(null);

  const handleClick = (car) => {
    setSelectedCar(car);
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
    <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-3 md:col-span-2">
      {cars.map((car) => (
        <div
          key={car.id}
          onClick={() => handleClick(car)}
          className="flex flex-col items-start justify-center gap-4 p-4 pb-8 bg-white dark:bg-neutral-800 rounded-xl"
        >
          <div>
            <h1 className="font-bold text-start">{car.name}</h1>
            <p className="text-gray-400 text-start">
              <span className="font-bold text-black dark:text-white">${car.price}</span>/day
            </p>
          </div>
          <img src={car.image} alt={car.name} className="w-full h-auto" />
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        car={SelectedCar}
      />
    </div>
  );
}

export default carCard;

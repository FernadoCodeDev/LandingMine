import { useState } from "react";
import Modal from "../ui/Modal";
import { pizzas } from "../ui/Modal";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedPizza, setSelectedPizza] = useState(null);

  const handleClick = (pizza) => {
    setSelectedPizza(pizza);
    setIsOpen(true);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-2 md:grid-cols-3 xl:grid-cols-4">
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          onClick={() => handleClick(pizza)}
          className="flex flex-col h-full transition duration-300 bg-white cursor-pointer dark:bg-neutral-800 hover:shadow-xl"
        >
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-auto bg-yellow-100 dark:bg-neutral-700"
          />

          <div className="flex flex-col gap-4 px-2 py-4">
            <h2 className="text-2xl font-bold text-center">{pizza.name}</h2>

            <div className="p-2 rounded-2xl bg-slate-300 dark:bg-neutral-600">
              <h2 className="text-xl font-bold text-center text-neutral-600 dark:text-slate-300">
                ${pizza.price}
              </h2>
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pizza={SelectedPizza}
      />
    </div>
  );
}

export default Menu;

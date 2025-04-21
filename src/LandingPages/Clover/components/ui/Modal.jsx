import { useEffect, useState } from "react";
import Close from "../../assets/svg/Close";
import EnergySavingSimulator from "./EnergySavingSimulator";

const FormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="flex justify-center w-full p-2 font-bold text-white transition-all duration-700 ease-out rounded-xl bg-lime-500 hover:bg-lime-600"
      >
        ¡Da el primer paso hacia la energía solar
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center text-black bg-black bg-opacity-30">
          <div className=" flex flex-col items-center justify-center gap-4 relative w-full max-w-[60rem] p-6 bg-white rounded-2xl shadow-2xl">
            <button
              onClick={toggleModal}
              className="absolute w-20 h-auto top-2 right-4"
            >
              <Close />
            </button>

            <div className="flex flex-col items-center justify-center w-full gap-4 mt-12">
              <EnergySavingSimulator />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;

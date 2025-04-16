import { useState } from "react";

export const textButton = [
  {
    id: 1,
    text: "Residencias",
  },
  {
    id: 2,
    text: "Departamentos",
  },
  {
    id: 3,
    text: "Edificios",
  },
  {
    id: 4,
    text: "Comercios",
  },
];

const Paginator = ({ pages }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div id="Paginator" className="flex flex-col gap-4">
      <nav className="w-full grid grid-cols-1 gap-4 md:grid-cols-4 max-w-[80rem]">
        {textButton.map((item) => (
          <button
            key={item.id}
            className={
              `w-full p-2 font-bold transition-all duration-700 ease-out hover:bg-slate-300 ` +
              (currentStep === item.id
                ? "text-white bg-blue-400"
                : "text-black bg-slate-100")
            }
            type="button"
            onClick={() => setCurrentStep(item.id)}
          >
            {item.text}
          </button>
        ))}
      </nav>

      <div>
        {pages.map((PageComponent, index) => (
          <div
            key={index}
            className={currentStep === index + 1 ? "block" : "hidden"}
          >
            <PageComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paginator;

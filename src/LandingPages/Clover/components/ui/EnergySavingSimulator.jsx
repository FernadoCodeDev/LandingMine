import React, { useState } from "react";

const SavingsSimulator = () => {
  const [CostOfElectricity, setCostOfElectricity] = useState("");
  const [Result, setResult] = useState(null);

  const calculateSavings = () => {
    const cost = parseFloat(CostOfElectricity);
    if (!isNaN(cost)) {
      const saving = cost * 0.6; // 40% de saving
      setResult(saving.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div className="w-full p-6 mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="mb-4 text-2xl font-bold text-center text-lime-700">
        ¿Cuanto ahorrarás con los paneles de Clover?
      </h2>

      <label className="block mb-2 font-medium text-black">
        ¿Cuánto pagas de luz mensualmente?
      </label>
      <input
        type="number"
        placeholder="Coloca una cantidad"
        value={CostOfElectricity}
        onChange={(e) => setCostOfElectricity(e.target.value)}
        className="w-full p-2 mb-4 border rounded border-lime-300 focus:outline-none focus:ring focus:ring-lime-300"
      />

      <button
        onClick={calculateSavings}
        className="w-full px-4 py-2 font-semibold text-white transition duration-300 rounded-lg bg-lime-500 hover:bg-lime-600"
      >
        Calcular ahorro
      </button>

      {Result && (
        <div className="p-4 mt-6 font-semibold text-center rounded text-lime-700 bg-lime-100">
          Con los paneles de Clover pagarías aproximadamente <br />
          <span className="text-2xl">${Result} USD</span> al mes.
        </div>
      )}
    </div>
  );
};

export default SavingsSimulator;

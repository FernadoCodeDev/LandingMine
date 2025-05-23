import { useEffect } from "react";
import Close from "../../assets/svg/Close";
import InternationalPayment from "../../assets/svg/InternationalPayment";
import Security from "../../assets/svg/Security";
import Cashback from "../../assets/svg/Cashback";
import Profitability from "../../assets/svg/Profitability";

const Modal = ({ data, onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center text-black bg-black bg-opacity-30">
      <div className="flex flex-col items-center justify-center gap-4 relative w-full max-w-[60rem] p-6 bg-white rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute w-20 h-auto top-2 right-4"
        >
          <Close />
        </button>

        <div className="grid items-center justify-center grid-cols-1 gap-4 mt-12 md:grid-cols-2">
          <div className="grid items-center justify-center grid-cols-1 gap-4">
            <h1 className="text-2xl font-bold md:text-4xl ">{data.title}</h1>
            <img
              src={data.image}
              alt={data.title}
              className="w-full m-auto rounded"
            />
            <p className="text-base md:text-xl">{data.text}</p>
          </div>

          <div className="grid items-center justify-center grid-cols-2 gap-2">
            <div className="grid items-center justify-center grid-cols-1 gap-2">
              <h1 className="text-base font-bold text-red-400 md:text-xl">Pago Internacional</h1>
              
              <InternationalPayment width="32" height="32" className="m-auto"/>
            </div>

            <div className="grid items-center justify-center grid-cols-1 gap-2">
              <h1 className="text-base font-bold text-red-400 md:text-xl">Seguridad Avanzada</h1>
            
              <Security width="32" height="32" className="m-auto"/>
            </div>

            <div className="grid items-center justify-center grid-cols-1 gap-2">
              <h1 className="text-base font-bold text-red-400 md:text-xl">Cashback del {data.Cashback}</h1>
           
              <Cashback width="32" height="32" className="m-auto"/>
            </div>

            <div className="grid items-center justify-center grid-cols-1 gap-2">
              <h1 className="text-base font-bold text-red-400 md:text-xl">Rentabilidad del {data.Profitability}</h1>
        
              <Profitability width="32" height="32" className="m-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

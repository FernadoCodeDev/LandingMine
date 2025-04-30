import React from "react";
import imageN4 from "../../assets/img/imageN4.webp";
import imageN5 from "../../assets/img/imageN5.webp";
import imageN6 from "../../assets/img/imageN6.webp";
import imageN7 from "../../assets/img/imageN7.webp";

const ThirdSection = () => {
  return (
      <div className="relative flex flex-col items-center justify-center w-full h-auto gap-4 p-4 text-black border-gray-300 dark:text-white min-h-auto bg-yellow-50 dark:bg-neutral-800">
        <div className="p-2 mx-auto text-center border-2 border-black rounded-full dark:border-white md:w-1/6">
          <h1>Nuestro paquete</h1>
        </div>

        <h1 className="font-serif text-2xl md:text-4xl text-center  max-w-[70rem]">
          Explora nuestros exquisitos paquetes de viaje
        </h1>

        <p className="text-center max-w-[50rem] text-base md:text-2xl ">
          Seleccionamos una colección de paquetes de viajes excepcionales que
          están diseñados para satisfacer los diversos intereses y preferencias
          de nuestros exigentes clientes.
        </p>

        <div className="grid justify-center grid-cols-1 gap-4 p-2 m-auto md:grid-cols-2 max-w-[80rem]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={imageN4}
              alt="imageN4"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative z-10 flex flex-col h-full p-4 m-auto text-white">
              <h1 className="pb-2 font-serif text-3xl text-black">
                Escapadas culturales
              </h1>
              <p className="pb-2">
                Sumérgete en el rico tapiz de culturas. los paquetes culturales
                te llevan al corazón de ciudades vibrantes, monumentos antiguos
                y experiencias locales auténticas
              </p>
              <button className="p-2 transition-all duration-700 ease-out border-2 border-white rounded-full md:w-1/2 hover:bg-white hover:text-black">
                Elija el paquete
              </button>{" "}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={imageN5}
              alt="imageN5"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative z-10 flex flex-col p-4 m-auto text-white">
              <h1 className="pb-2 font-serif text-3xl">Viajes de aventura</h1>
              <p className="pb-2">
                Para los amantes de la adrenalina, nuestros paquetes de aventura
                ofrecen actividades emocionantes como senderismo, trekking,
                deportes acuáticos y encuentros con la vida silvestre
              </p>
              <button className="p-2 transition-all duration-700 ease-out border-2 border-white rounded-full md:w-1/2 hover:bg-white hover:text-black">
                Elija el paquete
              </button>{" "}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={imageN6}
              alt="imageN6"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative z-10 flex flex-col h-full  max-w-[30rem] p-4 text-white">
              <h1 className="pb-2 font-serif text-3xl">
                Retiros de relajación
              </h1>
              <p className="pb-2">
                Disfrute de lujosos tratamientos de spa, descanse en playas
                prístinas y descanse en entornos tranquilos. La escapada
                perfecta implica serenidad y relajación
              </p>
              <button className="p-2 transition-all duration-700 ease-out border-2 border-white rounded-full md:w-1/2 hover:bg-white hover:text-black">
                Elija el paquete
              </button>{" "}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={imageN7}
              alt="imageN7"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative z-10 flex flex-col h-full max-w-[30rem] p-4 text-white">
              <h1 className="pb-2 font-serif text-3xl text-black">
                Experiencia de vida salvaje
              </h1>
              <p className="pb-2">
                Nuestro paquete de experiencias con la vida silvestre está
                diseñado para que puedas conocer cara a cara las maravillas del
                reino animal mientras preservas la integridad de sus entornos
              </p>
              <button className="p-2 transition-all duration-700 ease-out border-2 border-white rounded-full md:w-1/2 hover:bg-white hover:text-black">
                Elija el paquete
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ThirdSection;

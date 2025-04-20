import React from "react";
import Map from "../../assets/img/Map.webp";
import InteriorCabin from "../../assets/img/InteriorCabin.webp";
import Store from "../../assets/img/Store.webp";
import Bathroom from "../../assets/img/Bathroom.webp";
import Smore from "../../assets/img/Smore.webp";
import Camping from "../../assets/img/Camping.webp";

export default function InteractiveMap() {
  return (
    <div className="w-full m-auto text-center max-w-[80rem]">
      <h1 className="mb-5 text-2xl font-bold uppercase md:text-4xl">
        Explora el mapa y descubre todo lo que te espera en Camping Night
      </h1>

      <div className="relative w-full ">
        <img
          src={Map}
          alt="Map"
          className="relative w-full p-0 m-0 rounded-3xl"
        />

        {/* Interactive points */}
        <MapPoint
          top="45%"
          left="35%"
          title="¿Olvidaste algo? ¡No te preocupes!"
          desc="Dentro de la cabaña encontrarás nuestra pequeña tienda con todo lo esencial para acampar: linternas, snacks, carbón, repelente y mucho más. Todo lo necesario para que no te falte nada durante tu estadía."
          img={Store}
        />


        <MapPoint
          top="70%"
          left="35%"
          title="¡Bienvenido a Camping Night!"
          desc="Tu aventura comienza aquí, en nuestra acogedora recepción dentro de la cabaña principal. Tal como en un hotel, te registramos para asegurarnos de que tu estadía sea segura, organizada y 100% placentera. ¡Este es tu primer paso hacia una experiencia inolvidable!"
          img={InteriorCabin}
        />


        <MapPoint
          top="70%"
          left="17%"
          title="Comodidad y limpieza, siempre cerca"
          desc="Nuestros baños están dentro de la cabaña principal, mantenidos con altos estándares de higiene. Sabemos lo importante que es sentirse cómodo en medio de la naturaleza, por eso te ofrecemos instalaciones limpias y bien cuidadas."
          img={Bathroom}
        />

        <MapPoint
          top="86%"
          left="44%"
          title="La magia comienza al caer el sol"
          desc="En esta área encontrarás mesas, parrillas y espacio para cocinar lo que más te guste. Cada noche encendemos una gran fogata central para compartir historias, reír juntos... ¡y preparar los clásicos s’mores al calor de las brasas!"
          img={Smore}
        />

        <MapPoint
          top="45%"
          left="58%"
          title="Tu tienda, tu espacio, tu aventura"
          desc="Explora nuestras amplias zonas verdes para acampar. Aquí puedes instalar tu tienda en un entorno tranquilo, rodeado de naturaleza, ideal para desconectar y disfrutar de una noche estrellada como ninguna otra."
          img={Camping}
        />
      </div>
    </div>
  );
}

function MapPoint({ top, left, title, desc, img }) {
  return (
    <button
      className="absolute w-8 h-8 transition-all duration-700 ease-in-out border-4 rounded-full group bg-beige-800/85 border-beige-950 opacity-80 hover:z-10 focus:z-10 focus:rounded-2xl focus:opacity-100 md:w-10 md:h-10 focus:w-60 focus:h-auto md:focus:w-96 md:focus:h-auto"
      style={{ top, left, transform: "translate(-50%, -50%)" }}
    >
      <div className="flex-col items-center justify-center hidden w-full h-full gap-2 p-2 text-center text-white transition-opacity duration-700 group-focus:block">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-base">{desc}</p>
        <img src={img} alt={title} className="w-full h-auto" />
      </div>
    </button>
  );
}

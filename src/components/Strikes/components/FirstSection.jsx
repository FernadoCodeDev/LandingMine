import React from "react";

const FirstSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-black bg-white border-t-2 border-orange-500 md:text-2xl dark:border-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="m-auto max-w-[90rem] p-4 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center gap-4 p-4">
          <h1 className="font-bold text-center text-orange-500">
            Pistas de última generación
          </h1>
          <p className="text-center">
            Nuestra tecnología de boliche garantiza tiros precisos y una
            experiencia fluida, perfecta para principiantes y expertos.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 bg-orange-200 dark:bg-slate-900">
          <h1 className="font-bold text-center text-orange-500">
            Más que boliche, una experiencia completa
          </h1>
          <p className="text-center">
            Disfruta de deliciosas pizzas, papas con queso y carne, y bebidas
            refrescantes mientras juegas. ¡Porque la diversión sabe mejor con
            buen sabor!
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4">
          <h1 className="font-bold text-center text-orange-500">Diversión para todos</h1>
          <p className="text-center">
            Desde reuniones familiares hasta salidas con amigos, en Strike’s
            siempre hay espacio para compartir risas y grandes momentos.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 bg-orange-200 dark:bg-slate-900">
          <h1 className="font-bold text-center text-orange-500">
            Iluminación y efectos especiales
          </h1>
          <p className="text-center">
            Luces vibrantes, pantallas dinámicas y efectos especiales que
            transforman cada partida en un espectáculo.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 ">
          <h1 className="font-bold text-center text-orange-500">
            Modo juego para todos los niveles
          </h1>
          <p className="text-center">
            ¿Eres novato o todo un pro? Ajustamos las pistas y configuraciones
            para que todos disfruten al máximo sin importar su nivel de
            habilidad.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 bg-orange-200 dark:bg-slate-900">
          <h1 className="font-bold text-center text-orange-500">
            Celebraciones inolvidables
          </h1>
          <p className="text-center">
            Cumpleaños, reuniones de empresa o simplemente un día especial. En
            Strike’s, cada visita puede convertirse en una gran celebración.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

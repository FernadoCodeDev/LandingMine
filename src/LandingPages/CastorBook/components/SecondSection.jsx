import React from "react";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-white lg:text-2xl dark:text-white dark:bg-neutral-900">
      <h1 className="text-2xl font-bold text-center text-orange-500 md:text-4xl">
        Encuentra el libro perfecto para ti
      </h1>
      <p className="text-xl text-center md:text-2xl max-w-[50rem]">
        En <span className="text-orange-500">Castor Book</span> , tenemos algo
        para todos. Desde novelas apasionantes y bestsellers hasta libros de
        ciencia, arte y desarrollo personal. No importa qué género te guste,
        aquí encontrarás tu próxima gran lectura.
      </p>

      {/* Content less than lg */}
      {/* On mobile devices, it wouldn't be possible to hover over the divs because you'd have to hold it down. */}
      <div className="grid items-center w-full grid-cols-1 gap-4 m-auto mt-12 md:grid-cols-2 lg:hidden ">
        <div className="p-2 border-4 bg-lime-800 border-lime-950 rounded-xl">
          <div className="bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white ">ECONOMÍA</h1>

            <p className="text-base text-white ">
              En Castor Book puedes encontrar los mejores libros de economía,
              desde fundamentos financieros hasta estrategias de inversión.
              ¡Aprende y crece con nosotros!
            </p>
          </div>
        </div>

        <div className="p-2 bg-blue-700 border-4 border-blue-950 rounded-xl">
          <div className="bottom-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tl-3xl text-start">
            <h1 className="col-span-2 text-xl font-bold text-white">
              FANTASÍA
            </h1>

            <h1 className="col-span-2 text-base text-white ">
              En Castor Book la magia cobra vida. Encuentra historias épicas,
              mundos encantados y aventuras inolvidables en nuestros libros de
              fantasía.
            </h1>
          </div>
        </div>

        <div className="p-2 bg-blue-600 border-4 border-blue-900 ">
          <div className="bottom-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tl-3xl text-start">
            <h1 className="text-xl font-bold text-white ">CIENCIA</h1>
            <p className="text-base text-white ">
              En Castor Book Explora los secretos del universo con nuestra
              selección de libros de ciencia. Desde física cuántica hasta
              biología, el conocimiento está a tu alcance.
            </p>
          </div>
        </div>

        <div className="p-2 border-4 bg-rose-600 border-rose-900 ">
          <div className="bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white">Romance</h1>
            <p className="text-base text-white">
              En Castor Book Sumérgete en historias de amor inolvidables. Desde
              pasiones prohibidas hasta finales felices, vive cada emoción con
              nuestra colección de romance.
            </p>
          </div>
        </div>

        <div className="p-2 bg-yellow-400 border-4 border-yellow-700 ">
          <div className="bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white">
              SUPERACIÓN PERSONAL
            </h1>
            <p className="text-base text-white">
              En Castor Book puedes encontrar los mejores libros de economía,
              desde fundamentos financieros hasta estrategias de inversión.
              ¡Aprende y crece con nosotros!
            </p>
          </div>
        </div>

        <div className="p-2 bg-gray-700 border-4 border-neutral-9500 ">
          <div className="bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white">Muchas más +</h1>
            <p className="text-base text-white">
              Castor Book cuenta con gran variadad de libros
            </p>
          </div>
        </div>
      </div>

      {/* Content Greater than lg*/}
      <div className="mt-8 bg-beige-400 border-4 border-beige-600 hidden lg:flex p-2 max-w-[90rem] w-full h-auto">
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-lime-800 border-4 border-lime-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">E</span>
            <span className="font-bold">C</span>
            <span className="font-bold">O</span>
            <span className="font-bold">N</span>
            <span className="font-bold">O</span>
            <span className="font-bold">M</span>
            <span className="font-bold">Í</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-lime-800 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> puedes encontrar
              los mejores libros de economía, desde fundamentos financieros
              hasta estrategias de inversión. ¡Aprende y crece con nosotros!
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-blue-700  border-4 border-blue-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">F</span>
            <span className="font-bold">A</span>
            <span className="font-bold">N</span>
            <span className="font-bold">T</span>
            <span className="font-bold">A</span>
            <span className="font-bold">S</span>
            <span className="font-bold">Í</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out bg-blue-700 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> la magia cobra
              vida. Encuentra historias épicas, mundos encantados y aventuras
              inolvidables en nuestros libros de fantasía.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-blue-600 border-4 border-blue-900 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">C</span>
            <span className="font-bold">I</span>
            <span className="font-bold">E</span>
            <span className="font-bold">N</span>
            <span className="font-bold">C</span>
            <span className="font-bold">I</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out bg-blue-600 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Explora los
              secretos del universo con nuestra selección de libros de ciencia.
              Desde física cuántica hasta biología, el conocimiento está a tu
              alcance.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-rose-600 border-4 border-rose-900 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
            <span className="font-bold">M</span>
            <span className="font-bold">A</span>
            <span className="font-bold">N</span>
            <span className="font-bold">C</span>
            <span className="font-bold">E</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-rose-600 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Sumérgete en
              historias de amor inolvidables. Desde pasiones prohibidas hasta
              finales felices, vive cada emoción con nuestra colección de
              romance.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-yellow-400 border-4 border-yellow-700 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="grid items-center justify-center w-full grid-cols-2 text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <div className="flex flex-col">
              <span className="font-bold">S</span>
              <span className="font-bold">U</span>
              <span className="font-bold">P</span>
              <span className="font-bold">E</span>
              <span className="font-bold">R</span>
              <span className="font-bold">A</span>
              <span className="font-bold">C</span>
              <span className="font-bold">I</span>
              <span className="font-bold">Ó</span>
              <span className="font-bold">N</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">P</span>
              <span className="font-bold">E</span>
              <span className="font-bold">R</span>
              <span className="font-bold">S</span>
              <span className="font-bold">O</span>
              <span className="font-bold">N</span>
              <span className="font-bold">A</span>
              <span className="font-bold">L</span>
            </div>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out bg-yellow-400 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> puedes encontrar
              los mejores libros de economía, desde fundamentos financieros
              hasta estrategias de inversión. ¡Aprende y crece con nosotros!
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-gray-700 border-4 border-gray-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">M</span>
            <span className="font-bold">I</span>
            <span className="font-bold">S</span>
            <span className="font-bold">T</span>
            <span className="font-bold">E</span>
            <span className="font-bold">R</span>
            <span className="font-bold">I</span>
            <span className="font-bold">O</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out bg-gray-700 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Sumérgete en
              historias llenas de giros inesperados y enigmas por resolver.
              ¿Podrás descubrir la verdad antes del final?
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-amber-500 border-4 border-amber-800 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">H</span>
            <span className="font-bold">I</span>
            <span className="font-bold">S</span>
            <span className="font-bold">T</span>
            <span className="font-bold">O</span>
            <span className="font-bold">R</span>
            <span className="font-bold">I</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-amber-500 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Viaja en el
              tiempo y descubre los eventos que moldearon el mundo. Desde
              civilizaciones antiguas hasta relatos de guerra, la historia te
              espera.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-pink-700 border-4 border-pink-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">D</span>
            <span className="font-bold">R</span>
            <span className="font-bold">A</span>
            <span className="font-bold">M</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out bg-pink-700 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Vive intensas
              emociones con nuestras historias llenas de pasión, conflictos y
              personajes inolvidables. Sumérgete en el arte del drama.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-cyan-700 border-4 border-cyan-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">F</span>
            <span className="font-bold">I</span>
            <span className="font-bold">C</span>
            <span className="font-bold">C</span>
            <span className="font-bold">I</span>
            <span className="font-bold">Ó</span>
            <span className="font-bold">N</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-cyan-700 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Explora galaxias
              lejanas, futuros distópicos y tecnología avanzada. La imaginación
              no tiene límites en nuestra colección de ciencia ficción.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-beige-400 border-4 border-beige-600 hidden lg:flex p-2 max-w-[90rem] w-full h-auto">
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-beige-700 border-4 border-stone-700 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">C</span>
            <span className="font-bold">O</span>
            <span className="font-bold">C</span>
            <span className="font-bold">I</span>
            <span className="font-bold">N</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-beige-700 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Explora recetas
              deliciosas, técnicas culinarias y secretos de chefs. Desde platos
              fáciles hasta menús gourmet, ¡tu cocina será un lugar de magia!
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-green-700 border-4 border-green-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">N</span>
            <span className="font-bold">A</span>
            <span className="font-bold">T</span>
            <span className="font-bold">U</span>
            <span className="font-bold">R</span>
            <span className="font-bold">A</span>
            <span className="font-bold">L</span>
            <span className="font-bold">E</span>
            <span className="font-bold">Z</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out bg-green-700 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Conoce el
              maravilloso mundo natural. Desde la fauna y flora hasta el
              ecoturismo, sumérgete en la belleza de la naturaleza con nuestros
              libros.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-orange-500 border-4 border-orange-800 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">A</span>
            <span className="font-bold">R</span>
            <span className="font-bold">T</span>
            <span className="font-bold">E</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out bg-orange-500 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Descubre la
              creatividad sin límites. Ya sea pintura, escultura o diseño
              gráfico, nuestros libros te inspirarán a ver el arte de una nueva
              manera.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-violet-700 border-4 border-violet-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">P</span>
            <span className="font-bold">S</span>
            <span className="font-bold">C</span>
            <span className="font-bold">O</span>
            <span className="font-bold">L</span>
            <span className="font-bold">O</span>
            <span className="font-bold">G</span>
            <span className="font-bold">Í</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-violet-700 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Entiende cómo
              funciona la mente humana. Con nuestros libros de psicología,
              explora temas de comportamiento, emociones y relaciones
              interpersonales.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-pink-950 border-4 border-rose-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">T</span>
            <span className="font-bold">E</span>
            <span className="font-bold">R</span>
            <span className="font-bold">A</span>
            <span className="font-bold">T</span>
            <span className="font-bold">U</span>
            <span className="font-bold">R</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-pink-950 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Sumérgete en los
              grandes clásicos de la literatura mundial. Desde Shakespeare hasta
              Dostoyevski, vive las historias que han marcado la historia de la
              humanidad. libros.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-emerald-700 border-4 border-emerald-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">D</span>
            <span className="font-bold">E</span>
            <span className="font-bold">P</span>
            <span className="font-bold">O</span>
            <span className="font-bold">R</span>
            <span className="font-bold">T</span>
            <span className="font-bold">E</span>
            <span className="font-bold">S</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-emerald-700 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Disfruta de
              libros sobre tus deportes favoritos. Desde estrategias hasta
              biografías de íconos deportivos, encuentra todo lo que necesitas
              para ser un experto. libros.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-teal-500 border-4 border-teal-800 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">T</span>
            <span className="font-bold">E</span>
            <span className="font-bold">C</span>
            <span className="font-bold">N</span>
            <span className="font-bold">O</span>
            <span className="font-bold">L</span>
            <span className="font-bold">O</span>
            <span className="font-bold">G</span>
            <span className="font-bold">Í</span>
            <span className="font-bold">A</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out bg-teal-500 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Sumérgete en el
              futuro con libros sobre tecnología. Descubre las últimas
              innovaciones, la inteligencia artificial y todo lo que está
              cambiando el mundo digital.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-amber-700 border-4 border-orange-950 hover:grow-[4] hover:max-w-full relative">
          {/* Initial text*/}
          <div className="flex flex-col items-center justify-center w-full text-white transition-opacity duration-500 ease-in-out hover:opacity-0">
            <span className="font-bold">C</span>
            <span className="font-bold">I</span>
            <span className="font-bold">N</span>
            <span className="font-bold">E</span>
          </div>

          {/* Text on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 bg-amber-700 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              En <span className="font-bold">Castor Book</span> Explora libros
              sobre tus películas y series favoritas. Desde análisis de
              películas hasta biografías de directores, ¡tienes toda la magia
              del cine al alcance de tu mano!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

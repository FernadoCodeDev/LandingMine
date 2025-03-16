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
      {/* On mobile devices, it wouldn't be possible to hover over images because you'd have to hold it down. */}

      <div className="grid items-center w-full grid-cols-1 gap-4 m-auto mt-12 md:grid-cols-2 lg:hidden ">
        <div className="p-2 bg-orange-500 border-4 border-orange-600 rounded-xl">
          <div className="bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white ">Text</h1>

            <p className="text-base text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              corporis, labore numquam et repudiandae veniam velit, ut aliquam
              nesciunt, laudantium sunt molestiae. Tempore hic saepe omnis ea,
              reiciendis dolorem quas!
            </p>
          </div>
        </div>

        <div className="p-2 bg-yellow-400 border-4 border-yellow-500 rounded-xl">
          <div className="bottom-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tl-3xl text-start">
            <h1 className="col-span-2 text-xl font-bold text-white">Text</h1>

            <h1 className="col-span-2 text-base text-white ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quis blanditiis, voluptatum quae officiis maxime
              nesciunt magnam voluptatibus aperiam, corporis eos, voluptates
              obcaecati. Sunt eos sit blanditiis repudiandae hic similique.
            </h1>
          </div>
        </div>

        <div className="p-2 bg-orange-600 border-4 border-orange-700 ">
          <div className="bottom-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tl-3xl text-start">
            <h1 className="text-xl font-bold text-white ">TEXT</h1>
            <p className="text-base text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, vero. Porro quo doloremque praesentium vero, nihil
              incidunt aspernatur quisquam mollitia corrupti velit repellendus
              modi, necessitatibus debitis ipsum nisi nesciunt quam.
            </p>
          </div>
        </div>

        <div className="p-2 bg-purple-600 border-4 border-purple-800 ">
          <div className="bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white">Text</h1>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              quos quisquam ea id minima, quidem esse dolorum rem provident?
              Magni facere distinctio quas veniam blanditiis, perspiciatis nobis
              aperiam sunt debitis.
            </p>
          </div>
        </div>

        <div className="p-2 bg-blue-500 border-4 border-blue-600 ">
          <div className="bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-2 p-4 m-auto text-white rounded-xl md:rounded-none md:rounded-tr-xl text-start">
            <h1 className="text-xl font-bold text-white">Text</h1>
            <p className="text-base text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, dignissimos! Explicabo, minus! Placeat, beatae!
              Similique, ullam sequi exercitationem esse perspiciatis distinctio
              eos, dolor commodi veniam soluta quod minima praesentium nulla.
            </p>
          </div>
        </div>
      </div>

      {/* Content Greater than lg*/}
      <div className="mt-8 bg-beige-400 border-4 border-beige-600 hidden lg:flex p-2 max-w-[90rem] w-full h-auto">
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-red-800 border-4 border-red-950 hover:grow-[4] hover:max-w-full relative">
          {/* Texto inicial */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0">
            <p className="text-lg font-semibold text-center">
              Hover
            </p>
          </div>

          {/* Texto al hacer hover */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold text-center">
              <span className="font-bold">Castor Book</span> puedes encontrar los mejores libros de
              economía, desde fundamentos financieros hasta estrategias de
              inversión. ¡Aprende y crece con nosotros!
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-indigo-800 border-4 border-indigo-950 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-full gap-4 text-white">
            <div className="w-full h-2 bg-indigo-950"></div>
            <div className="w-full h-2 bg-indigo-950"></div>
            <div className="w-full h-2 bg-indigo-950"></div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-violet-800 border-4 border-violet-950 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-orange-400 border-4 border-orange-800 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-beige-200 border-4 border-beige-600 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-full text-white">
            <div className="w-8 h-8 rounded-full bg-beige-600"></div>
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
            <div className="w-8 h-8 rounded-full bg-beige-600"></div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-blue-700 border-4 border-blue-800 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-emerald-600 border-4 border-emerald-800 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-pink-950 border-4 border-rose-950 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-slate-950 border-4 border-gray-950 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>
      </div>

      <div className="bg-beige-400 border-4 border-beige-600 hidden lg:flex p-2 max-w-[90rem] w-full h-auto">
        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-orange-500 border-4 border-orange-600 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-full gap-4 text-white">
            <div className="w-full h-2 bg-orange-600 "></div>
            <div className="w-full h-2 bg-orange-600 "></div>
            <div className="w-full h-2 bg-orange-600 "></div>
            <div className="w-full h-2 bg-orange-600 "></div>
            <div className="w-full h-2 bg-orange-600 "></div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-cyan-700 border-4 border-cyan-900 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-lime-800 border-4 border-lime-950 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-yellow-500 border-4 border-yellow-700 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-teal-700 border-4 border-teal-900 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-sky-700 border-4 border-sky-950 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-fuchsia-700 border-4 border-fuchsia-950 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-auto p-4 text-center transition-all duration-700 ease-out bg-stone-700 border-4 border-stone-950 hover:grow-[4] hover:max-w-full  ">
          <div className="flex flex-col items-center justify-center w-auto text-white">
            <span className="font-bold">L</span>
            <span className="font-bold">I</span>
            <span className="font-bold">B</span>
            <span className="font-bold">R</span>
            <span className="font-bold">O</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

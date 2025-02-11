import React from "react";
import Logo from "../../../img/LandingMineWeb.webp";
import Landing from "../../../img/LandingPageUnderConstruction.webp";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        <section className="items-center py-16 text-center">
          <img
            src={Logo}
            alt="Landing"
            className="object-contain w-40 h-auto mx-auto lg:w-60"
          />
          <h1 className="mb-4 text-4xl font-bold text-blue-950 dark:text-orange-300">
            L
            <span className="text-4xl font-bold text-transparent stroke-blue-950 dark:stroke-orange-300">
              anding
            </span>
            M
            <span className="text-4xl font-bold text-transparent stroke-blue-950 dark:stroke-orange-300">
              ine
            </span>
          </h1>

          <p className="mb-8 text-lg dark:text-white">
            ¿Qué es{" "}
            <strong className="text-blue-950 dark:text-orange-300">
              LandingMine
            </strong>
            ? Es una colección de landing pages inspiradas en diseños como
            <span className="font-bold text-blue-950 dark:text-orange-300">
              {" "}
              collectui
            </span>
            ,
            <span className="font-bold text-blue-950 dark:text-orange-300">
              {" "}
              Dribbble
            </span>
            ,
            <span className="font-bold text-blue-950 dark:text-orange-300">
              {" "}
              Behance,{" "}
            </span>
            hechas con <span className="font-bold text-cyan-400">React</span> y
            <span className="font-bold text-sky-400"> Tailwind CSS.</span>
          </p>
          <div className="grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-300 rounded-lg shadow-md dark:bg-neutral-800">
              <img src={Landing} alt="Landing" className="w-full h-auto" />
              <div className="p-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  Landing Page 1
                </h2>
                <p className="text-black dark:text-white">
                  Descripción de la landing page.
                </p>

                <a href="#">
                  <button className="w-full p-2 m-1 font-bold text-center text-orange-300 transition duration-500 ease-in-out bg-blue-800 hover:bg-blue-950 ">
                    Button A
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
              <img src={Landing} alt="Landing" className="w-full h-auto" />
              <div className="p-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  Landing Page 2
                </h2>
                <p className="text-black dark:text-white">
                  Descripción de la landing page.
                </p>

                <a href="#">
                  <button className="w-full p-2 m-1 font-bold text-center text-orange-200 transition duration-500 ease-in-out bg-blue-800 hover:bg-blue-950 ">
                    Button A
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
              <img src={Landing} alt="Landing" className="w-full h-auto" />
              <div className="p-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  Landing Page 3
                </h2>
                <p className="text-black dark:text-white">
                  Descripción de la landing page.
                </p>

                <a href="#">
                  <button className="w-full p-2 m-1 font-bold text-center text-orange-300 transition duration-500 ease-in-out bg-blue-800 hover:bg-blue-950 ">
                    Button A
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
              <img src={Landing} alt="Landing" className="w-full h-auto" />
              <div className="p-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  Landing Page 3
                </h2>
                <p className="text-black dark:text-white">
                  Descripción de la landing page.
                </p>

                <a href="#">
                  <button className="w-full p-2 m-1 font-bold text-center text-orange-300 transition duration-500 ease-in-out bg-blue-800 hover:bg-blue-950 ">
                    Button A
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
              <img src={Landing} alt="Landing" className="w-full h-auto" />
              <div className="p-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  Landing Page 3
                </h2>
                <p className="text-black dark:text-white">
                  Descripción de la landing page.
                </p>

                <a href="#">
                  <button className="w-full p-2 m-1 font-bold text-center text-orange-300 transition duration-500 ease-in-out bg-blue-800 hover:bg-blue-950 ">
                    Button A
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
              <img src={Landing} alt="Landing" className="w-full h-auto" />
              <div className="p-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  Landing Page 3
                </h2>
                <p className="text-black dark:text-white">
                  Descripción de la landing page.
                </p>

                <a href="#">
                  <button className="w-full p-2 m-1 font-bold text-center text-orange-300 transition duration-500 ease-in-out bg-blue-800 hover:bg-blue-950 ">
                    Button A
                  </button>
                </a>
              </div>
            </div>

            <div className="w-full md:col-span-2 lg:col-span-3">
              <a href="#">
                <button className="w-full p-2 text-white font-bold transition duration-500 ease-in-out bg-orange-500 hover:bg-orange-700 ">
                  Ver landing pages
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

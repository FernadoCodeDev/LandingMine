import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">LandingMine</h1>
          <p className="mb-8 text-lg">
            ¿Qué es <strong>LandingMine</strong>? Es una colección de landing
            pages inspiradas en diseños de todo el mundo, hechas con React y
            Tailwind CSS.
          </p>
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
            <div>
              <img src="" alt="" />
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Landing Page 1</h2>
                <p>Descripción de la landing page.</p>

                <a href="#">
                  <button className="w-full m-1 p-2 text-center text-white font-bold transition duration-750 ease-in-out bg-orange-600 border-2 border-orange-700 rounded-none hover:border-orange-800 hover:bg-orange-700 hover:rounded-[2vh]">
                    Button A
                  </button>
                </a>
              </div>
            </div>

            <div>
              <img src="" alt="" />
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Landing Page 2</h2>
                <p>Descripción de la landing page.</p>

                <a href="#">
                  <button className="w-full m-1 p-2 text-center text-white font-bold transition duration-750 ease-in-out bg-orange-600 border-2 border-orange-700 rounded-none hover:border-orange-800 hover:bg-orange-700 hover:rounded-[2vh]">
                    Button A
                  </button>
                </a>
              </div>
            </div>

            <div>
              <img src="" alt="" />
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Landing Page 3</h2>
                <p>Descripción de la landing page.</p>

                <a href="#">
                  <button className="w-full m-1 p-2 text-center text-white font-bold transition duration-750 ease-in-out bg-orange-600 border-2 border-orange-700 rounded-none hover:border-orange-800 hover:bg-orange-700 hover:rounded-[2vh]">
                    Button A
                  </button>
                </a>
              </div>
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

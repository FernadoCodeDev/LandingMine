import React from "react";
import Logo from "../../../img/LandingMineWeb.webp";
import Landing from "../../../img/LandingPageUnderConstruction.webp";
import Navegation from "../TempladeComponents/Navegation";
import Footer from "../TempladeComponents/Footer";
import Button from "./Button";
import ButtonLanding from "../CollectionPageComponents/ButtonLanding";
import BackgroundPizzaPizza from "../../PizzaPizza/img/BackgroundPizzaPizza.webp";
import BackgroundGym from "../../GYM/img/BackgroundGym.webp";
import BackgroundMA from "../../MarketingAgency/img/MarketingAgency.webp";
import BackgroundPB from "../../PigBank/img/PigBankBG.webp";
import BackgroundGoodTrip from "../../GoodTrip/img/GoodTrip.webp";

const HomePage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Navegation />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {" "}
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

            <p className="text-center w-full p-2 mb-8 text-lg md:max-w-[70rem] md:mx-auto dark:text-white">
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
              hechas con <span className="font-bold text-cyan-400">
                React
              </span>{" "}
              y<span className="font-bold text-sky-400"> Tailwind CSS.</span>
            </p>

            <div className="grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-300 rounded-lg shadow-md dark:bg-neutral-800">
                <img src={BackgroundPizzaPizza} alt="BackgroundPizzaPizza" className="w-full h-60"/>
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    PizzaPizza
                  </h2>
                  <p className="text-black dark:text-white">
                    landing page sobre una pizzeria
                  </p>

                  <a href="/PizzaPizza">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img src={BackgroundGym} alt="BackgroundGym" className="w-full h-60" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                  Gym
                  </h2>
                  <p className="text-black dark:text-white">
                  landing page sobre un gimnasio
                  </p>

                  <a href="/Gym">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img src={BackgroundMA} alt="BackgroundMA" className="w-full h-60" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                  Marketing Agency
                  </h2>
                  <p className="text-black dark:text-white">
                  landing page sobre un Agencia de Marketing digital
                  </p>

                  <a href="/MarketingAgency">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img src={BackgroundPB} alt="BackgroundPB" className="w-full h-60" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    Pig Bank
                  </h2>
                  <p className="text-black dark:text-white">
                  landing page sobre un Banco
                  </p>

                  <a href="/PigBank">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img src={BackgroundGoodTrip} alt="BackgroundGoodTrip" className="w-full h-60" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                 Good Trip
                  </h2>
                  <p className="text-black dark:text-white">
                  landing page sobre un Agencia de Viajes
                  </p>

                  <a href="/GoodTrip">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img src={Landing} alt="Landing" className="w-full h-60" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    Landing Page 6
                  </h2>
                  <p className="text-black dark:text-white">
                    Descripción de la landing page.
                  </p>

                  <a href="#">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <Button />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

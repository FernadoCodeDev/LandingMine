import React from "react";
import Logo from "../assets/img/LandingMineWeb.webp";
import Navegation from "../components/ui/Navegation";
import Footer from "../components/ui/Footer";
import Button from "../components/ui/Button";
import ButtonLanding from "../components/ui/ButtonLanding";
import BackgroundPizzaUp from "../../PizzaUp/assets/img/BackgroundPizzaUp.webp";
import BackgroundGym from "../../GYM/assets/img/BackgroundGym.webp";
import BackgroundMA from "../../MarketingAgency/assets/img/MarketingAgency.webp";
import BackgroundPB from "../../PigBank/assets/img/PigBankBG.webp";
import BackgroundGoodTrip from "../../GoodTrip/assets/img/GoodTrip.webp";
import BackgroundCooktopiaShop from "../../CooktopiaShop/assets/img/BackgroundCooktopiaShop.webp";
import BackgroundDreamHouse from "../../DreamHouse/assets/img/BackgroundDreamHouse.webp";
import BackgroundWebCall from "../../WebCall/assets/img/BackgroundWebCall.webp";
import { Trans, useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

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

            <p className="text-center w-full p-2 mb-8 text-lg md:max-w-[42rem] md:mx-auto dark:text-white">
              <Trans
                i18nKey="descripcionLanding"
                components={{
                  strong: (
                    <strong className="text-blue-950 dark:text-orange-300" />
                  ),
                  collect: (
                    <span className="font-bold text-blue-950 dark:text-orange-300" />
                  ),
                  dribbble: (
                    <span className="font-bold text-blue-950 dark:text-orange-300" />
                  ),
                  behance: (
                    <span className="font-bold text-blue-950 dark:text-orange-300" />
                  ),
                  react: <span className="font-bold text-cyan-400" />,
                  tailwind: <span className="font-bold text-sky-400" />,
                }}
              />
            </p>

            <div className="grid grid-cols-1 gap-4 p-4 m-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              <div className="bg-gray-300 rounded-lg shadow-md dark:bg-neutral-800">
                <img
                  src={BackgroundPizzaUp}
                  alt="BackgroundPizzaUp"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    PizzaUp
                  </h2>
                  <p className="text-black dark:text-white">
                    Una landing page ideal para pizzerías que buscan atraer más
                    clientes y mostrar su menú de forma visual y atractiva.
                  </p>

                  <a href="/PizzaUp">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img
                  src={BackgroundGym}
                  alt="BackgroundGym"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">Gym</h2>
                  <p className="text-black dark:text-white">
                    Landing page pensada para gimnasios que quieren promocionar
                    sus servicios, destacar sus entrenadores y captar nuevos
                    miembros.
                  </p>

                  <a href="/Gym">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img
                  src={BackgroundMA}
                  alt="BackgroundMA"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    Marketing Agency
                  </h2>
                  <p className="text-black dark:text-white">
                    Diseñada para agencias de marketing digital que necesitan
                    una presentación profesional para captar clientes y mostrar
                    su portafolio.
                  </p>

                  <a href="/MarketingAgency">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img
                  src={BackgroundPB}
                  alt="BackgroundPB"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    Pig Bank
                  </h2>
                  <p className="text-black dark:text-white">
                    Una landing para bancos o fintechs que desean transmitir
                    confianza y presentar sus productos financieros de forma
                    clara.
                  </p>

                  <a href="/PigBank">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img
                  src={BackgroundGoodTrip}
                  alt="BackgroundGoodTrip"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    Good Trip
                  </h2>
                  <p className="text-black dark:text-white">
                    Landing enfocada en agencias de viaje que buscan inspirar a
                    sus clientes y mostrar sus paquetes turísticos de manera
                    atractiva.
                  </p>

                  <a href="/GoodTrip">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <img
                  src={BackgroundCooktopiaShop}
                  alt="BackgroundCooktopiaShop"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    Cooktopia Shop
                  </h2>
                  <p className="text-black dark:text-white">
                    Landing page pensada para tiendas de artículos de cocina que
                    buscan vender sus productos de forma moderna y organizada.
                  </p>

                  <a href="/CooktopiaShop">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="hidden bg-gray-200 rounded-lg shadow-md xl:block dark:bg-neutral-800">
                <img
                  src={BackgroundDreamHouse}
                  alt="BackgroundDreamHouse"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    Dream House
                  </h2>
                  <p className="text-black dark:text-white">
                    Ideal para agencias inmobiliarias que quieren mostrar
                    propiedades destacadas y captar nuevos compradores o
                    arrendatarios.
                  </p>

                  <a href="/DreamHouse">
                    <ButtonLanding />
                  </a>
                </div>
              </div>

              <div className="hidden bg-gray-200 rounded-lg shadow-md xl:block dark:bg-neutral-800">
                <img
                  src={BackgroundWebCall}
                  alt="BackgroundWebCall"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold dark:text-white">
                    WebCall
                  </h2>
                  <p className="text-black dark:text-white">
                    Landing diseñada para plataformas de videollamadas que
                    necesitan explicar sus funciones y atraer usuarios o
                    empresas.
                  </p>

                  <a href="/WebCall">
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

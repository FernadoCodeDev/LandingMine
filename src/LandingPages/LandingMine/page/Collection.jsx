import React from "react";
import Logo from "../assets/img/LandingMineWeb.webp";
import Navegation from "../components/ui/Navegation";
import Footer from "../components/ui/Footer";
import LandingPageAd from "../components/sections/LandingPageAd";
import { Trans, useTranslation } from "react-i18next";

const Collection = () => {
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

            <p className="text-center w-full p-2 text-lg max-w-full md:max-w-[70rem] md:mx-auto dark:text-white">
              <Trans
                i18nKey="CollectionLanding"
                components={{
                  strong: (
                    <strong className="font-bold text-blue-950 dark:text-orange-300" />
                  ),

                  span: (
                    <span className="font-bold text-blue-950 dark:text-orange-300" />
                  ),

                  react: <span className="font-bold text-cyan-400" />,

                  tailwind: <span className="font-bold text-sky-400" />,

                  collect: <span className="font-bold text-blue-950 dark:text-orange-300" />,

                  dribbble: <span className="font-bold text-blue-950 dark:text-orange-300" />,
  
                  behance: <span className="font-bold text-blue-950 dark:text-orange-300" />,
                }}
              />
            </p>     

            <LandingPageAd />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Collection;

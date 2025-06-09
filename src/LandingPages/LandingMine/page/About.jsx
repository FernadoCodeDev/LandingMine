import React from "react";
import Logo from "../assets/img/LandingMineWeb.webp";
import Navegation from "../components/ui/Navegation";
import Footer from "../components/ui/Footer";
import GitHub from "../components/ui/GitHubButton";
import PersonalPage from "../components/ui/PersonalPageButton";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row">
      <Navegation />
      <div className="flex flex-col min-h-screen">
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

            <div className="grid w-full grid-cols-1 gap-8 p-4 lg:grid-cols-2">
              <div className="col-span-1 bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <p className="w-full p-2 text-lg text-center md:max-w-[70rem] md:mx-auto dark:text-white">
                  <Trans
                    i18nKey="Abouttext1"
                    components={{
                      strong: (
                        <strong className="text-blue-950 dark:text-orange-300" />
                      ),

                      react: <span className="font-bold text-cyan-400" />,
                      tailwind: <span className="font-bold text-sky-400" />,
                      responsive: (
                        <span className="font-bold text-blue-950 dark:text-orange-300" />
                      )
                    }}
                  />
                </p>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md md:row-span-2 dark:bg-neutral-800">
                <p className="w-full p-2 text-lg text-center md:max-w-[70rem] md:mx-auto dark:text-white">
                  <Trans
                    i18nKey="Abouttext2"
                    components={{
                      frontend: (
                        <strong className="text-blue-950 dark:text-orange-300" />
                      ),
                      backend: (
                        <strong className="text-blue-950 dark:text-orange-300" />
                      ),
                      strong: (
                        <strong className="text-blue-950 dark:text-orange-300" />
                      )
                    }} 
                  />
                </p>
              </div>

              <div className="col-span-1 bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <p className="w-full p-2 text-lg text-center md:max-w-[70rem] md:mx-auto dark:text-white">
                <Trans
                    i18nKey="Abouttext3"
                    components={{
                      frontend: (
                        <strong className="text-blue-950 dark:text-orange-300" />
                      ),
                      backend: (
                        <strong className="text-blue-950 dark:text-orange-300" />
                      ),
                      webpersonal: (
                        <strong className="text-blue-950 dark:text-orange-300" />
                      ),
                       github: (
                        <strong className="text-blue-950 dark:text-orange-300" />
                      )
                    }} 
                  />
                </p>
              </div>
              <div className="col-span-full">
                <div className="grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2">
                  <PersonalPage />
                  <GitHub />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;

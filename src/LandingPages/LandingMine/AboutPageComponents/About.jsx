import React from "react";
import Logo from "../../../img/LandingMineWeb.webp";
import Navegation from "../ui/Navegation";
import Footer from "../ui/Footer";
import GitHub from "./GitHubButton";
import PersonalPage from "./PersonalPageButton";

const AboutPage = () => {
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

            <h2 className="mb-4 text-4xl font-bold text-blue-950 dark:text-orange-300">
              Sobre LandingMine
            </h2>

            <div className="grid w-full grid-cols-1 gap-8 p-4 lg:grid-cols-2">
              <div className="col-span-1 bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <p className="w-full p-2 text-lg text-center md:max-w-[70rem] md:mx-auto dark:text-white">
                  <strong className="text-blue-950 dark:text-orange-300">
                    Sobre LandingMine
                  </strong>{" "}
                  es un proyecto personal que he desarrollado para mostrar mis
                  habilidades como desarrollador Front-End, con un enfoque en el
                  uso de tecnologías modernas como
                  <span className="font-bold text-cyan-400">
                    {" "}
                    React{" "}
                  </span> y{" "}
                  <span className="font-bold text-sky-400">
                    {" "}
                    Tailwind CSS,{" "}
                  </span>
                  Cada landing page en esta colección ha sido cuidadosamente
                  diseñada y optimizada para ser {" "}
                  <strong className="text-blue-950 dark:text-orange-300">
                    100% responsive
                  </strong>
                  , asegurando una experiencia de usuario fluida y atractiva en
                  cualquier dispositivo.
                </p>
              </div>

              <div className="bg-gray-200 rounded-lg shadow-md md:row-span-2 dark:bg-neutral-800">
                <p className="w-full p-2 text-lg text-center md:max-w-[70rem] md:mx-auto dark:text-white">
                  Este proyecto no solo refleja mi trabajo en el{" "}
                  <strong className="text-blue-950 dark:text-orange-300">
                    Front-End
                  </strong>
                  , sino que también sirve como un escaparate de mi capacidad
                  para trabajar con tecnologías
                  <strong className="text-blue-950 dark:text-orange-300">
                    {" "}
                    Back-End
                  </strong>
                  . A través de{" "}
                  <strong className="text-blue-950 dark:text-orange-300">
                    LandingMine,
                  </strong>{" "}
                  quiero demostrar mi versatilidad como desarrollador, abarcando
                  tanto el diseño visual como la funcionalidad robusta en
                  aplicaciones web.
                </p>
              </div>

              <div className="col-span-1 bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
                <p className="w-full p-2 text-lg text-center md:max-w-[70rem] md:mx-auto dark:text-white">
                  Si estás interesado en explorar más sobre mis proyectos, tanto
                  del lado
                  <strong className="text-blue-950 dark:text-orange-300">
                    {" "}
                    Front-End
                  </strong>{" "}
                  como{" "}
                  <strong className="text-blue-950 dark:text-orange-300">
                    {" "}
                    Back-End,
                  </strong>{" "}
                  te invito a visitar mi{" "}
                  <strong className="text-blue-950 dark:text-orange-300">
                    página personal.
                  </strong>{" "}
                  Ahí encontrarás una colección de mis trabajos previos, así
                  como los enlaces a mis repositorios en
                  <strong className="text-blue-950 dark:text-orange-300">
                    {" "}
                    GitHub,
                  </strong>{" "}
                   donde puedes profundizar en el código de cada uno de los
                  proyectos.
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

export default AboutPage;

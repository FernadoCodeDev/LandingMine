import React from "react";
import BackgroundSection from "../../assets/img/BackgroundSection.webp";
import SVG1 from "../../assets/svg/SVG1";
import SVG2 from "../../assets/svg/SVG2";
import SVG3 from "../../assets/svg/SVG3";
import SVG4 from "../../assets/svg/SVG4";
import SVG5 from "../../assets/svg/SVG5";
import SVG6 from "../../assets/svg/SVG6";

const FirstSection = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundSection})` }}
      ></div>

      <div className="relative grid grid-cols-1 m-auto mb-8 md:grid-cols-2 max-w-[80rem] items-center justify-between text-center text-white p-4">
        <h2 className="text-3xl font-bold md:text-5xl">
        Diseño web en Orlando, Daytona Beach, Miami y Atlanta.
        </h2>
        <div className="mt-4 ">
          <p className="text-lg text-start md:text-xl">
            Bienvenido a Marketing Agency. Como estudio de diseño web y agencia
            de marketing digital con sede en Daytona Beach, Florida, y con
            oficinas en Orlando, Miami y Atlanta, ayudamos a nuestros clientes a
            lograr una presencia en línea única con clientes potenciales,
            hermosas páginas web, redes sociales y más. Estamos brindando
            resultados en Florida, el país y el mundo, así que ¡descubra cómo
            podemos ayudarlo!
          </p>
          <button className="flex mt-4 px-6 py-2 bg-slate-50 hover:bg-slate-300 text-black rounded-full transition-all">
            Inicie Hoy!
          </button>
        </div>
      </div>

      <div className="relative pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 m-auto w-full h-full max-w-[90rem] bg-neutral-700 backdrop-blur-md p-6 rounded-lg text-white">
          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG1 />
            </div>
            <h2 className="text-xl font-semibold p-2">SEO</h2>
            <p className="text-sm p-2">
              A través de SEO orgánico, anuncios pagados y búsqueda
              geolocalizada, llega a los clientes de una manera completamente
              nueva.
            </p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG2 />
            </div>
            <h2 className="text-xl font-semibold p-2">Social Media</h2>
            <p className="text-sm p-2">
              Aumenta tu seguimiento en línea y envía mensajes y promociones que
              sorprendan a tu audiencia.
            </p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG3 />
            </div>
            <h2 className="text-xl font-semibold p-2">Email</h2>
            <p className="text-sm p-2">
              Llega a todos tus clientes de una vez con mensajes estratégicos y
              creativamente diseñados por correo electrónico.{" "}
            </p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG4 />
            </div>
            <h2 className="text-xl font-semibold p-2">Paid Search</h2>
            <p className="text-sm p-2">
              ¡Los clientes están buscando un negocio como el tuyo! Ayúdales a
              encontrarte con anuncios de búsqueda pagados
            </p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG5 />
            </div>
            <h2 className="text-xl font-semibold p-2">Web Design</h2>
            <p className="text-sm p-2">
              Descubre nuestros hermosos sitios web generadores de prospectos
              que convierten visitantes en clientes.
            </p>
          </div>

          <div className="bg-neutral-600">
            <div className="flex flex-row justify-start w-20 h-20 bg-neutral-800 p-2">
              <SVG6 />
            </div>
            <h2 className="text-xl font-semibold p-2">Content</h2>
            <p className="text-sm p-2">
              Haz que tu voz única se escuche con la ayuda de contenido
              personalizado y optimizado para buscadores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

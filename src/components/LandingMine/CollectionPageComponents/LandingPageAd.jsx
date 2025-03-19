import React from "react";
import Landing from "../../../img/LandingPageUnderConstruction.webp";
import ButtonLanding from "./ButtonLanding";
import BackgroundPizzaUp from "../../PizzaUp/img/BackgroundPizzaUp.webp";
import BackgroundGym from "../../GYM/img/BackgroundGym.webp";
import BackgroundMA from "../../MarketingAgency/img/MarketingAgency.webp";
import BackgroundPB from "../../PigBank/img/PigBankBG.webp";
import BackgroundGoodTrip from "../../GoodTrip/img/GoodTrip.webp";
import BackgroundCooktopiaShop from "../../CooktopiaShop/img/BackgroundCooktopiaShop.webp";
import BackgroundDreamHouse from "../../DreamHouse/img/BackgroundDreamHouse.webp";
import BackgroundWebCall from "../../WebCall/img/BackgroundWebCall.webp";
import BackgroundWLP from "../../WLP/img/BackgroundWLP.webp";
import BackgroundMorgana from "../../Morgana/img/BackgroundMorgana.webp";
import GoldTeeth from "../../GoldTeeth/img/BackgroundGoldTeeth.webp";
import BackgroundCampingNight from "../../CampingNight/img/BackgroundCampingNight.webp";
import BackgroundClover from "../../Clover/img/BackgroundClover.webp";
import BackgroundOrganicGold from "../../OrganicGold/img/BackgroundOrganicGold.webp";
import BackgroundZoologicalWorld from "../../ZoologicalWorld/img/BackgroundZoologicalWorld.webp";
import BackgroundJRRoyal from "../../JRRoyal/img/BackgroundJRRoyal.webp";
import BackgroundCastorBook from "../../CastorBook/img/BackgroundCastorBook.webp";
import BackgroundStrikes from "../../Strikes/img/BackgroundStrike's.webp";

const LandingPageAd = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-gray-300 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundPizzaUp}
          alt="BackgroundPizzaUp"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">PizzaUp</h2>
          <p className="text-black dark:text-white">
            landing page sobre una pizzeria
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
            landing page sobre un gimnasio
          </p>

          <a href="/Gym">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={BackgroundMA} alt="BackgroundMA" className="w-full h-auto" />
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
        <img src={BackgroundPB} alt="BackgroundPB" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">Pig Bank</h2>
          <p className="text-black dark:text-white">
            landing page sobre un Banco
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
          <h2 className="text-xl font-semibold dark:text-white">Good Trip</h2>
          <p className="text-black dark:text-white">
            landing page sobre un Agencia de Viajes
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
            E-commerce sobre una tienda de articulos de cocina
          </p>

          <a href="/CooktopiaShop">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundDreamHouse}
          alt="BackgroundDreamHouse"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">Dream House</h2>
          <p className="text-black dark:text-white">
            landing page sobre un Agencia de Bienes Raíces
          </p>

          <a href="/DreamHouse">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundWebCall}
          alt="BackgroundWebCall"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">WebCall</h2>
          <p className="text-black dark:text-white">
            landing page sobre una plataforma de conferencias en linea
          </p>

          <a href="/WebCall">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundWLP}
          alt="BackgroundWLP"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">W L P</h2>
          <p className="text-black dark:text-white">
            Landing Page sobre una academmia de lucha libre
          </p>

          <a href="/WLP">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundMorgana}
          alt="BackgroundMorgana"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">Morgana</h2>
          <p className="text-black dark:text-white">
            Landing page sobre una con concesionaria de autos
          </p>

          <a href="/Morgana">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={GoldTeeth} alt="GoldTeeth" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">GoldTeeth</h2>
          <p className="text-black dark:text-white">
            Landing page sobre una clinica dentista.
          </p>

          <a href="/GoldTeeth">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundCampingNight}
          alt="BackgroundCampingNight"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Camping Night
          </h2>
          <p className="text-black dark:text-white">
            Landing page de una empresa de hacer camping
          </p>

          <a href="/CampingNight">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundClover}
          alt="BackgroundClover"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">Clover</h2>
          <p className="text-black dark:text-white">
            Landing page sobre una tienda de paneles solares
          </p>

          <a href="/Clover">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundOrganicGold}
          alt="BackgroundOrganicGold"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Organic Gold
          </h2>
          <p className="text-black dark:text-white">
            landing page de una tienda de Productos Orgánicos
          </p>

          <a href="/OrganicGold">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundZoologicalWorld}
          alt="BackgroundZoologicalWorld"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Zoological World
          </h2>
          <p className="text-black dark:text-white">
            landing page de un Zoológico
          </p>

          <a href="/ZoologicalWorld">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundJRRoyal}
          alt="BackgroundJRRoyal"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">JR Royal</h2>
          <p className="text-black dark:text-white">
            Landing page sobre un hotel
          </p>

          <a href="/JRRoyal">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundCastorBook}
          alt="BackgroundCastorBook"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">Castor Book</h2>
          <p className="text-black dark:text-white">
            Landing page sobre una librería y editorial.
          </p>

          <a href="/CastorBook">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={BackgroundStrikes} alt="BackgroundStrikes" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
          Strikes 
          </h2>
          <p className="text-black dark:text-white">
           Landing page sobre un establecimiento de boliche
          </p>

          <a href="/Strikes">
            <ButtonLanding />
          </a>
        </div>
      </div>
    </div>
  );
};
export default LandingPageAd;

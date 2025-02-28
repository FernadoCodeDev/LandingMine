import React from "react";
import Landing from "../../../img/LandingPageUnderConstruction.webp";
import ButtonLanding from "./ButtonLanding";
import BackgroundPizzaPizza from "../../PizzaPizza/img/BackgroundPizzaPizza.webp";
import BackgroundGym from "../../GYM/img/BackgroundGym.webp";
import BackgroundMA from "../../MarketingAgency/img/MarketingAgency.webp";
import BackgroundPB from "../../PigBank/img/PigBankBG.webp";
import BackgroundGoodTrip from "../../GoodTrip/img/GoodTrip.webp";
import BackgroundKitchenShop from "../../KitchenShop/img/BackgroundKitchenShop.webp"

const LandingPageAd = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-gray-300 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundPizzaPizza}
          alt="BackgroundPizzaPizza"
          className="w-full h-60"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">PizzaPizza</h2>
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
          className="w-full h-60"
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
          src={BackgroundKitchenShop}
          alt="BackgroundKitchenShop"
          className="w-full h-60"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">KitchenShop</h2>
          <p className="text-black dark:text-white">
            E-commerce sobre una tienda de articulos de cocina
          </p>

          <a href="/KitchenShop">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 7
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 8
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 9
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 10
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 11
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 12
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 13
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 14
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 15
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 16
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 17
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 18
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 19
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={Landing} alt="Landing" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Landing Page 20
          </h2>
          <p className="text-black dark:text-white">
            Descripción de la landing page.
          </p>

          <a href="#">
            <ButtonLanding />
          </a>
        </div>
      </div>
    </div>
  );
};
export default LandingPageAd;

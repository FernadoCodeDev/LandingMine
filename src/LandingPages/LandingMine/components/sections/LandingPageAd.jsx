import React from "react";
import ButtonLanding from "../ui/ButtonLanding";
import BackgroundPizzaUp from "../../../PizzaUp/assets/img/BackgroundPizzaUp.webp";
import BackgroundGym from "../../../GYM/assets/img/BackgroundGym.webp";
import BackgroundMA from "../../../MarketingAgency/assets/img/MarketingAgency.webp";
import BackgroundPB from "../../../PigBank/assets/img/PigBankBG.webp";
import BackgroundGoodTrip from "../../../GoodTrip/assets/img/GoodTrip.webp";
import BackgroundCooktopiaShop from "../../../CooktopiaShop/assets/img/BackgroundCooktopiaShop.webp";
import BackgroundDreamHouse from "../../../DreamHouse/assets/img/BackgroundDreamHouse.webp";
import BackgroundWebCall from "../../../WebCall/assets/img/BackgroundWebCall.webp";
import BackgroundWLP from "../../../WLP/assets/img/BackgroundWLP.webp";
import BackgroundMorgana from "../../../Morgana/assets/img/BackgroundMorgana.webp";
import GoldTeeth from "../../../GoldTeeth/assets/img/BackgroundGoldTeeth.webp";
import BackgroundCampingNight from "../../../CampingNight/assets/img/BackgroundCampingNight.webp";
import BackgroundClover from "../../../Clover/assets/img/BackgroundClover.webp";
import BackgroundOrganicGold from "../../../OrganicGold/assets/img/BackgroundOrganicGold.webp";
import BackgroundZoologicalWorld from "../../../ZoologicalWorld/assets/img/BackgroundZoologicalWorld.webp";
import BackgroundJRRoyal from "../../../JRRoyal/assets/img/BackgroundJRRoyal.webp";
import BackgroundCastorBook from "../../../CastorBook/assets/img/BackgroundCastorBook.webp";
import BackgroundStrikes from "../../../Strikes/assets/img/BackgroundStrike's.webp";
import BackgroundChatWithBot from "../../../ChatWithBot/assets/img/ChatWithBotBackground.webp";
import { Trans, useTranslation } from "react-i18next";

const LandingPageAd = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 m-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="bg-gray-300 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundPizzaUp}
          alt="BackgroundPizzaUp"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">PizzaUp</h2>
          <p className="text-black dark:text-white">
            <Trans i18nKey="PizzaUp" components={{}} />
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
            <Trans i18nKey="Gym" components={{}} />
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
            <Trans i18nKey="MarketingAgency" components={{}} />
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
            <Trans i18nKey="PigBank" components={{}} />
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
            <Trans i18nKey="GoodTrip" components={{}} />
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
            <Trans i18nKey="CooktopiaShop" components={{}} />
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
            <Trans i18nKey="DreamHouse" components={{}} />
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
          <h2 className="text-xl font-semibold dark:text-white">Web Call</h2>
          <p className="text-black dark:text-white">
            <Trans i18nKey="WebCall" components={{}} />
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
            <Trans i18nKey="WLP" components={{}} />
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
            <Trans i18nKey="Morgana" components={{}} />
          </p>

          <a href="/Morgana">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img src={GoldTeeth} alt="GoldTeeth" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">Gold Teeth</h2>
          <p className="text-black dark:text-white">
            <Trans i18nKey="GoldTeeth" components={{}} />
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
            <Trans i18nKey="CampingNight" components={{}} />
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
            <Trans i18nKey="Clover" components={{}} />
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
            <Trans i18nKey="OrganicGold" components={{}} />
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
            <Trans i18nKey="ZoologicalWorld" components={{}} />
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
            <Trans i18nKey="JRRoyal" components={{}} />
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
            <Trans i18nKey="CastorBook" components={{}} />
          </p>

          <a href="/CastorBook">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundStrikes}
          alt="BackgroundStrikes"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">Strikes</h2>
          <p className="text-black dark:text-white">
            <Trans i18nKey="Strikes" components={{}} />
          </p>

          <a href="/Strikes">
            <ButtonLanding />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-md dark:bg-neutral-800">
        <img
          src={BackgroundChatWithBot}
          alt="BackgroundChatWithBot"
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Charla Con Bot
          </h2>
          <p className="text-black dark:text-white">
            <Trans i18nKey="ChatWithBot" components={{}} />
          </p>

          <a href="/ChatWithBot">
            <ButtonLanding />
          </a>
        </div>
      </div>
    </div>
  );
};
export default LandingPageAd;

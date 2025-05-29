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
            Una landing page ideal para pizzerías que buscan atraer más clientes
            y mostrar su menú de forma visual y atractiva.
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
            Landing page pensada para gimnasios que quieren promocionar sus
            servicios, destacar sus entrenadores y captar nuevos miembros.
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
            Diseñada para agencias de marketing digital que necesitan una
            presentación profesional para captar clientes y mostrar su
            portafolio.
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
            Una landing para bancos o fintechs que desean transmitir confianza y
            presentar sus productos financieros de forma clara.
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
            Landing enfocada en agencias de viaje que buscan inspirar a sus
            clientes y mostrar sus paquetes turísticos de manera atractiva.
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
            Landing page pensada para tiendas de artículos de cocina que buscan
            vender sus productos de forma moderna y organizada.
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
            Ideal para agencias inmobiliarias que quieren mostrar propiedades
            destacadas y captar nuevos compradores o arrendatarios.
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
            Landing diseñada para plataformas de videollamadas que necesitan
            explicar sus funciones y atraer usuarios o empresas.
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
            Una landing para academias de lucha libre que desean promocionar sus
            clases, eventos y captar nuevos estudiantes.
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
            Pensada para concesionarias de autos que quieren presentar su
            catálogo de vehículos y atraer potenciales compradores.
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
            Landing page ideal para clínicas dentales que desean ofrecer sus
            servicios, generar confianza y captar nuevos pacientes.
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
            Diseñada para empresas de campamentos que buscan promocionar
            experiencias al aire libre y atraer a los amantes de la naturaleza.
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
            Landing enfocada en tiendas de paneles solares que quieren mostrar
            sus productos, beneficios y atraer clientes comprometidos con la
            energía limpia.
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
            Perfecta para tiendas de productos orgánicos que desean transmitir
            su estilo de vida saludable y vender de manera efectiva.
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
            Una landing para zoológicos que quieren informar sobre sus animales,
            actividades y atraer a más visitantes.
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
            Landing page ideal para hoteles que buscan mostrar sus habitaciones,
            servicios y facilitar reservas en línea.
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
            Diseñada para librerías y editoriales que desean exhibir sus libros,
            autores y fomentar la lectura con estilo.
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
            Landing enfocada en boliches que quieren promocionar sus
            instalaciones, torneos y atraer más jugadores.
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
            Una landing para chats con inteligencia artificial local, perfecta
            para presentar sus funciones y casos de uso en distintos contextos.
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

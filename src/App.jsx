import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./LandingPages/LandingMine/page/Home"; // Home LandingMine Page
import Collection from "./LandingPages/LandingMine/page/Collection"; // Collection LandingMine Page
import About from "./LandingPages/LandingMine/page/About"; // Collection LandingMine Page
import PizzaUp from "./LandingPages/PizzaUp/page/PizzaUp"; // PizzaUp Landing Page
import Gym from "./LandingPages/GYM/page/Gym"; // Gym Landing Page
import MarketingAgency from "./LandingPages/MarketingAgency/page/MarketingAgency"; // MarketingAgency Landing Page
import PigBank from "./LandingPages/PigBank/page/pigBank"; // PigBank Landing Page
import GoodTrip from "./LandingPages/GoodTrip/page/GoodTrip"; // GoodTrip Landing Page
import CooktopiaShop from "./LandingPages/CooktopiaShop/page/CooktopiaShop"; // CooktopiaShop Landing Page
import DreamHouse from "./LandingPages/DreamHouse/page/DreamHouse"; // DreamHouse Landing Page
import WebCall from "./LandingPages/WebCall/page/WebCall"; // WebCall Landing Page
import WLP from "./LandingPages/WLP/page/WLP"; // WLP Landing Page
import Morgana from "./pages/Morgana/Morgana"; // Morgana Landing Page
import GoldTeeth from "./pages/GoldTeeth/GoldTeeth"; // GoldTeeth Landing Page
import CampingNight from "./pages/CampingNight/CampingNight"; // CampingNight Landing Page
import Clover from "./pages/Clover/Clover"; // Clover Landing Page
import OrganicGold from "./pages/OrganicGold/OrganicGold" //OrganicGold Landing page
import ZoologicalWorld from "./pages/ZoologicalWorld/ZoologicalWorld" //ZoologicalWorld Landing page
import JRRoyal from "./pages/JRRoyal/JRRoyal" //JRRoyal Landing page
import CastorBook from "./pages/CastorBook/CastorBook" //CastorBook Landing page 
import Strikes from "./pages/Strikes/Strikers" //Strikes Landing page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        {/*PizzaUp Landing Page  */}
        <Route path="/PizzaUp" element={<PizzaUp />} />
        {/*Gym Landing Page  */}
        <Route path="/Gym" element={<Gym />} />
        {/*MarketingAgency Landing Page  */}
        <Route path="/MarketingAgency" element={<MarketingAgency />} />
        {/*PigBank Landing Page  */}
        <Route path="/PigBank" element={<PigBank />} />
        {/*GoodTrip Landing Page  */}
        <Route path="/GoodTrip" element={<GoodTrip />} />
        {/*CooktopiaShop Landing Page  */}
        <Route path="/CooktopiaShop" element={<CooktopiaShop />} />
        {/*DreamHouse Landing Page  */}
        <Route path="/DreamHouse" element={<DreamHouse />} />
        {/*WebCall Landing Page  */}
        <Route path="/WebCall" element={<WebCall />} />
        {/*WLP Landing Page  */}
        <Route path="/WLP" element={<WLP />} />
        {/*Morgana Landing Page  */}
        <Route path="/Morgana" element={<Morgana />} />
        {/*GoldTeeth Landing Page  */}
        <Route path="/GoldTeeth" element={<GoldTeeth />} />
        {/*CampingNight Landing Page  */}
        <Route path="/CampingNight" element={<CampingNight />} />
        {/*Clover Landing Page  */}
        <Route path="/Clover" element={<Clover />} />
        {/*OrganicGold Landing Page  */}
        <Route path="/OrganicGold" element={<OrganicGold />} />
        {/*ZoologicalWorld Landing page */}
        <Route path="/ZoologicalWorld" element={<ZoologicalWorld />} />
        {/*JRRoyal Landing page */}
        <Route path="/JRRoyal" element={<JRRoyal />} />
        {/*CastorBook Landing page */}
        <Route path="/CastorBook" element={<CastorBook />} />
        {/*Strikes Landing page */}
        <Route path="/Strikes" element={<Strikes />} />
      </Routes>
    </Router>
  );
};

export default App;

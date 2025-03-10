import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingMinePage/Home"; // Home LandingMine Page
import Collection from "./pages/LandingMinePage/Collection"; // Collection LandingMine Page
import AboutLandingMine from "./pages/LandingMinePage/AboutLandigMine"; // Collection LandingMine Page
import PizzaUp from "./pages/PizzaUp/PizzaUp"; // PizzaUp Landing Page
import Gym from "./pages/GYMLandingPage/Gym"; // gym Landing Page
import MarketingAgency from "./pages/MarketingAgency/MarketingAgency"; // MarketingAgency Landing Page
import PigBank from "./pages/PigBankLandingPage/PigBank"; // PigBank Landing Page
import GoodTrip from "./pages/GoodTrip/GoodTrip"; // GoodTrip Landing Page
import CooktopiaShop from "./pages/CooktopiaShop/CooktopiaShop"; // CooktopiaShop Landing Page
import DreamHouse from "./pages/DreamHouse/DreamHouse"; // DreamHouse Landing Page
import WebCall from "./pages/WebCall/WebCall"; // WebCall Landing Page
import WLP from "./pages/WLP/wbp"; // WLP Landing Page
import Morgana from "./pages/Morgana/Morgana"; // Morgana Landing Page
import GoldTeeth from "./pages/GoldTeeth/GoldTeeth"; // GoldTeeth Landing Page
import CampingNight from "./pages/CampingNight/CampingNight"; // CampingNight Landing Page
import Clover from "./pages/Clover/Clover"; // Clover Landing Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/AboutLandingMine" element={<AboutLandingMine />} />
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
      </Routes>
    </Router>
  );
};

export default App;

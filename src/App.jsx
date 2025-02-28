import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingMinePage/Home"; // Home LandingMine Page
import Collection from "./pages/LandingMinePage/Collection"; // Collection LandingMine Page
import AboutLandingMine from "./pages/LandingMinePage/AboutLandigMine"; // Collection LandingMine Page
import PizzaPizza from "./pages/PizzaPizzaLandingPage/PizzaPizza"; // PizzaPizza Landing Page
import Gym from "./pages/GYMLandingPage/Gym"; // gym Landing Page
import MarketingAgency from "./pages/MarketingAgency/MarketingAgency"; // MarketingAgency Landing Page
import PigBank from "./pages/PigBankLandingPage/PigBank"; // PigBank Landing Page
import GoodTrip from "./pages/GoodTrip/GoodTrip"; // GoodTrip Landing Page
import KitchenShop from "./pages/KitchenShop/kitchenShop"; // kitchen Shop Landing Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/AboutLandingMine" element={<AboutLandingMine />} />

        {/*PizzaPizza Landing Page  */}
        <Route path="/PizzaPizza" element={<PizzaPizza />} />
        {/*Gym Landing Page  */}
        <Route path="/Gym" element={<Gym />} />
        {/*MarketingAgency Landing Page  */}
        <Route path="/MarketingAgency" element={<MarketingAgency />} />
        {/*PigBank Landing Page  */}
        <Route path="/PigBank" element={<PigBank />} />
        {/*GoodTrip Landing Page  */}
        <Route path="/GoodTrip" element={<GoodTrip />} />

        {/*kitchenShop Landing Page  */}
        <Route path="/kitchenShop" element={<KitchenShop />} />
      </Routes>
    </Router>
  );
};

export default App;

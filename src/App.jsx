import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingMinePage/Home'; // Home LandingMine Page
import Collection from './pages/LandingMinePage/Collection'; // Collection LandingMine Page
import AboutLandingMine from './pages/LandingMinePage/AboutLandigMine'; // Collection LandingMine Page
import PizzaPizza from './pages/PizzaPizzaLandingPage/PizzaPizza'; // PizzaPizza Landing Page
import Gym from './pages/GYMLandingPage/Gym'; // gym Landing Page


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
        <Route path="/Gym" element={<Gym />} />
      </Routes>
    </Router>
  );
};

export default App;

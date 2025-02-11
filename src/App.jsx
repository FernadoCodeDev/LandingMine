import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingMinePage/Home'; // Home LandingMine Page
import Collection from './pages/LandingMinePage/Collection'; // Collection LandingMine Page
import AboutLandingMine from './pages/LandingMinePage/AboutLandigMine'; // Collection LandingMine Page


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/AboutLandingMine" element={<AboutLandingMine />} />
      </Routes>
    </Router>
  );
};

export default App;

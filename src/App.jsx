import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingMine from './pages/LandingMine'; // Home Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for each page */}
        <Route path="/" element={<LandingMine />} />
      </Routes>
    </Router>
  );
};

export default App;

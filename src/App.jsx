import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos React Router
import Home from './pages/Home'; // Página de inicio

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define las rutas para cada página */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

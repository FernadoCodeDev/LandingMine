import React from "react";
import HeaderGym from "./components/HeaderGym";
import MainGym from "./components/Main";
import Footer from "./components/Footer";

const GymHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderGym />
      <MainGym />
      <Footer />

    </div>
  );
};

export default GymHomePage;

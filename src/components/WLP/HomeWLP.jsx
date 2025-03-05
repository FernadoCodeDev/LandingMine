import React from "react";
import HeaderWLP from "./components/HeaderWLP";
import MainWLP from "./components/Main";
import Footer from "./components/Footer";

const WLPHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWLP />
      <MainWLP />
      <Footer />
    </div>
  );
};

export default WLPHomePage;

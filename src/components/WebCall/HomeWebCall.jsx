import React from "react";
import HeaderWC from "./components/HeaderWC";
import MainWC from "./components/Main";
import Footer from "./components/Footer";

const WCHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWC />
      <MainWC />
      <Footer />

    </div>
  );
};

export default WCHomePage;

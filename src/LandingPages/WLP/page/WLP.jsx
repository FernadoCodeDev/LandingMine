import React from "react";
import HeaderWLP from "../components/layout/HeaderWLP";
import MainWLP from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const WLP = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWLP />
      <MainWLP />
      <Footer />
    </div>
  );
};

export default WLP;

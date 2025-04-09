import React from "react";
import HeaderMa from "../components/layout/Header";
import MainMA from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const MarketingAgency = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMa />
      <MainMA />
      <Footer />

    </div>
  );
};

export default MarketingAgency;

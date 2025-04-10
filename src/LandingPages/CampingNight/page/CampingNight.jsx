import React from "react";
import HeaderCN from "../components/layout/HeaderCN";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const CampingNight = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCN />
      <Main />
      <Footer />
    </div>
  );
};

export default CampingNight;

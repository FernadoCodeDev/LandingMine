import React from "react";
import HeaderCN from "./components/HeaderCN";
import Main from "./components/Main";
import Footer from "./components/Footer";

const CampingNightHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCN />
      <Main />
      <Footer />
    </div>
  );
};

export default CampingNightHome;

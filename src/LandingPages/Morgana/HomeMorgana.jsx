import React from "react";
import HeaderDH from "./components/HeaderM";
import MainM from "./components/Main";
import Footer from "./components/Footer";

const MorganaHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDH />
      <MainM />
      <Footer />

    </div>
  );
};

export default MorganaHomePage;

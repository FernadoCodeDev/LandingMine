import React from "react";
import HeaderPB from "../components/layout/Header";
import MainPB from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const PigBank = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPB />
      <MainPB />
      <Footer />

    </div>
  );
};

export default PigBank;

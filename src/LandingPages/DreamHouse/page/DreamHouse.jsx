import React from "react";
import HeaderDH from "../components/layout/HeaderDH";
import MainDH from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const DreamHouse = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDH />
      <MainDH />
      <Footer />

    </div>
  );
};

export default DreamHouse;

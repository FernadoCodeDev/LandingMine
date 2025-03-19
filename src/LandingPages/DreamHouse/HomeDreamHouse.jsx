import React from "react";
import HeaderDH from "./components/HeaderDH";
import MainDH from "./components/Main";
import Footer from "./components/Footer";

const DHHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDH />
      <MainDH />
      <Footer />

    </div>
  );
};

export default DHHomePage;

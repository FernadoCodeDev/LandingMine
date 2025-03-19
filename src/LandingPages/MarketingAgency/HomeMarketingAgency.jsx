import React from "react";
import HeaderMa from "./components/Header";
import MainMA from "./components/Main";
import Footer from "./components/Footer";

const HomeMA = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMa />
      <MainMA />
      <Footer />

    </div>
  );
};

export default HomeMA;

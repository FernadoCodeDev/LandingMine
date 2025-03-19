import React from "react";
import HeaderPB from "./components/Header";
import MainPB from "./components/Main";
import Footer from "./components/Footer";

const HomePB = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPB />
      <MainPB />
      <Footer />

    </div>
  );
};

export default HomePB;

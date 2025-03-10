import React from "react";
import HeaderClover from "./components/HeaderClover";
import Main from "./components/Main";
import Footer from "./components/Footer";

const CloverHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderClover />
      <Main />
      <Footer />

    </div>
  );
};

export default CloverHomePage;

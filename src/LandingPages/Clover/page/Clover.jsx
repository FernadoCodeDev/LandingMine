import React from "react";
import HeaderClover from "../components/layout/HeaderClover";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const Clover = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderClover />
      <Main />
      <Footer />

    </div>
  );
};

export default Clover;

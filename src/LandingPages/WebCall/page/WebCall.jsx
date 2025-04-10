import React from "react";
import HeaderWC from "../components/layout/HeaderWC";
import MainWC from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const WebCall = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWC />
      <MainWC />
      <Footer />
    </div>
  );
};

export default WebCall;

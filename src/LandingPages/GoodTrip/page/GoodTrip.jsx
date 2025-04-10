import React from "react";
import HeaderGoodTrip from "../components/layout/HeaderGoodTrip";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const GoodTrip = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderGoodTrip />
      <Main />
      <Footer />

    </div>
  );
};

export default GoodTrip;

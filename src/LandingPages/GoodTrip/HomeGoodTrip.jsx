import React from "react";
import HeaderGoodTrip from "./components/HeaderGoodTrip";
import Main from "./components/Main";
import Footer from "./components/Footer";

const GoodTripHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderGoodTrip />
      <Main />
      <Footer />

    </div>
  );
};

export default GoodTripHome;

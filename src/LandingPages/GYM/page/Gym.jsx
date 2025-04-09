import React from "react";
import HeaderGym from "../components/layout/HeaderGym";
import MainGym from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const Gym = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderGym />
      <MainGym />
      <Footer />

    </div>
  );
};

export default Gym;

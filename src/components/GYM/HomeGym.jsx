import React from "react";
import HeaderGym from "./components/HeaderGym";
import MainGym from "./components/Main";

const GymHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderGym />
      <MainGym />

    </div>
  );
};

export default GymHomePage;

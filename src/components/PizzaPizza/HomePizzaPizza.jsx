import React from "react";
import DarkMode from "../GlobalComponents/DarkMode";
import MobileMenu from "../GlobalComponents/MobileMenu";

const HomePage = () => {
  return (
    <div>
      
      <MobileMenu />
      <DarkMode />

      <h1>Pizza Pizza</h1>
    </div>
  );
};

export default HomePage;

import React from "react";
import HeaderCooktopiaShop from "../components/layout/HeaderCooktopiaShop";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const CooktopiaShop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCooktopiaShop />
      <Main />
      <Footer />
    </div>
  );
};

export default CooktopiaShop;

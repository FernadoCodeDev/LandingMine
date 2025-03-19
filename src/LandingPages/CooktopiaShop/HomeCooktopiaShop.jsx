import React from "react";
import HeaderCooktopiaShop from "./components/HeaderCooktopiaShop";
import Main from "./components/Main";
import Footer from "./components/Footer";

const CooktopiaShopHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCooktopiaShop />
      <Main />
      <Footer />
    </div>
  );
};

export default CooktopiaShopHome;

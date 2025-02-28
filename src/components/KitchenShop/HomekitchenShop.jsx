import React from "react";
import HeaderKitchenshop from "./components/HeaderKitchenshop";
import Main from "./components/Main";
import Footer from "./components/Footer";

const KitchenshopHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderKitchenshop />
      <Main />
      <Footer />

    </div>
  );
};

export default KitchenshopHome;

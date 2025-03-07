import React from "react";
import HeaderGT from "./components/HeaderGT";
import Main from "./components/Main";
import Footer from "./components/Footer";

const GTHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderGT /> 
      <Main />
      <Footer />

    </div>
  );
};

export default GTHomePage;

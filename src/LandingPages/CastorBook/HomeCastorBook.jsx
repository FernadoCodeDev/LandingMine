import React from "react";
import HeaderCB from "./components/HeaderCB";
import Main from "./components/Main";
import Footer from "./components/Footer";

const CastorBookHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCB />
      <Main />
      <Footer />
    </div>
  );
};

export default CastorBookHome;

import React from "react";
import HeaderCB from "../components/layout/HeaderCB";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const CastorBook = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCB />
      <Main />
      <Footer />
    </div>
  );
};

export default CastorBook;

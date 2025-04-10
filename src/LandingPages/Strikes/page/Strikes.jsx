import React from "react";
import HeaderStrikes from "../components/layout/HeaderStrikes";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const Strikes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderStrikes />
      <Main/>
      <Footer />
    </div>
  );
};
export default Strikes;

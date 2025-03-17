import React from "react";
import HeaderStrikes from "./components/HeaderStrikes";
import Main from "./components/Main";
import Footer from "./components/Footer";

const StrikesHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderStrikes />
      <Main/>
      <Footer />
    </div>
  );
};
export default StrikesHomePage;

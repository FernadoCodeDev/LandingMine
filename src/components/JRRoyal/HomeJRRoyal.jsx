import React from "react";
import HeaderJR from "./components/HeaderJR";
import Main from "./components/Main";
import Footer from "./components/Footer";

const JRHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderJR />
      <Main/>
      <Footer />
    </div>
  );
};
export default JRHomePage;

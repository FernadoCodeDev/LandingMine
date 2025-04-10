import React from "react";
import HeaderJR from "../components/layout/HeaderJR";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

const JRRoyal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderJR />
      <Main/>
      <Footer />
    </div>
  );
};
export default JRRoyal;

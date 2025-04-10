  import React from "react";
  import HeaderZW from "../components/layout/HeaderZW";
  import Main from "../components/layout/Main";
  import Footer from "../components/layout/Footer";
  
  const ZoologicalWorld = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <HeaderZW />
        <Main/>
        <Footer />
      </div>
    );
  };
  export default ZoologicalWorld;
  
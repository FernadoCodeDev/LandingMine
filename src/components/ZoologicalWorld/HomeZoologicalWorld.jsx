  import React from "react";
  import HeaderZW from "./components/HeaderZW";
  import Main from "./components/Main";
  import Footer from "./components/Footer";
  
  const ZWHomePage = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <HeaderZW />
        <Main/>
        <Footer />
      </div>
    );
  };
  
  export default ZWHomePage;
  
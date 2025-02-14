import React from "react";
import HeaderPizzaPizza from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPizzaPizza />
      <Main />
      <Footer />

    </div>
  );
};

export default HomePage;

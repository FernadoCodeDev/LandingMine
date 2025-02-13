import React from "react";
import HeaderPizzaPizza from "./components/Header";
import Main from "./components/Main";


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPizzaPizza />
      <Main />

    </div>
  );
};

export default HomePage;

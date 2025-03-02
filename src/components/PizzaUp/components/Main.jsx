import React from "react";
import Advertising from "./Advertising";
import SearchBar from "./SearchBar";
import Content from "./Content";


const Main = () => {
  return (
    <main className="w-full h-full bg-gray-200 dark:bg-neutral-900">
        <Advertising />
        <SearchBar />
        <Content />

    </main>
  );
};

export default Main;

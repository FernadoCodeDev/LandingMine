import React from "react";
import Advertising from "../section/Advertising";
import SearchBar from "../section/SearchBar";
import Content from "../section/Content";


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

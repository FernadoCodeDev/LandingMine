import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const MainGym = () => {
  return (
    <main className="w-full bg-neutral-800">
      <section className="p-2">
        <FirstSection />
        <SecondSection />
      </section>
    </main>
  );
};

export default MainGym;

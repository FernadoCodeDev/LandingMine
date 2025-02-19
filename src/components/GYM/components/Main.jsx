import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const MainGym = () => {
  return (
    <main className="w-full bg-neutral-800">
      <section className="">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </section>
    </main>
  );
};

export default MainGym;

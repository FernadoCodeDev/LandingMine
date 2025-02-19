import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

const MainGym = () => {
  return (
    <main className="w-full bg-neutral-800">
      <section className="">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </section>
    </main>
  );
};

export default MainGym;

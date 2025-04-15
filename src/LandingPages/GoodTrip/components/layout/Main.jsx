import React from "react";
import FirstSection from "../section/FirstSection";
import SecondSection from "../section/SecondSection";
import ThirdSection from "../section/ThirdSection";
import FourthSection from "../section/FourthSection";

const MainGT = () => {
  return (
    <main>
      <section>
        <FirstSection/>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </section>
    </main>
  );
};

export default MainGT;
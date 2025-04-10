import React from "react";
import FirstSection from "../section/FirstSection";
import SecondSection from "../section/SecondSection";
import ThirdSection from "../section/ThirdSection";

const MainWC = () => {
  return (
    <main>
      <section>
        <FirstSection/>
        <SecondSection />
        <ThirdSection />
      </section>
    </main>
  );
};

export default MainWC;
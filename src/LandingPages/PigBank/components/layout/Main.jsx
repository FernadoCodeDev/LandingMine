import React from "react";
import FirstSection from "../section/FirtstSection";
import SecondSection from "../section/SecondSection";
import ThirdSection from "../section/ThirdSection";

const MainPB = () => {
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

export default MainPB;
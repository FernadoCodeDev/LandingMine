import React from "react";
import FirstSection from "../sections/FirstSection";
import SecondSection from "../sections/SecondSection";
import ThirdSection from "../sections/ThirdSection";
import FourthSection from "../sections/FourthSection";

const MainWLP = () => {
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

export default MainWLP;
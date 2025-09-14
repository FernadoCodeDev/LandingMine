import React from "react";
import FirstSection from "../sections/FirstSection";
import SecondSection from "../sections/SecondSection";
import ThirdSection from "../sections/ThirdSection";
import FourthSection from "../sections/FourthSection";
import FifthSection from "../sections/FifthSection";


const MainStrikes = () => {
  return (
    <main>
      <section className="flex flex-col gap-4 p-4 bg-beige-300 dark:bg-slate-950">
        <FirstSection/>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </section>
    </main>
  );
};

export default MainStrikes;
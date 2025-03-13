import React from "react";
import imgN3 from "../img/imgN3.webp";

const SecondSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-beige-100 dark:bg-neutral-900 md:text-2xl dark:text-white">
      <div className="m-auto max-w-[90rem] grid grid-cols-1 gap-4 md:gap-16 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-1 ">
          <h1 className="col-span-2 font-serif text-xl font-bold text-center md:text-5xl">
            CORPORATE
          </h1>
          <h1 className="col-start-2 font-serif text-xl font-bold text-center md:text-5xl">
            EVENTS{" "}
          </h1>
        </div>

        <div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            suscipit magnam velit commodi quibusdam debitis quis aspernatur
            earum eos, nesciunt iure impedit itaque eveniet mollitia totam
            deserunt provident. Tempora, voluptatum?
          </p>
        </div>

        <div className="">
          <img src={imgN3} alt="imgN3" className="w-full h-auto" />
        </div>

        <div className="flex flex-col items-center justify-start gap-4 ">
          <p className=" max-w-[40rem] text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            atque commodi deleniti exercitationem tempora perferendis quas.
            Maiores in necessitatibus asperiores sequi dolores rem earum!
            Quibusdam excepturi consequatur reprehenderit iusto necessitatibus.
          </p>

          <button className="w-full p-2 font-serif font-bold text-blue-900 transition-all duration-700 ease-out bg-transparent border-2 border-blue-900 rounded-xl md:rounded-full md:w-24 md:h-24 hover:bg-blue-900 hover:text-beige-100 dark:border-beige-100 dark:hover:bg-beige-100 dark:hover:text-blue-900">
            TEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

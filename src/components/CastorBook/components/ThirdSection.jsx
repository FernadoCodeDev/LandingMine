import React from "react";
import imgN5 from "../img/imgN5.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-beige-400 lg:text-2xl ">
      <div className="p-4 m-auto max-w-[90rem] grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div className="order-2 md:order-1">
          <img src={imgN5} alt="imgN5" className="w-full h-auto" />
        </div>

        <div className="flex flex-col items-center justify-center order-1 md:order-2">
          <h1 className="font-bold 2xl md:text-4xl">TEXT</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in
          nam, est optio ex quaerat delectus architecto! Nobis natus ratione
          velit aspernatur deleniti, voluptatum error cumque est aperiam. Alias,
          accusamus!
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

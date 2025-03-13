import React from "react";
import imgN4 from "../img/imgN4.webp";
import imgN5 from "../img/imgN5.webp";
import imgN6 from "../img/imgN6.webp";
import imgN7 from "../img/imgN7.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen text-black items-stra bg-slate-950 md:text-2xl dark:text-white ">
      <div className="w-full bg-beige-100 dark:bg-neutral-900">
        <div className="grid grid-cols-1 gap-4 p-2 m-auto md:grid-cols-2 max-w-">
          <div className="grid grid-cols-2 gap-1 ">
            <h1 className="col-span-2 font-serif text-xl font-bold text-center md:text-5xl">
              texttextt
            </h1>
            <h1 className="col-start-2 font-serif text-xl font-bold text-center md:text-5xl">
              text{" "}
            </h1>
          </div>

          <div className="grid grid-cols-2">
            <button className="w-full col-span-2 p-2 font-serif font-bold text-blue-900 transition-all duration-700 ease-out bg-transparent border-2 border-blue-900 md:col-span-1 md:col-start-2 rounded-xl md:rounded-full md:w-32 md:h-32 hover:bg-blue-900 hover:text-beige-100 dark:border-beige-100 dark:hover:bg-beige-100 dark:hover:text-blue-900">
              TEXT
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2">
            <div className="shadow-xl">
              <img src={imgN4} alt="imgN4" className="w-full h-auto" />
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-beige-200 dark:bg-neutral-800">
                <h1 className="font-bold">text</h1>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus quia corporis molestias deleniti quibusdam ducimus
                  laboriosam similique earum quisquam et saepe sed doloremque
                  ut, repudiandae fugiat pariatur deserunt, non omnis.
                </p>
              </div>
            </div>

            <div className="shadow-xl">
              <img src={imgN5} alt="imgN5" className="w-full h-auto" />
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-beige-200 dark:bg-neutral-800">
                <h1 className="font-bold">text</h1>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus quia corporis molestias deleniti quibusdam ducimus
                  laboriosam similique earum quisquam et saepe sed doloremque
                  ut, repudiandae fugiat pariatur deserunt, non omnis.
                </p>
              </div>
            </div>

            <div className="shadow-xl">
              <img src={imgN6} alt="imgN6" className="w-full h-auto" />
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-beige-200 dark:bg-neutral-800">
                <h1 className="font-bold">text</h1>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus quia corporis molestias deleniti quibusdam ducimus
                  laboriosam similique earum quisquam et saepe sed doloremque
                  ut, repudiandae fugiat pariatur deserunt, non omnis.
                </p>
              </div>
            </div>

            <div className="shadow-xl">
              <img src={imgN7} alt="imgN7" className="w-full h-auto" />
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-beige-200 dark:bg-neutral-800">
                <h1 className="font-bold">text</h1>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus quia corporis molestias deleniti quibusdam ducimus
                  laboriosam similique earum quisquam et saepe sed doloremque
                  ut, repudiandae fugiat pariatur deserunt, non omnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center w-full min-h-screen p-4 bg-beige-100 dark:bg-neutral-900"
        style={{ clipPath: "ellipse(100% 40% at 50% 0%)" }}
      ></div>
    </div>
  );
};

export default ThirdSection;

import React from "react";

const SecondSection = () => {
  return (
    <div className="relative w-full min-h-screen p-2 text-gray-900 bg-purple-300">
      <div className="pt-20 md:pt-32 m-auto flex flex-row justify-between w-full border-b-2 my-2 border-gray-900 p-2 max-w-[100rem]">
        <p className="text-5xl font-fantasy ">SCHEDULE</p>

        <div className="flex flex-row items-end justify-end gap-2 ]">
          <p className="text-xl ">VIEW ALL SCHEDULE</p>
          <div className="flex flex-col items-center justify-center w-8 h-8 p-1 border border-gray-900 rounded-full cursor-pointer">
            <svg
              class="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1"
              data-slot="icon"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-[100rem] grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-3 md:col-start-3 justify-self-end">
          <div className="flex flex-col p-2 bg-amber-50">
            <h1 className="text-purple-300 font-fantasy md:text-3xl">DAY 01</h1>
            <p className="text-purple-300 ">12 March - Thursday</p>
          </div>

          <div className="flex flex-col p-2 border border-amber-50">
            <h1 className="text-amber-50 font-fantasy md:text-3xl">DAY 02</h1>
            <p className="text-amber-50 ">14 March - Saturday</p>
          </div>

          <div className="flex flex-col p-2 border border-amber-50">
            <h1 className="text-amber-50 font-fantasy md:text-3xl">DAY 01</h1>
            <p className="text-amber-50 ">16 March - Sunday</p>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-[100rem] mt-4 grid grid-cols-1 gap-2">
        <div className="flex flex-row justify-start gap-4 p-4 bg-gray-900">
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            9:00
          </h1>
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            DOORS OPEN
          </h1>
        </div>

        <div className="flex flex-row justify-start gap-4 p-4 bg-gray-900">
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            9:30
          </h1>
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            INTRO & WELCOME
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-5 bg-amber-50">
          <h1 className="font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            10:00
          </h1>
          <h1 className="font-sans font-bold text-center text-purple-400 md:text-start md:text-3xl">
            T SHAPE DESIGNER
          </h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            blanditiis assumenda cupiditate facilis omnis, repellendus
            reiciendis aliquid vero aut vel.
          </p>

          <div className="w-4 h-4 bg-red-600 rounded-full"></div>

          <div className="flex flex-col justify-center col-span-2 text-center md:col-span-1">
          <h1 className="font-sans font-bold text-purple-400 md:text-3xl">
            NAME LAST NAME
          </h1>
          <p>DESCRIPTION</p>
          </div>
        </div>

        <div className="flex flex-row justify-start gap-4 p-4 bg-gray-900 ">
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            12:30
          </h1>
          <h1 className="font-sans font-bold md:text-3xl text-amber-50">
            LUNCH BREAK
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

import React from "react";
import imgN3 from "../img/imgN3.webp";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 text-black bg-beige-50 dark:text-white dark:bg-neutral-900">
      <h1 className="text-center font-bold text-2xl max-w-[70rem]">TEXT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-auto max-w-[80rem]">
        <div className="grid grid-cols-1 gap-2">
          <details className="p-2 bg-beige-100">
            <summary>TEXT</summary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptates, impedit doloribus quas, quos rerum et praesentium
            corporis omnis inventore distinctio nulla delectus totam numquam.
            Quaerat cum nemo dolor quae!
          </details>

          <details className="p-2 bg-beige-100">
            <summary>TEXT</summary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptates, impedit doloribus quas, quos rerum et praesentium
            corporis omnis inventore distinctio nulla delectus totam numquam.
            Quaerat cum nemo dolor quae!
          </details>

          <details className="p-2 bg-beige-100">
            <summary>TEXT</summary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptates, impedit doloribus quas, quos rerum et praesentium
            corporis omnis inventore distinctio nulla delectus totam numquam.
            Quaerat cum nemo dolor quae!
          </details>

          <details className="p-2 bg-beige-100">
            <summary>TEXT</summary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptates, impedit doloribus quas, quos rerum et praesentium
            corporis omnis inventore distinctio nulla delectus totam numquam.
            Quaerat cum nemo dolor quae!
          </details>
        </div>

        <div className="">
          <img src={imgN3} alt="imgN3" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

import React from "react";
import { Trans, useTranslation } from "react-i18next";

const ButtonLanding = () => {
  const { t } = useTranslation();
  return (
    <button className="relative z-10 inline-flex items-center justify-center px-4 px-8 py-2 py-3 m-2 overflow-hidden text-sm font-semibold text-black bg-white bg-blue-800 border border-2 rounded-md rounded-lg shadow-sm dark:bg-neutral-700 isolation-auto border-blue-950 dark:border-orange-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-blue-900 dark:before:bg-orange-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 dark:text-white gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
      <Trans i18nKey="buttonlanding" components={{}} />
    </button>
  );
};
export default ButtonLanding;

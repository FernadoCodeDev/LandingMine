import React from "react";
import { Trans, useTranslation } from "react-i18next";

const PersonalPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full p-5 bg-gray-200 rounded-lg">
        <div className="flex">
          <div className="flex items-center justify-center w-10 p-5 bg-white border-r border-gray-200 rounded-tl-lg rounded-bl-lg">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="absolute w-5 transition pointer-events-none fill-gray-500"
            >
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
            </svg>
          </div>
          <input
            type="text"
            disabled
            className="w-full pl-2 text-base font-semibold bg-white outline-0"
            placeholder="fercode.netlify.app/"
          />
          <a
            href="https://fercode.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="p-2 font-semibold text-white transition-colors bg-blue-500 rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-blue-800"
            >
              <Trans i18nKey="buttonSearch" components={{}} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default PersonalPage;

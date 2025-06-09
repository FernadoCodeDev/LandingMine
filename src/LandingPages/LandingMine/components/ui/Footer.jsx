import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-4 text-center text-white bg-blue-950">
      <p>
        <Trans
          i18nKey="footer"
          components={{
            link: (
              <a
                href="https://fercode.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-bold text-white transition duration-500 ease-in-out hover:text-orange-300"
              />
            ),
          }}
        />
      </p>
    </footer>
  );
};

export default Footer;

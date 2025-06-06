import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelectorButton = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "es";
    setIsEnglish(savedLang === "en");
    i18n.changeLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = isEnglish ? "es" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <label className="relative inline-flex items-center w-full cursor-pointer ">
      <input
        className="sr-only peer"
        type="checkbox"
        checked={isEnglish}
        onChange={toggleLanguage}
      />
      <div className="peer relative w-full h-14 bg-blue-300 rounded-br-2xl rounded-tl-2xl outline-none duration-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500 after:content-['Español'] peer-checked:after:content-['English'] after:absolute after:top-1 after:left-1 after:h-12 after:w-1/2 after:bg-white after:rounded-br-xl after:rounded-tl-xl after:flex after:justify-center after:items-center after:text-sky-800 after:font-bold after:transition-transform after:duration-500 peer-checked:after:translate-x-[93%]"></div>
    </label>
  );
};
export default LanguageSelectorButton;

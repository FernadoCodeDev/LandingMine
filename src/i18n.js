import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const initI18nFor = async (landingName) => {

   const savedLang = localStorage.getItem("language") || "es";

  const translationES = await import(
    `./LandingPages/${landingName}/locales/es/translation`
  );
  const translationEN = await import(
    `./LandingPages/${landingName}/locales/en/translation`
  );

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        es: { translation: translationES.default },
        en: { translation: translationEN.default },
      },
      lng: savedLang,
      fallbackLng: "es",
      interpolation: {
        escapeValue: false,
      },
    });

  return i18n;
};

export { i18n };

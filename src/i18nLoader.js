import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { initI18nFor } from "./i18n";

const i18nInitializedLandings = new Set();

const getLandingNameFromPath = (pathname) => {
  const landing = pathname.split("/")[1].toLowerCase();; 

  const mainRoutes = ["", "about", "collection"]

  return mainRoutes.includes(landing) ? "LandingMine" : landing;
};

const I18nLoader = ({ children }) => {
  const location = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const landingName = getLandingNameFromPath(location.pathname);

    const initialize = async () => {
      if (!i18nInitializedLandings.has(landingName)) {
        try {
          await initI18nFor(landingName);
          i18nInitializedLandings.add(landingName);
        } catch (error) {
          console.error(`No se pudo cargar i18n para ${landingName}:`, error);
        }
      }
      setReady(true);
    };

    setReady(false);
    initialize();
  }, [location.pathname]);

  if (!ready) return null;

  return children;
};

export default I18nLoader;

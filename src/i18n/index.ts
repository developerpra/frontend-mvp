import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/common.json";
import es from "./es/common.json";
import nl from "./nl/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    nl: { translation: nl },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

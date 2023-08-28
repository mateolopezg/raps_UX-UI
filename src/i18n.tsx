import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "es", // Default language
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
});

export default i18n;

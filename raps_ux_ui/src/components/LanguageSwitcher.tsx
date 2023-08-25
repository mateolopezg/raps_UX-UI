import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation(); // Use the useTranslation hook
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <button onClick={() => changeLanguage("es")}>ES</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;

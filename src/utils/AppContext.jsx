import React, { createContext, useContext, useState } from "react";
import en from "../localization/en.json";
import ru from "../localization/ru.json";

const AppContext = createContext();

if (!localStorage.getItem("isDark")) {
  localStorage.setItem("isDark", "true");
}

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "en");
}

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const translations = { en, ru };
  const t = (key) => translations[lang][key] || key;

  return (
    <AppContext.Provider value={{ isDark, setIsDark, lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

import React, { createContext, useContext, useState } from "react";
import en from "../localization/en.json";
import ru from "../localization/ru.json";

const AppContext = createContext();

if (!localStorage.getItem("isDark")) {
  localStorage.setItem("isDark", "true");
}

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );
  const [lang, setLang] = useState("en");
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

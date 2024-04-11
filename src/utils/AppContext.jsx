import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

if (!localStorage.getItem("isDark")) {
  localStorage.setItem("isDark", "true");
}

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );
  const [lang, setLang] = useState("en");

  return (
    <AppContext.Provider value={{ isDark, setIsDark, lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

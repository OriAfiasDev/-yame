"use client";

import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";

export type Lang = "he" | "en" | "ar" | "ru" | "fr";

interface Props {
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

const LanguageContext = createContext<Props>({
  language: "he",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Lang>("he");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

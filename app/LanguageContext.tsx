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
  isRtl: boolean;
}

const LanguageContext = createContext<Props>({
  language: "he",
  setLanguage: () => {},
  isRtl: true,
});

const rtlLangs = ["he", "ar"];

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Lang>("he");

  const isRtl = rtlLangs.includes(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl }}>
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

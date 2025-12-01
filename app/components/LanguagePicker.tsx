"use client";

import { Lang, useLanguage } from "../LanguageContext";

const languages: { lang: Lang; flag: string }[] = [
  {
    lang: "he",
    flag: "🇮🇱",
  },
  {
    lang: "en",
    flag: "🇺🇸",
  },
  {
    lang: "ru",
    flag: "🇷🇺",
  },
  {
    lang: "ar",
    flag: "🇸🇦",
  },
  {
    lang: "fr",
    flag: "🇫🇷",
  },
];

export const LanguagePicker = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="z-[999] w-[64px]">
      <div className="top-4 right-4 fixed">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Lang)}
          className="bg-blue-100 py-2 pr-8 pl-3 rounded focus:outline-none w-full text-xl transition duration-300 appearance-none cursor-pointer ease"
        >
          {languages.map(({ lang, flag }) => (
            <option
              key={lang}
              value={lang}
              className="flex justify-center items-center"
            >
              {flag}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="top-3 right-1 absolute ml-1 w-5 h-5 text-slate-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
};

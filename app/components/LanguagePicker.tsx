"use client";

import Image from "next/image";
import { Lang, useLanguage } from "../LanguageContext";

const languages: { lang: Lang; flag: string }[] = [
  {
    lang: "he",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
  },
  {
    lang: "en",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/330px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png",
  },
  {
    lang: "ru",
    flag: "https://www.shutterstock.com/image-illustration/russia-flag-national-rectangular-cloth-260nw-2339861843.jpg",
  },
  {
    lang: "ar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League.svg",
  },
  {
    lang: "fr",
    flag: "https://www.flagdetective.com/images/download/france.jpg",
  },
];

export const LanguagePicker = () => {
  const { language, setLanguage } = useLanguage();

  console.log({ language });

  return (
    <div className="flex gap-2 w-full h-10">
      {languages.map(({ lang, flag }) => (
        <div
          className="cursor-pointer"
          key={lang}
          onClick={() => {
            console.log("click", lang);
            setLanguage(lang);
          }}
        >
          <img src={flag} height={10} width={30} alt={lang} />
        </div>
      ))}
    </div>
  );
};

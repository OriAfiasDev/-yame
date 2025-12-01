"use client";

import { useState } from "react";
import { Dish } from "../components/Dish";
import { Category } from "../components/Category";
import { TCategory, TDish } from "./types";
import { DishModal } from "../components/DishModal";
import { useLanguage } from "../LanguageContext";
import { LanguagePicker } from "../components/LanguagePicker";

export default function MenuClient({ menuData }: { menuData: TCategory[] }) {
  const { language, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedDish, setSelectedDish] = useState<TDish | undefined>(
    undefined
  );

  const category = menuData.find(({ id }) => id === selectedCategory);

  const containerClass = selectedCategory
    ? "flex items-center lg:w-3/4 w-full overflow-x-scroll gap-2 p-6 touch-auto"
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4";

  return (
    <div
      className="flex flex-col items-center w-screen"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <LanguagePicker />
      <div className={containerClass}>
        {menuData
          .sort((a, b) => (a.order || 0) - (b.order || 0))
          .map((category) => {
            return (
              <Category
                key={category.id}
                {...category}
                isSelected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                fullView={!selectedCategory}
              />
            );
          })}
      </div>

      <div className="flex flex-col gap-3 px-6 w-full">
        {category?.description && (
          <div className="bg-yame shadow-2xl py-2 rounded-lg w-full text-white text-center">
            {category.description[language]}
          </div>
        )}
        {category &&
          category?.dishes.map((dish) => (
            <Dish key={dish.id} onClick={setSelectedDish} {...dish} />
          ))}
      </div>

      <DishModal
        isOpen={!!selectedDish}
        onClose={() => setSelectedDish(undefined)}
        dish={selectedDish}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { dataSet } from "./data";
import { Dish } from "../components/Dish";
import { Category } from "../components/Category";

export default function Menu() {
  const [selected, setSelected] = useState<string>("");

  const category = dataSet.find(({ id }) => id === selected);

  const containerClass = selected
    ? "flex items-center lg:w-3/4 w-full overflow-x-scroll gap-2 p-6 touch-auto"
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4";

  return (
    <div className="flex flex-col items-center w-screen" dir="rtl">
      <div className={containerClass}>
        {dataSet.map((category) => {
          return (
            <Category
              key={category.id}
              {...category}
              isSelected={selected === category.id}
              onClick={() => setSelected(category.id)}
              fullView={!selected}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-3 px-6 w-full">
        {category?.description && (
          <div className="bg-yame shadow-2xl py-2 rounded-lg w-full text-white text-center">
            {category.description}
          </div>
        )}
        {category &&
          category?.dishes.map((dish) => <Dish key={dish.id} {...dish} />)}
      </div>
    </div>
  );
}

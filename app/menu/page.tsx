"use client";

import { useState } from "react";
import { dataSet } from "./data";
import { Dish } from "../components/Dish";

export default function Menu() {
  const [selected, setSelected] = useState<string>("");

  const category = dataSet.find(({ id }) => id === selected);

  return (
    <div className="flex flex-col gap-12 items-center w-screen" dir="rtl">
      <div className="flex items-center lg:w-3/4 w-full overflow-scroll gap-2 p-6">
        {dataSet.map((category) => {
          return (
            <div
              key={category.id}
              onClick={() => setSelected(category.id)}
              className="cursor-pointer h-24 w-48 px-6 text-center flex items-center justify-center rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 hover:scale-125 transition-all aria-selected:h-28 aria-selected:w-28"
              aria-selected={selected === category.id}
            >
              {category.name}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 w-full px-6">
        {category?.description && (
          <div className="text-center w-full py-2 bg-yame rounded-lg text-white shadow-2xl">
            {category.description}
          </div>
        )}
        {category &&
          category?.dishes.map((dish) => <Dish key={dish.id} {...dish} />)}
      </div>
    </div>
  );
}

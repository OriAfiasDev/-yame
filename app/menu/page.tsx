"use client";

import { useState } from "react";
import { dataSet } from "./data";
import { Dish } from "../components/Dish";

export default function Menu() {
  const [selected, setSelected] = useState<string>("");

  const category = dataSet.find(({ id }) => id === selected);

  const className = selected
    ? "flex items-center lg:w-3/4 w-full overflow-x-scroll gap-2 p-6 "
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4";

  return (
    <div className="flex flex-col items-center gap-12 w-screen" dir="rtl">
      <div className={className}>
        {dataSet.map((category) => {
          return (
            <div
              key={category.id}
              onClick={() => setSelected(category.id)}
              className={`bg-[url(https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4)]  rounded-2xl shadow-xl ${
                selected ? "min-w-24" : "w-48"
              } ${
                selected ? "h-24" : "h-48"
              } aria-selected:w-28 aria-selected:h-28  hover:scale-125 transition-all cursor-pointer bg-cover`}
              aria-selected={selected === category.id}
            >
              <div className="flex justify-center items-center bg-black opacity-75 rounded-2xl w-full h-full text-white text-2xl text-center">
                {category.name}
              </div>
            </div>
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

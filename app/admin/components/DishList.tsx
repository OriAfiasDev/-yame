"use client";

import { TDish } from "@/app/menu/types";

interface DishListProps {
  dishes: TDish[];
  onEdit: (dish: TDish) => void;
  onRequestDelete: (dishId: string) => void;
}

export function DishList({ dishes, onEdit, onRequestDelete }: DishListProps) {
  return (
    <div className="space-y-4">
      {dishes.length === 0 ? (
        <p className="text-gray-600">אין מנות בקטגוריה זו</p>
      ) : (
        dishes.map((dish) => (
          <div
            key={dish.id}
            className="flex justify-between items-center bg-white/80 shadow-lg p-3 border border-gray-200 rounded-2xl"
          >
            <div className="flex-1">
              <h4 className="font-medium text-black">{dish.name.he}</h4>
              <p className="text-gray-700 text-sm">
                ₪{dish.price} • סדר: {dish.order ?? "—"}
                {dish.vegan && " • צמחוני"}
                {dish.spicy && " • חריף"}
                {dish.recommended && " • מומלץ"}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(dish)}
                className="flex justify-center items-center hover:bg-bg-yame/10 p-2 border-2 border-bg-yame rounded-md text-bg-yame"
                title="עריכה"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536M9 13l6.232-6.232a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13zm0 0v2a2 2 0 002 2h2"
                  />
                </svg>
              </button>
              <button
                onClick={() => onRequestDelete(dish.id)}
                className="flex justify-center items-center hover:bg-bg-yame/10 p-2 border-2 border-bg-yame rounded-md text-bg-yame"
                title="מחק"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

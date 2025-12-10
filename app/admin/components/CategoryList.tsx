"use client";

import { TCategory } from "@/app/menu/types";

interface CategoryListProps {
  categories: TCategory[];
  onEdit: (category: TCategory) => void;
  onRequestDelete: (categoryId: string) => void;
}

export function CategoryList({
  categories,
  onEdit,
  onRequestDelete,
}: CategoryListProps) {
  return (
    <div className="space-y-4">
      {categories.length === 0 ? (
        <p className="text-gray-600">אין קטגוריות עדיין</p>
      ) : (
        categories.map((category) => (
          <div
            key={category.id}
            className="flex justify-between items-center bg-white/80 shadow-lg p-4 border border-gray-200 rounded-2xl"
          >
            <div className="flex-1">
              <h4 className="font-medium text-black">{category.name?.he}</h4>
              <p className="text-gray-700 text-sm">
                {category.dishes.length} מנות • סדר: {category.order ?? "—"}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onEdit(category)}
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
                onClick={() => onRequestDelete(category.id)}
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

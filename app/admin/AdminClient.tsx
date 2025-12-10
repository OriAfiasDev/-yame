"use client";

import { TCategory, TDish } from "@/app/menu/types";
import { useState } from "react";
import { CategoryForm } from "./components/CategoryForm";
import { CategoryList } from "./components/CategoryList";
import { DishForm } from "./components/DishForm";
import { DishList } from "./components/DishList";
import Modal from "@/app/components/Modal";
import ConfirmModal from "./components/ConfirmModal";

interface AdminClientProps {
  initialCategories: TCategory[];
}

export default function AdminClient({ initialCategories }: AdminClientProps) {
  const [categories, setCategories] = useState<TCategory[]>(initialCategories);
  const [error, setError] = useState<string | null>(null);

  const [editingCategory, setEditingCategory] = useState<TCategory | null>(
    null
  );
  const [editingDish, setEditingDish] = useState<TDish | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    categories[0]?.id || ""
  );
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"category" | "dish" | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmPayload, setConfirmPayload] = useState<{
    type: "category" | "dish";
    id: string;
    label?: string;
  } | null>(null);

  const selectedCategory = selectedCategoryId
    ? categories.find((c) => c.id === selectedCategoryId)
    : null;

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      setCategories(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const handleCategorySubmit = async (data: any) => {
    try {
      setFormLoading(true);
      const url = editingCategory
        ? `/api/admin/categories/${editingCategory.id}`
        : "/api/admin/categories";
      const method = editingCategory ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to save category");
      await fetchCategories();
      setEditingCategory(null);
      setModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setFormLoading(false);
    }
  };

  const handleCategoryDelete = async (categoryId: string) => {
    try {
      const res = await fetch(`/api/admin/categories/${categoryId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete category");
      await fetchCategories();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const requestDelete = (
    type: "category" | "dish",
    id: string,
    label?: string
  ) => {
    let derivedLabel = label;
    if (!derivedLabel) {
      if (type === "category") {
        derivedLabel = categories.find((c) => c.id === id)?.name?.he;
      } else {
        for (const c of categories) {
          const d = c.dishes.find((x) => x.id === id);
          if (d) {
            derivedLabel = d.name.he;
            break;
          }
        }
      }
    }
    setConfirmPayload({ type, id, label: derivedLabel });
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!confirmPayload) return;
    setConfirmOpen(false);
    const { type, id } = confirmPayload;
    try {
      if (type === "category") await handleCategoryDelete(id);
      if (type === "dish") await handleDishDelete(id);
    } finally {
      setConfirmPayload(null);
    }
  };

  const handleDishSubmit = async (data: any) => {
    try {
      setFormLoading(true);
      const categoryId = editingDish
        ? categories.find((c) => c.dishes.some((d) => d.id === editingDish.id))
            ?.id
        : selectedCategoryId;

      if (!categoryId) {
        setError("Please select a category");
        return;
      }

      const url = editingDish
        ? `/api/admin/dishes/${editingDish.id}`
        : "/api/admin/dishes";
      const method = editingDish ? "PUT" : "POST";
      const body = editingDish ? data : { ...data, categoryId };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to save dish");
      await fetchCategories();
      setEditingDish(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDishDelete = async (dishId: string) => {
    try {
      const res = await fetch(`/api/admin/dishes/${dishId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete dish");
      await fetchCategories();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div
      dir="rtl"
      className="flex flex-col justify-start bg-white/80 shadow-lg mx-auto p-3 border border-gray-200 rounded-xl w-[80vw]"
    >
      <div className="flex justify-center items-center gap-8 mb-8">
        <h1 className="font-bold text-3xl">לוח בקרה מנהל</h1>
      </div>

      {error && (
        <div className="bg-red-100 mb-4 p-4 rounded text-red-700">
          {error}
          <button
            onClick={() => setError(null)}
            className="mr-2 text-sm underline"
          >
            סגור
          </button>
        </div>
      )}

      <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 h-full">
        {/* Column 1: Categories list */}
        <div className="flex flex-col bg-white/80 shadow-lg border border-gray-200 rounded-2xl h-[60dvh]">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-md">קטגוריות</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingCategory(null);
                    setModalMode("category");
                    setModalOpen(true);
                  }}
                  className="bg-yame px-3 py-1 rounded text-white"
                >
                  + קטגוריה
                </button>
              </div>
            </div>
            <CategoryList
              categories={categories}
              onEdit={(cat) => {
                setEditingCategory(cat);
                setModalMode("category");
                setModalOpen(true);
              }}
              onRequestDelete={(id) => requestDelete("category", id)}
            />
          </div>
        </div>

        {/* Column 2: Selected category details */}
        <div className="flex flex-col bg-white/80 shadow-lg border border-gray-200 rounded-2xl h-[60dvh]">
          <div className="flex-1 p-4 overflow-y-auto">
            <label className="block mb-2 font-medium text-sm">
              בחר קטגוריה
            </label>
            <select
              value={selectedCategoryId}
              onChange={(e) => {
                setSelectedCategoryId(e.target.value);
                setSelectedDishId(null);
              }}
              className="mb-4 px-3 py-2 border border-gray-300 rounded w-full"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name?.he}
                </option>
              ))}
            </select>

            {selectedCategory && (
              <div className="space-y-4">
                <div className="bg-white shadow p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">
                    {selectedCategory.name.he}
                  </h3>
                  <p className="text-gray-600">
                    {selectedCategory.description?.he}
                  </p>
                  <p className="mt-2 text-gray-500 text-sm">
                    סדר: {selectedCategory.order ?? "—"}
                  </p>
                  {selectedCategory.thumbnail && (
                    <img
                      src={selectedCategory.thumbnail}
                      alt={selectedCategory.name.he}
                      className="mt-3 rounded-md w-full max-h-96 object-cover"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Column 3: Dishes in selected category */}
        <div className="flex flex-col bg-white/80 shadow-lg border border-gray-200 rounded-2xl h-[60dvh]">
          <div className="flex-1 p-4 overflow-y-auto">
            {selectedCategory && (
              <div className="space-y-4">
                <div className="bg-white shadow p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-md">מנות בקטגוריה</h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingDish(null);
                          setModalMode("dish");
                          setModalOpen(true);
                        }}
                        className="bg-yame px-3 py-1 rounded text-white"
                      >
                        + מנה
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <DishList
                      dishes={selectedCategory.dishes}
                      onEdit={(d) => {
                        setEditingDish(d);
                        setModalMode("dish");
                        setModalOpen(true);
                      }}
                      onRequestDelete={(id) => requestDelete("dish", id)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="p-4">
          {modalMode === "category" && (
            <CategoryForm
              onSubmit={handleCategorySubmit}
              initialData={editingCategory || undefined}
              isLoading={formLoading}
            />
          )}

          {modalMode === "dish" && selectedCategory && (
            <DishForm
              categoryId={selectedCategory.id}
              onSubmit={handleDishSubmit}
              initialData={editingDish || undefined}
              isLoading={formLoading}
            />
          )}
        </div>
      </Modal>

      <ConfirmModal
        isOpen={confirmOpen}
        title="אישור מחיקה"
        message={
          confirmPayload
            ? `למחוק את הפריט '${confirmPayload.label ?? ""}'?`
            : "למחוק את הפריט?"
        }
        onConfirm={confirmDelete}
        onClose={() => setConfirmOpen(false)}
      />
    </div>
  );
}

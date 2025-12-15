"use client";

import { LangObject, TDish } from "@/app/menu/types";
import { useState, useEffect } from "react";
import FileInput from "./FileInput";
import { supabase } from "@/app/supabase";

interface DishFormProps {
  categoryId: string;
  onSubmit: (data: {
    name: LangObject;
    description: LangObject;
    price: number;
    thumbnail?: string;
    recommended?: boolean;
    vegan?: boolean;
    spicy?: boolean;
    order?: number;
  }) => Promise<void>;
  initialData?: TDish;
  isLoading?: boolean;
}

export function DishForm({
  categoryId,
  onSubmit,
  initialData,
  isLoading,
}: DishFormProps) {
  const [name, setName] = useState({
    he: initialData?.name?.he || "",
    en: initialData?.name?.en || "",
    ru: initialData?.name?.ru || "",
    fr: initialData?.name?.fr || "",
    ar: initialData?.name?.ar || "",
  });
  const [description, setDescription] = useState({
    he: initialData?.description?.he || "",
    en: initialData?.description?.en || "",
    ru: initialData?.description?.ru || "",
    fr: initialData?.description?.fr || "",
    ar: initialData?.description?.ar || "",
  });
  const [price, setPrice] = useState(initialData?.price || 0);
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || "");
  const [recommended, setRecommended] = useState(
    initialData?.recommended || false
  );
  const [vegan, setVegan] = useState(initialData?.vegan || false);
  const [spicy, setSpicy] = useState(initialData?.spicy || false);
  const [order, setOrder] = useState(initialData?.order || 0);

  useEffect(() => {
    if (initialData) {
      setName({
        he: initialData.name?.he || "",
        en: initialData.name?.en || "",
        ru: initialData.name?.ru || "",
        fr: initialData.name?.fr || "",
        ar: initialData.name?.ar || "",
      });
      setDescription({
        he: initialData.description?.he || "",
        en: initialData.description?.en || "",
        ru: initialData.description?.ru || "",
        fr: initialData.description?.fr || "",
        ar: initialData.description?.ar || "",
      });
      setPrice(initialData.price || 0);
      setThumbnail(initialData.thumbnail || "");
      setRecommended(initialData.recommended || false);
      setVegan(initialData.vegan || false);
      setSpicy(initialData.spicy || false);
      setOrder(initialData.order || 0);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      name: { ...name },
      description: { ...description },
      price,
      thumbnail,
      recommended,
      vegan,
      spicy,
      order,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 rounded-2xl max-w-[50dvh]"
    >
      <h3 className="font-karantina font-semibold text-yame text-4xl text-right tracking-wider">
        {initialData ? "עריכת מנה" : "יצירת מנה"}
      </h3>

      <div className="gap-2 grid grid-cols-1">
        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            שם (עברית)
          </label>
          <input
            type="text"
            value={name.he}
            onChange={(e) => setName({ ...name, he: e.target.value })}
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            שם (English)
          </label>
          <input
            type="text"
            value={name.en}
            onChange={(e) => setName({ ...name, en: e.target.value })}
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            שם (Русский)
          </label>
          <input
            type="text"
            value={name.ru}
            onChange={(e) => setName({ ...name, ru: e.target.value })}
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            שם (Français)
          </label>
          <input
            type="text"
            value={name.fr}
            onChange={(e) => setName({ ...name, fr: e.target.value })}
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            اسم (العربية)
          </label>
          <input
            type="text"
            value={name.ar}
            onChange={(e) => setName({ ...name, ar: e.target.value })}
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            תיאור (עברית)
          </label>
          <textarea
            value={description.he}
            onChange={(e) =>
              setDescription({ ...description, he: e.target.value })
            }
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
            rows={2}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            Description (English)
          </label>
          <textarea
            value={description.en}
            onChange={(e) =>
              setDescription({ ...description, en: e.target.value })
            }
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
            rows={2}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            Описание (Русский)
          </label>
          <textarea
            value={description.ru}
            onChange={(e) =>
              setDescription({ ...description, ru: e.target.value })
            }
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
            rows={2}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            Description (Français)
          </label>
          <textarea
            value={description.fr}
            onChange={(e) =>
              setDescription({ ...description, fr: e.target.value })
            }
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
            rows={2}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black text-sm">
            الوصف (العربية)
          </label>
          <textarea
            value={description.ar}
            onChange={(e) =>
              setDescription({ ...description, ar: e.target.value })
            }
            className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
            rows={2}
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium text-black text-sm">
          מחיר (₪)
        </label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-black text-sm">
          URL תמונה
        </label>
        <input
          type="url"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
        />
      </div>
      <FileInput
        fileList={[]}
        onChange={async (files) => {
          if (files && files.length > 0) {
            const { data, error } = await supabase.storage
              .from("images")
              .upload(`dish_${initialData?.id}.png`, files[0], {
                cacheControl: "3600",
                upsert: true,
              });
            if (data) {
              setThumbnail(
                `https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/${data.fullPath}`
              );
            }
          }
        }}
      />

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-black">
          <input
            type="checkbox"
            checked={recommended}
            onChange={(e) => setRecommended(e.target.checked)}
            className="border-bg-yame w-4 h-4"
          />
          <span className="text-sm">מומלץ</span>
        </label>
        <label className="flex items-center gap-2 text-black">
          <input
            type="checkbox"
            checked={vegan}
            onChange={(e) => setVegan(e.target.checked)}
            className="border-bg-yame w-4 h-4"
          />
          <span className="text-sm">צמחוני</span>
        </label>
        <label className="flex items-center gap-2 text-black">
          <input
            type="checkbox"
            checked={spicy}
            onChange={(e) => setSpicy(e.target.checked)}
            className="border-bg-yame w-4 h-4"
          />
          <span className="text-sm">חריף</span>
        </label>
      </div>

      <div>
        <label className="block mb-1 font-medium text-black text-sm">סדר</label>
        <input
          type="number"
          value={order}
          onChange={(e) => setOrder(Number(e.target.value))}
          className="bg-white px-3 py-2 border border-bg-yame rounded-md focus:outline-none focus:ring-2 focus:ring-bg-yame w-full text-black"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="flex justify-center items-center bg-yame disabled:opacity-50 py-2 border border-white rounded-md w-full text-white"
        title="שמור מנה"
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </form>
  );
}

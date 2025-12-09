import { TCategory } from "@/app/menu/types";
import AdminClient from "./AdminClient";

async function fetchCategories(): Promise<TCategory[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/admin/categories`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch categories");
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    return [];
  }
}

export default async function AdminPage() {
  const categories = await fetchCategories();

  if (categories.length === 0) {
    return (
      <div
        className="flex justify-center items-center bg-gray-50 p-8 min-h-screen"
        dir="rtl"
      >
        <div className="flex flex-col justify-start bg-white/80 shadow-lg mx-auto p-8 border border-gray-200 rounded-2xl w-[80vw] h-[80vh]">
          <div className="flex justify-center items-center gap-8 mb-8">
            <h1 className="font-bold text-3xl">לוח בקרה מנהל</h1>
          </div>
          <p className="text-gray-600 text-center">
            אין קטגוריות. אנא רענן את הדף או פתח מחדש את הדפדפן.
          </p>
        </div>
      </div>
    );
  }

  return <AdminClient initialCategories={categories} />;
}

"use client";

import { TCategory } from "@/app/menu/types";
import AdminClient from "./AdminClient";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

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

export default function AdminPage() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      if (error || !user) {
        setIsAdmin(false);
        return;
      }

      const isAdmin =
        user.user_metadata?.role === "admin" ||
        user.user_metadata?.is_admin === true;

      setIsAdmin(isAdmin);
    });
  }, []);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  if (!isAdmin || !categories.length) return null;

  return <AdminClient initialCategories={categories} />;
}

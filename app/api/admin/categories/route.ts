import { supabase, supabaseAdmin } from "@/app/supabase";
import { NextRequest, NextResponse } from "next/server";
import { LangObject, TCategory } from "@/app/menu/types";
import { randomUUID } from "crypto";

// GET all categories
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select(
        `
        id,
        thumbnail,
        order,
        category_translations (
          language_code,
          name,
          description
        ),
        dishes (
          id,
          price,
          thumbnail,
          recommended,
          vegan,
          spicy,
          order,
          dish_translations (
            language_code,
            name,
            description
          )
        )
      `
      )
      .order("order", { ascending: true });

    if (error) throw error;

    // Transform to proper structure
    const transformedData: TCategory[] = data.map((category: any) => ({
      id: category.id,
      thumbnail: category.thumbnail,
      order: category.order,
      name: category.category_translations.reduce((acc: any, t: any) => {
        acc[t.language_code as keyof LangObject] = t.name;
        return acc;
      }, {} as LangObject),
      description: category.category_translations.reduce((acc: any, t: any) => {
        acc[t.language_code as keyof LangObject] = t.description || "";
        return acc;
      }, {} as LangObject),
      dishes: category.dishes.map((dish: any) => ({
        id: dish.id,
        price: dish.price,
        thumbnail: dish.thumbnail,
        recommended: dish.recommended,
        vegan: dish.vegan,
        spicy: dish.spicy,
        order: dish.order,
        name: dish.dish_translations.reduce((acc: any, t: any) => {
          acc[t.language_code as keyof LangObject] = t.name;
          return acc;
        }, {} as LangObject),
        description: dish.dish_translations.reduce((acc: any, t: any) => {
          acc[t.language_code as keyof LangObject] = t.description || "";
          return acc;
        }, {} as LangObject),
      })),
    }));

    return NextResponse.json(transformedData);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to fetch categories",
      },
      { status: 500 }
    );
  }
}

// POST create category
export async function POST(request: NextRequest) {
  let body: any = null;
  try {
    body = await request.json();
    const { name, description, thumbnail, order } = body;

    // Validate input
    if (!name || typeof name !== "object") {
      return NextResponse.json(
        { error: "name must be an object with language keys" },
        { status: 400 }
      );
    }

    // Insert category (use admin client for write)
    const { data: categoryData, error: categoryError } = await supabaseAdmin
      .from("categories")
      .insert([{ id: randomUUID(), thumbnail, order }])
      .select();

    if (categoryError) {
      console.error("Failed to insert category:", categoryError, { body });
      return NextResponse.json(
        { error: categoryError.message },
        { status: 500 }
      );
    }
    if (!categoryData || categoryData.length === 0) {
      console.error("No category returned from insert", { body });
      return NextResponse.json(
        { error: "Failed to create category" },
        { status: 500 }
      );
    }

    const categoryId = categoryData[0].id;

    // Insert translations (use admin client for write)
    const translations = Object.entries(name).map(([lang, text]) => ({
      category_id: categoryId,
      language_code: lang,
      name: text,
      description: description?.[lang] || "",
    }));

    const { error: translationError } = await supabaseAdmin
      .from("category_translations")
      .insert(translations);

    if (translationError) {
      console.error("Failed to insert translations:", translationError, {
        translations,
        body,
      });
      return NextResponse.json(
        { error: translationError.message },
        { status: 500 }
      );
    }

    return NextResponse.json(categoryData[0], { status: 201 });
  } catch (error) {
    const errMsg =
      error instanceof Error
        ? error.message
        : JSON.stringify(error, Object.getOwnPropertyNames(error));
    console.error("Unhandled error in POST /api/admin/categories:", error, {
      body,
    });
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

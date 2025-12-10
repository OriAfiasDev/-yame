import { supabase } from "@/app/supabase";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  let body: any = null;
  try {
    body = await request.json();
    const {
      name,
      description,
      categoryId,
      price,
      thumbnail,
      recommended,
      vegan,
      spicy,
      order,
    } = body;

    if (!categoryId) {
      return NextResponse.json(
        { error: "categoryId is required" },
        { status: 400 }
      );
    }

    if (!name || typeof name !== "object") {
      return NextResponse.json(
        { error: "name must be an object with language keys" },
        { status: 400 }
      );
    }

    const { data: dishData, error: dishError } = await supabase
      .from("dishes")
      .insert([
        {
          id: randomUUID(),
          category_id: categoryId,
          price,
          thumbnail,
          recommended: recommended || false,
          vegan: vegan || false,
          spicy: spicy || false,
          order,
        },
      ])
      .select();

    if (dishError) {
      const msg = dishError.message || JSON.stringify(dishError);
      console.error("Failed to insert dish:", dishError, { body });
      return NextResponse.json({ error: msg }, { status: 500 });
    }
    if (!dishData || dishData.length === 0) {
      console.error("No dish returned from insert", { body });
      return NextResponse.json(
        { error: "Failed to create dish" },
        { status: 500 }
      );
    }

    const dishId = dishData[0].id;

    const translations = Object.entries(name).map(([lang, text]) => ({
      dish_id: dishId,
      language_code: lang,
      name: text,
      description: description?.[lang] || "",
    }));

    const { error: translationError } = await supabase
      .from("dish_translations")
      .insert(translations);

    if (translationError) {
      const msg = translationError.message || JSON.stringify(translationError);
      console.error("Failed to insert translations:", translationError, {
        translations,
        body,
      });
      return NextResponse.json({ error: msg }, { status: 500 });
    }

    return NextResponse.json(dishData[0], { status: 201 });
  } catch (error) {
    const errMsg =
      error instanceof Error
        ? error.message
        : JSON.stringify(error, Object.getOwnPropertyNames(error));
    console.error("Unhandled error in POST /api/admin/dishes:", error, {
      body,
    });
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase.from("dishes").select("*");

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to fetch dishes",
      },
      { status: 500 }
    );
  }
}

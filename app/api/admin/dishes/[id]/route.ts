import { supabase, supabaseAdmin } from "@/app/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  let body: any = null;
  try {
    const { id } = await params;
    body = await request.json();
    const {
      name,
      description,
      price,
      thumbnail,
      recommended,
      vegan,
      spicy,
      order,
    } = body;
    const dishId = id;

    if (!name || typeof name !== "object") {
      return NextResponse.json(
        { error: "name must be an object with language keys" },
        { status: 400 }
      );
    }

    const { data: existingDish, error: checkError } = await supabase
      .from("dishes")
      .select("id")
      .eq("id", dishId)
      .single();

    if (checkError || !existingDish) {
      console.warn("Dish not found with id:", dishId);
      return NextResponse.json(
        { error: `No dish found with id ${dishId}` },
        { status: 404 }
      );
    }

    const { data: dishData, error: dishError } = await supabaseAdmin
      .from("dishes")
      .update({
        price,
        thumbnail,
        recommended: recommended || false,
        vegan: vegan || false,
        spicy: spicy || false,
        order,
      })
      .eq("id", dishId)
      .select();

    if (dishError) {
      console.error("Failed to update dish:", dishError, { dishId, body });
      return NextResponse.json({ error: dishError.message }, { status: 500 });
    }

    if (!dishData || dishData.length === 0) {
      console.warn("Update returned no rows:", { dishId });
      return NextResponse.json(
        {
          success: false,
          error: "No rows updated",
        },
        { status: 500 }
      );
    }

    for (const [lang, text] of Object.entries(name)) {
      const { error: translationError } = await supabaseAdmin
        .from("dish_translations")
        .update({
          name: text,
          description: description?.[lang] || "",
        })
        .eq("dish_id", dishId)
        .eq("language_code", lang);

      if (translationError) {
        console.error("Failed to update translation:", translationError, {
          dishId,
          lang,
          body,
        });
        return NextResponse.json(
          { error: translationError.message },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true, updated: dishData[0] });
  } catch (error) {
    const errMsg =
      error instanceof Error
        ? error.message
        : JSON.stringify(error, Object.getOwnPropertyNames(error));
    console.error("Unhandled error in PUT /api/admin/dishes/[id]:", error, {
      body,
    });
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const dishId = id;

    const { error } = await supabaseAdmin
      .from("dishes")
      .delete()
      .eq("id", dishId);

    if (error) {
      console.error("Failed to delete dish:", error, { dishId });
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to delete dish",
      },
      { status: 500 }
    );
  }
}

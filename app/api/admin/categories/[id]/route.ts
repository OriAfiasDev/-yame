import { supabase, supabaseAdmin } from "@/app/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, description, thumbnail, order } = body;
    const categoryId = id;

    const { error: categoryError } = await supabaseAdmin
      .from("categories")
      .update({ thumbnail, order })
      .eq("id", categoryId);

    if (categoryError) throw categoryError;

    for (const [lang, text] of Object.entries(name)) {
      const { error: translationError } = await supabaseAdmin
        .from("category_translations")
        .update({
          name: text,
          description: description?.[lang] || "",
        })
        .eq("category_id", categoryId)
        .eq("language_code", lang);

      if (translationError) throw translationError;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to update category",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const categoryId = id;

    const { error } = await supabaseAdmin
      .from("categories")
      .delete()
      .eq("id", categoryId);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to delete category",
      },
      { status: 500 }
    );
  }
}

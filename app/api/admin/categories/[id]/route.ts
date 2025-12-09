import { supabase, supabaseAdmin } from "@/app/supabase";
import { NextRequest, NextResponse } from "next/server";

// PUT update category
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, description, thumbnail, order } = body;
    const categoryId = id;

    // Update category (use admin client for write)
    const { error: categoryError } = await supabaseAdmin
      .from("categories")
      .update({ thumbnail, order })
      .eq("id", categoryId);

    if (categoryError) throw categoryError;

    // Update translations (use admin client for write)
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
      { error: error instanceof Error ? error.message : "Failed to update category" },
      { status: 500 }
    );
  }
}

// DELETE category
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const categoryId = id;

    // Delete category (use admin client for write; cascade delete should handle dishes)
    const { error } = await supabaseAdmin
      .from("categories")
      .delete()
      .eq("id", categoryId);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete category" },
      { status: 500 }
    );
  }
}

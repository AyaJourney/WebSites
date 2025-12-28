import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      title,
      summary,
      content,
      category,
      is_featured,
      published,
      image_url
    } = body;

    // slug üret
    const slug = title
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const { error } = await supabaseAdmin.from("blogs").insert([
      {
        title,
        slug,
        summary,
        content,
        category,
        is_featured,
        published,
        author: "Admin",
        image_url
      }
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

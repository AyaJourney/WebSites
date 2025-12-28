import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } =await params;

  const { data, error } = await supabaseAdmin
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json();

  const { error } = await supabaseAdmin
    .from("blogs")
    .update({
      title: body.title,
      slug: body.slug,
      summary: body.summary,
      content: body.content,
      category: body.category,
      is_featured: body.is_featured,
      published: body.published,
      image_url:body.image_url
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}




export async function DELETE(req, { params }) {

  const { id } =await params;

  console.log("DELETE ID:", id);

  if (!id) {
    return NextResponse.json(
      { error: "ID missing" },
      { status: 400 }
    );
  }

  const { error } = await supabaseAdmin
    .from("blogs")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}


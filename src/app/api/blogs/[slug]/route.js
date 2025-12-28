import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { slug } = params;

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    return NextResponse.json(
      { error: "Blog bulunamadı" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}

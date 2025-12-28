import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const { data } = await supabase
    .from("blogs")
    .select("title, slug")
    .eq("published", true)
    .eq("category", category)
    .limit(3);

  return NextResponse.json(data || []);
}

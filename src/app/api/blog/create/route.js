import fs from "fs";
import path from "path";
import { verifyAuth } from "../_utils/auth";

const BLOG_PATH = path.join(process.cwd(), "src/data/blog.json");

export async function POST(req) {
  const user = verifyAuth(req);
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const blog = await req.json();

  const data = JSON.parse(fs.readFileSync(BLOG_PATH, "utf-8"));
  data.unshift({
    ...blog,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  });

  fs.writeFileSync(BLOG_PATH, JSON.stringify(data, null, 2));

  return new Response(JSON.stringify({ success: true }));
}

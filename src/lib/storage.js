import fs from "fs";
import path from "path";

export const DATA_DIR = path.join(process.cwd(), "src", "data", "blog");
export const POSTS_PATH = path.join(DATA_DIR, "posts.json");

export function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(POSTS_PATH)) fs.writeFileSync(POSTS_PATH, "[]", "utf-8");

  const uploadDir = path.join(process.cwd(), "public", "uploads", "blog");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
}

export function readPosts() {
  ensureDataFiles();
  const raw = fs.readFileSync(POSTS_PATH, "utf-8");
  return JSON.parse(raw);
}

export function writePosts(posts) {
  ensureDataFiles();
  fs.writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

export function slugify(input) {
  return input
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[ıİ]/g, "i")
    .replace(/[ğĞ]/g, "g")
    .replace(/[üÜ]/g, "u")
    .replace(/[şŞ]/g, "s")
    .replace(/[öÖ]/g, "o")
    .replace(/[çÇ]/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

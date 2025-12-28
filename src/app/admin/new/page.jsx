"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await supabase.from("blogs").insert({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      content,
      status: "draft",
      author_id: user.id,
    });

    router.push("/admin");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-xl font-semibold mb-4">Yeni Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-3 border rounded h-40"
          placeholder="İçerik"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="px-4 py-2 bg-black text-white rounded">
          Kaydet
        </button>
      </form>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { searchMap } from "@/helper/searchMap";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const normalizedQuery = query.toLowerCase().trim();

    const matchedKey = Object.keys(searchMap).find((key) =>
      normalizedQuery.includes(key)
    );

    if (matchedKey) {
      router.push(searchMap[matchedKey]);
    } else {
      // eşleşme yoksa
      router.push("/iletisim");
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Vize, ülke veya program ara (Amerika vizesi, İngiltere, D7...)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
    </form>
  );
}

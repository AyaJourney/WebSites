"use client";

export default function SearchIcon({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Ara"
      className="p-2 hover:opacity-70 transition"
    >
      🔍
    </button>
  );
}

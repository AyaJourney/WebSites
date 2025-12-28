"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("E-posta veya şifre hatalı.");
      setLoading(false);
    } else {
      router.push("/admin/blogs");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white border shadow-sm p-8">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Admin Giriş
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Yönetim paneline erişmek için giriş yapın
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              E-posta
            </label>
            <input
              type="email"
              placeholder="admin@site.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Şifre
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-slate-900 text-white py-3 text-sm font-extrabold hover:bg-slate-800 transition disabled:opacity-60"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-6 text-center text-xs text-slate-400">
          Yetkisiz erişimler kayıt altına alınmaktadır.
        </div>
      </div>
    </main>
  );
}

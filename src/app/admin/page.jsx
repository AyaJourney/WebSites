"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Login yoksa blog sayfasına gönder
    if (!user) {
      router.replace("/blogs");
      return;
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-500">
        Yükleniyor...
      </div>
    );
  }

  return (
    <main className="max-w-[1320px] mx-auto px-4 py-10 mt-24">
      <h1 className="text-3xl font-bold mb-10">Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* BLOG YAZILARI */}
        <div className="p-6 border rounded-2xl shadow-sm bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Blog Yazıları</h2>
            <p className="text-gray-500 text-sm">
              Yayınlanan ve taslak blog yazılarını görüntüleyin.
            </p>
          </div>

          <button
            onClick={() => router.push("/admin/blogs")}
            className="mt-6 w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Blogları Gör
          </button>
        </div>

        {/* TEST SONUÇLARI */}
        <div className="p-6 border rounded-2xl shadow-sm bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Test Sonuçları</h2>
            <p className="text-gray-500 text-sm">
              Kullanıcıların doldurduğu test ve değerlendirme sonuçları.
            </p>
          </div>

          <button
            onClick={() => router.push("/admin/tests")}
            className="mt-6 w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Test Sonuçlarını Gör
          </button>
        </div>

        {/* FORM VERİLERİ */}
        <div className="p-6 border rounded-2xl shadow-sm bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Form Verileri</h2>
            <p className="text-gray-500 text-sm">
              Başvuru ve iletişim formlarından gelen tüm veriler.
            </p>
          </div>

          <button
            onClick={() => router.push("/admin/forms")}
            className="mt-6 w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Formları Gör
          </button>
        </div>

      </div>
    </main>
  );
}

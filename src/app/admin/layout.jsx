"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    let mounted = true;

    // 1️⃣ İlk session kontrolü
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;

      if (!session) {
        router.push("/admin/login");
      } else {
        setSession(session);
        setLoading(false);
      }
    });

    // 2️⃣ Auth state değişimlerini dinle
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;

      if (!session) {
        setSession(null);
        router.push("/admin/login");
      } else {
        setSession(session);
      }

      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <main className="max-w-[1320px] mx-auto px-4 py-10">
        <p className="p-6">Yetki kontrol ediliyor...</p>
      </main>
    );
  }

  return (
    <>
      {/* HEADER SADECE LOGIN OLMUŞSA */}
      {session && (
        <header className="fixed top-32 right-0 w-full h-16 flex items-center justify-end px-6 z-50">
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 cursor-pointer text-sm font-semibold"
          >
            Çıkış Yap
          </button>
        </header>
      )}

      <main className="pt-20">{children}</main>
    </>
  );
}

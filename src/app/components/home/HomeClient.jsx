'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import dynamic from 'next/dynamic';


const EntryModal = dynamic(() => import('../modals/EntryModal'), {
  ssr: false, 
  loading: () => null
});
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function HomeClient() {
  const [open, setOpen] = useState(false);
  const [featured, setFeatured] = useState(null);

  // 1️⃣ Featured yazıyı çek
  useEffect(() => {
    const fetchFeatured = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('slug, title, summary, image_url, created_at')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (!error && data) {
        setFeatured({
          slug: data.slug,
          title: data.title,
          excerpt: data.summary,
          image: data.image_url,
          dateISO: data.created_at,
        });
      }
    };

    fetchFeatured();
  }, []);

  // 2️⃣ Featured geldikten sonra modal aç
  useEffect(() => {
    if (!featured) return;

    const seen = sessionStorage.getItem('entry_modal_seen');
    if (!seen) {
      setOpen(true);
      sessionStorage.setItem('entry_modal_seen', 'true');
    }
  }, [featured]);

  return (
    <>
      <EntryModal
        isOpen={open}
        onClose={() => setOpen(false)}
        featured={featured}
      />
    </>
  );
}

import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

async function getBlog(slug) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) return null;
  return data;
}
function  injectInternalLinks(content) {
  const links = [
    { keyword: "ABD vizesi", url: "/amerika-vizesi" },
    { keyword: "Amerika vizesi", url: "/amerika-vizesi" },

    { keyword: "Mülakatta", url: "/amerika-vize-mulakat-sorulari" },
    { keyword: "AYA Journey", url: "/iletisim" },
    { keyword: "AYA Journey'de", url: "/iletisim" },

    { keyword: "VFS randevu", url: "/vfs-randevu-bulamiyorum" },
    { keyword: "Schengen vizesi", url: "/schengen-vizesi" },
  ];

  let updated = content;

  links.forEach(({ keyword, url }) => {
    const regex = new RegExp(`\\b${keyword}\\b(?![^<]*>)`, "i");

    updated = updated.replace(
      regex,
      `<a href="${url}" target="_blank" 
  rel="noopener noreferrer"  class="text-blue-600 font-extrabold underline hover:text-blue-800 transition">${keyword}</a>`
    );
  });

  return updated;
}
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);
  if (!blog) notFound();

return (
    <article className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Üst Kısım: Sola Yaslı Başlık ve Meta */}
      <header className="max-w-240 mx-auto px-8 pt-20 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-md font-bold uppercase tracking-wider shadow-sm">
            {blog.category || "Genel"}
          </span>
          <span className="text-slate-400 text-xs font-medium">
             {new Date(blog.created_at).toLocaleDateString("tr-TR", { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        
        {/* Başlık: Sola yaslı ve uzunluk kontrolü yapılmış */}
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-212.5">
          {blog.title}
        </h1>
      </header>

      {/* Ana Görsel: Daha küçük ve odaklı */}
  {blog.image_url && (
  <div className="max-w-240 mx-auto mb-16 px-8">
    <div className="relative rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
      <img
        src={blog.image_url}
        alt={blog.title}
        /* h-auto: Resmin boyunu otomatik ayarlar, kesmez.
           max-h-[600px]: Resim çok uzunsa (dikeyse) ekranı kaplamasın diye sınır koyarız.
           object-contain: Resmin tamamını çerçeveye sığdırır.
        */
        className="w-full h-auto max-h-150 object-cover block mx-auto transition-transform duration-700 hover:scale-[1.02]"
      />
    </div>
  </div>
)}

      {/* İçerik Alanı */}
      <div className="max-w-240 mx-auto px-8 pb-32">
        <div
          className="
            /* Ana Yazı Karakterleri */
            text-[19px] md:text-[20px] leading-[1.8] text-slate-700 antialiased
            
            /* Boşluk Kuralları (Fiziksel Boşlukları Koru) */
            whitespace-pre-wrap
            
            /* Paragraf Ayarları: Kitap tipi girinti */
            [&_p]:mb-8
            [&_p]:[indent-10]
            
            /* Başlıklar: Sola yaslı ve girintisiz */
            [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-14 [&_h2]:mb-6 [&_h2]:[indent-0] [&_h2]:tracking-tight
            [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:[indent-0]
            
            /* Listeler: Modern Mavi Noktalar */
            [&_ul]:list-none [&_ul]:pl-0 [&_ul]:mb-10 [&_ul]:[indent-0]
            [&_ul_li]:relative [&_ul_li]:pl-8 [&_ul_li]:mb-4
            [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-[0.75em] [&_ul_li]:before:w-2 [&_ul_li]:before:h-2 [&_ul_li]:before:bg-blue-500 [&_ul_li]:before:rounded-full
            
            [&_ol]:list-decimal [&_ol]:pl-8 [&_ol]:mb-10 [&_ol]:[indent-0]
            [&_li_p]:mb-0 [&_li_p]:[indent-0]

            /* İçerik Resimleri */
            [&_img]:rounded-2xl [&_img]:my-12 [&_img]:shadow-lg [&_img]:mx-auto [&_img]:max-w-full
            
            /* Alıntılar */
            [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:bg-slate-50 [&_blockquote]:py-6 [&_blockquote]:px-10 [&_blockquote]:rounded-r-2xl [&_blockquote]:italic [&_blockquote]:text-xl [&_blockquote]:text-slate-600 [&_blockquote]:mb-10 [&_blockquote]:[indent-0]
          "
         dangerouslySetInnerHTML={{
  __html: injectInternalLinks(blog.content),
}}
        />
      </div>
    </article>
  );
}

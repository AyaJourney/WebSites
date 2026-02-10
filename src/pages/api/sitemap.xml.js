import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const { data: blogs } = await supabase
    .from("blogs")
    .select("slug, updated_at")
    .eq("published", true);

  const staticPages = [
    "/",
    "/ingiltere-vizesi",
    "/amerika-vizesi",
    "/schengen-vizesi",
    "/portekiz-d7-vize",
    "/yurtdisi-rehberi",
    "/yurtdisi-rehberi/vize-turleri",
    "/yurtdisi-rehberi/yurtdisi-egitim",
    "/yurtdisi-rehberi/is-bulma-rehberi",
    "/yurtdisi-rehberi/vize-mulakatinda-basari-icin-tuyolar",
    "/yurtdisi-rehberi/konaklama-ve-ulasim-rehberi",
    "/yurtdisi-rehberi/yurt-disinda-saglik-sigortasi",
    "/yurtdisi-rehberi/kulturel-uyum-dil-egitimi",
    "/yurtdisi-rehberi/yurt-disinda-burs",
    "/yurtdisi-rehberi/vize-reddi-durumunda-ne-yapilmali",
    "/blog",
    "/iletisim",
    "/randevu",
    "/biz-kimiz",
    "/referanslarimiz",
    "/hakkimizdaki-yorumlar",
    "/egitim",
    "/form/ds-160",
    "/form/schengen",
    "/form/birlesik-krallik-bilgi-fisi",
    "/form/kanada-basvuru-formu",
    "/sikca-sorulan-sorular",
    "/vize-alma-ihtimalinizi-olcun",
    "/yesil-pasaport-vize-rehberi",
    "/schengen-vize-adimlari",
    "/amerika-vize-danismanligi",
    "/amerika-vize-evraklari",
    "/schengen-vize-evraklari",
    "/birlesik-krallik-vize-evraklari",
    "/amerika-b1-b2-vizesi",
    "/amerika-vizesi-kac-gunde-cikar",
    "/amerika-vize-mulakat-sorulari",
    "/amerika-vize-ucretleri",
    "/amerika-vize-ds-160-nasil-doldurulur",
    "/amerika-vize-checklist",
    "/vize-danismanlik-istanbul",
    "/vize-danismanlik-ankara",//burası tamam
    "/schengen-vize-danismanligi-istanbul",//burası tamam
    "/schengen-vize-danismanligi-ankara",//burası tamam
    "/amerika-vize-danismanligi-istanbul",//burası tamam
    "/amerika-vize-danismanligi-ankara",//burası tamam
    "/ingiltere-vize-danismanligi-istanbul",//burası tamam
    "/ingiltere-vize-danismanligi-ankara",//burası tamam
    "/vize-nedir",//burası tamam
    "/amerika-vize-reddi-nedenleri",//burası tamam
    "/schengen-vize-reddi-nedenleri",//burası tamam
    "/ingiltere-vize-reddi-nedenleri",//burası tamam
    "/kanada-vize-reddi-nedenleri",//burası tamam
    "/vize-reddi-itiraz-rehberi",//burası tamam
    "/ilk-kez-vize-alacaklar",//burası tamam
    "/en-kolay-vize-veren-ulkeler",//burası tamam
    "/vize-alirken-yapilan-hatalar",//burası tamam
    "/vize-reddi-gercek-nedenler",//burası tamam
    "/vize-reddi-sonrasi-kontrol-listesi",  //burası tamam
    "/abd-vize-randevusu-nasil-alinir", //burası tamam
    "/bls-international-ispanya-vize-randevusu", //burası tamam
    "/idata-vize-randevusu-nasil-alinir", //burası tamam
    "/ingiltere-vize-randevusu-nasil-alinir",  //burası tamam
    "/kanada-vize-randevusu-nasil-alinir", //burası tamam
    "/vfs-global-vize-randevusu-nasil-alinir", //burası tamam
    "/abd-vize-danismanligi", //burası tamam
    "/amerika-vizesi-en-iyi-danismanlik-sirketi", //burası tamam
    "/abd-vize-istanbul", //burası tamam
    "/abd-vize-ankara", //burası tamam
    


    
  ];

  const urls = [
    ...staticPages.map(
      (path) => `
<url>
  <loc>https://ayajourney.com${path}</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`
    ),

    ...(blogs || []).map(
      (blog) => `
<url>
  <loc>https://ayajourney.com/blog/${blog.slug}</loc>
  <lastmod>${new Date(blog.updated_at).toISOString()}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}

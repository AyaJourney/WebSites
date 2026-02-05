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
    "yesil-pasaport-vize-rehberi",
    "vize-alma-ihtimalinizi-olcun",
    "schengen-vize-adimlari",
    "vize-danismanlik-istanbul",
    "vize-danismanlik-ankara",
    "schengen-vize-danismanligi-istanbul",
    "schengen-vize-danismanligi-ankara",
    "amerika-vize-danismanligi-istanbul",
    "amerika-vize-danismanligi-ankara",
    "ingiltere-vize-danismanligi-istanbul",
    "ingiltere-vize-danismanligi-ankara",
    "vize-nedir",
    
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

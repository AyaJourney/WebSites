import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const { data: blogs } = await supabase
    .from("blogs")
    .select("slug, updated_at")
    .eq("published", true);

  const staticPages = [
    "/",
    "/ingiltere-vizesi",//burası tamam
    "/amerika-vizesi",//burası tamam
    "/schengen-vizesi",//burası tamam
    "/portekiz-d7-vize",//burası tamam
    "/yurtdisi-rehberi",//burası tamam
    "/yurtdisi-rehberi/vize-turleri",//burası tamam
    "/yurtdisi-rehberi/yurtdisi-egitim",//burası tamam
    "/yurtdisi-rehberi/is-bulma-rehberi",//burası tamam
    "/yurtdisi-rehberi/vize-mulakatinda-basari-icin-tuyolar",//burası tamam
    "/yurtdisi-rehberi/konaklama-ve-ulasim-rehberi",//burası tamam
    "/yurtdisi-rehberi/yurt-disinda-saglik-sigortasi",//burası tamam
    "/yurtdisi-rehberi/kulturel-uyum-dil-egitimi",//burası tamam
    "/yurtdisi-rehberi/yurt-disinda-burs",//burası tamam
    "/yurtdisi-rehberi/vize-reddi-durumunda-ne-yapilmali",//burası tamam
    "/blog", //burası tamam
    "/iletisim",//burası tamam
    "/gizlilik-politikasi",//burası tamam
    "/randevu",//burası tamam
    "/biz-kimiz",//burası tamam
    "/referanslarimiz",//burası tamam
    "/hakkimizdaki-yorumlar", //burası tamam
    "/egitim",//burası tamam
    // "/form/ds-160",//burası tamam
    // "/form/schengen",//burası tamam
    // "/form/birlesik-krallik-bilgi-fisi",//burası tamam
    // "/form/kanada-basvuru-formu",//burası tamam
    "/sikca-sorulan-sorular", //burası tamam
    "/vize-alma-ihtimalinizi-olcun", //burası tamam
    "/yesil-pasaport-vize-rehberi",//burası tamam
    "/amerika-vize-evraklari",//burası tamam
    "/schengen-vize-evraklari",//burası tamam
    "/birlesik-krallik-vize-evraklari",//burası tamam
    "/amerika-b1-b2-vizesi",//burası tamam
    "/schengen-vize-adimlari",//burası tamam
    "/amerika-vize-danismanligi",//burası tamam
    "/aya-journey-yorumlari",//burası tamam
    "/amerika-vizesi-kac-gunde-cikar",//burası tamam
    "/amerika-vize-mulakat-sorulari",//burası tamam
    "/amerika-vize-ucretleri",//burası tamam
    "/amerika-vize-ds-160-nasil-doldurulur",//burası tamam
    "/amerika-vize-checklist",//burası tamam
    "/ds-160-kapanmadan-randevu-alinamiyor",//burası tamam
    "/ankara-vize-danismanligi",//burası tamam
    "/ankara-amerika-vizesi",//burası tamam
    "/ankara-schengen-vizesi",//burası tamam
    "/vize-sirketleri-ankara",//burası tamam
    "/vize-danismanlik-istanbul",//burası tamam
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
    "/portekiz-d7-oturum-vizesi-ankara", //burası tamam
    "/portekiz-d7-oturum-vizesi-istanbul", //burası tamam
    "/yunanistan-vize",//burası tamam
    "/yunanistan-vize-randevusu",//burası tamam
    "/yunanistan-vize-evraklari",//burası tamam
    "/yunanistan-vize-reddi",//burası tamam
    "/fransa-vize",//burası tamam
    "/fransa-vize-randevusu", //burası tamam
    "/fransa-vize-evraklari",//burası tamam
    "/fransa-vize-reddi",//burasıt tamam
   "/hollanda-vize",//burası tamam
    "/hollanda-vize-randevusu",//burası tamam
    "/hollanda-vize-evraklari",//burası tamam
    "/hollanda-vize-reddi",//burası tamam
     "/ispanya-vize",//burası tamam
    "/ispanya-vize-randevusu",// burası tamam
    "/ispanya-vize-evraklari",// burası tamam
    "/ispanya-vize-reddi", // burası tamam
    "/vfs-randevu-bulamiyorum",//burası tamam
    "/vfs-no-slots-available",//burası tamam
    "/amerika-vize-214b",
    "/amerika-vize-reddi-214b-itiraz",
    "/amerika-vize-reddi-sonrasi-ne-yapilmali",
    "/amerika-vize-reddi-ikinci-basvuru",
    "/amerika-vize-214b-nasil-kaldirilir",
    "/amerika-vize-reddi-psikolojik-hatalar",
    "/amerika-vize-reddi-dosya-analizi",
    "/amerika-vize-reddi-evrak-yetersizligi",
    "/amerika-vize-reddi-banka-hesabi",
    "/amerika-vize-reddi-sponsor",
    "/amerika-vize-reddi-ogrenci",
    "/amerika-vize-reddi-calisan",
    "/amerika-vize-reddi-sirket-sahibi",
    "/amerika-vize-reddi-yeni-ise-baslayan",
    "/amerika-vize-reddi-dusuk-maas",
    "/amerika-vize-reddi-bekar",
    "/amerika-vize-reddi-evli",
    "/macaristan-vize",
    "/macaristan-vize-evraklari",
    "/macaristan-vize-randevusu",
    "/macaristan-vize-reddi",
    "/italya-vize",
    "/italya-vize-evraklari",
    "/italya-vize-randevusu",
    "/italya-vize-reddi",
    "/danimarka-vize",
    "/danimarka-vize-evraklari",
    "/danimarka-vize-randevusu",
    "/danimarka-vize-reddi",
    "/almanya-vize",
    "/almanya-vize-evraklari",
    "/almanya-vize-randevusu",
    "/almanya-vize-reddi",
    "/bulgaristan-vize",
    "/bulgaristan-vize-evraklari",
    "/bulgaristan-vize-randevusu",
    "/bulgaristan-vize-reddi",
    "/cekya-vize",
    "/cekya-vize-evraklari",
    "/cekya-vize-randevusu",
    "/cekya-vize-reddi",
    "/avusturya-vize",
    "/avusturya-vize-evraklari",
    "/avusturya-vize-randevusu",
    "/avusturya-vize-reddi",
    "/belcika-vize",
    "/belcika-vize-evraklari",
    "/belcika-vize-randevusu",
    "/belcika-vize-reddi",
    "/estonya-vize",
    "/estonya-vize-evraklari",
    "/estonya-vize-randevusu",
    "/estonya-vize-reddi",
    "/finlandiya-vize",
    "/finlandiya-vize-evraklari",
    "/finlandiya-vize-randevusu",
    "/finlandiya-vize-reddi",
    "/hirvatistan-vize",
    "/hirvatistan-vize-evraklari",
    "/hirvatistan-vize-randevusu",
    "/hirvatistan-vize-reddi",
    "/portekiz-vize",
"/portekiz-vize-evraklari",
"/portekiz-vize-randevusu",
"/portekiz-vize-reddi"







    
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

import { IoClose } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi2';
import { MdAssessment } from 'react-icons/md';
import Link from 'next/link';

export default function EntryModal({ isOpen, onClose,featured  }) {
  if (!isOpen || !featured) return null;

return (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
    <div className="bg-white shadow-2xl w-full max-w-5xl relative overflow-hidden rounded-xl sm:rounded-2xl">
{/* Kapatma butonu */}
<div className="absolute top-3 right-3 sm:top-4 sm:right-4 group flex items-center justify-center">
  
  {/* Tooltip: Butonun hemen solunda belirir */}
  <span className="absolute right-12 scale-0 transition-all rounded-lg bg-gray-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white group-hover:scale-100 whitespace-nowrap shadow-lg z-20">
    Kapat
    {/* Küçük bir ok ucu */}
    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
  </span>

  <button 
    onClick={onClose} 
    aria-label="Kapat" // Ekran okuyucular ve Google SEO için
    className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-full transition-colors z-10"
  >
    <IoClose className="w-6 h-6 text-gray-500" />
  </button>
</div>

      {/* Dekoratif gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* İçerik */}
      <div className="p-4 sm:p-6 md:p-8">
        
        {/* Başlık */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            AYA Journey'e Hoş Geldiniz
          </h2>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

          {/* Sol kutu - Blog */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-600/30">
                  <HiDocumentText className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1">
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-700">
                    En Yeni Yazı
                  </span>

                  <h3 className="mt-2 text-base sm:text-lg font-extrabold text-slate-900 leading-snug line-clamp-2">
                    {featured.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-4 sm:mt-6 flex items-center justify-between rounded-xl bg-blue-600 px-4 sm:px-6 py-3 text-sm sm:text-md text-white transition-all duration-300 group-hover:bg-blue-700">
              <span>Yazıyı Oku</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </Link>

          {/* Sağ kutu - Test */}
          <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer active:scale-[0.98]">

            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-pink-400/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-600 shadow-md shadow-purple-600/30">
                  <MdAssessment className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1">
                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-purple-700">
                    Ücretsiz Test
                  </span>

                  <h3 className="mt-2 text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                    Vize alma ihtimalinizi ölçün
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Uzman ekibimiz tarafından hazırlanan,
                    <span className="font-semibold text-slate-700"> ücretsiz vize değerlendirme testi</span>.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/vize-alma-ihtimalinizi-olcun" className="relative z-10 mt-4 sm:mt-6 flex items-center justify-between rounded-xl bg-purple-600 px-4 sm:px-6 py-3 text-sm sm:text-md text-white transition-all duration-300 group-hover:bg-purple-700">
              <span>Teste Başla</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  </div>
);
 
}
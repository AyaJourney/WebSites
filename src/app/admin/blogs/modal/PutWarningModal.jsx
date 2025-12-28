"use client";

import {
  HiXMark,
  HiTrash,
  HiCheckCircle,
  HiExclamationTriangle,
} from "react-icons/hi2";
import { GrUpdate } from "react-icons/gr";
const PutWarningModal = ({
  open,
  setOpen,
  putBlogText,
  id,
  boolPut,
  setBoolPut,router,form
}) => {
  if (!open) return null;

  const isPuting = boolPut.put_now && !boolPut.put_end;
  const isSuccess = boolPut.put_now && boolPut.put_end;

  const handleDelete = async () => {
    setBoolPut({
      put_now: true,
      put_end: false,
    });

    await putBlogText(id,form);
    // ⛔ put_end senin put fonksiyonunda true olacak
  };

  const handleClose = () => {
    setBoolPut({ put_now: false, put_end: false });
    setOpen(false);
    router.push("/admin/blogs");
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* KAPAT (sadece işlem yokken) */}
        {!isPuting && (
          <button
            onClick={handleClose}
            className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
          >
            <HiXMark size={22} />
          </button>
        )}

        <div className="p-6 text-center space-y-6">

          {/* ICON */}
          <div className="flex justify-center">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center
              ${
                isSuccess
                  ? "bg-green-100"
                  : isPuting
                  ? "bg-yellow-100"
                  : "bg-red-100"
              }`}
            >
              {isSuccess ? (
                <HiCheckCircle className="text-green-600" size={30} />
              ) : (
                <HiExclamationTriangle className="text-red-600" size={28} />
              )}
            </div>
          </div>

          {/* BAŞLIK */}
          <h2 className="text-xl font-semibold text-gray-900">
            {isSuccess
              ? "Güncelleme Başarılı"
              : isPuting
              ? "Güncelleniyor..."
              : "Blog Yazısını Güncelle"}
          </h2>

          {/* AÇIKLAMA */}
          <p className="text-sm text-gray-500 leading-relaxed">
            {isSuccess
              ? "Blog yazısı başarıyla güncellendi."
              : isPuting
              ? "Blog yazısı güncelleniyor, lütfen bekleyiniz."
              : "Bu işlem geri alınamaz. Blog yazısı kalıcı olarak değiştirilecektir."}
          </p>

          {/* BUTONLAR */}
          {!boolPut.put_now && (
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleClose}
                className="cursor-pointer w-full py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Vazgeç
              </button>

              <button
                onClick={handleDelete}
                className="cursor-pointer w-full py-2.5 rounded-xl bg-green-600 text-white hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <GrUpdate size={18} />
                Güncelle
              </button>
            </div>
          )}

          {/* LOADING */}
          {isPuting && (
            <div className="pt-4">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 animate-pulse w-full"></div>
              </div>
            </div>
          )}

          {/* BAŞARILI */}
          {isSuccess && (
            <button
              onClick={handleClose}
              className="mt-4 w-full py-2.5 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
            >
              Kapat
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PutWarningModal;

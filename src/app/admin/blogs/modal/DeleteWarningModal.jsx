"use client";

import {
  HiXMark,
  HiTrash,
  HiCheckCircle,
  HiExclamationTriangle,
} from "react-icons/hi2";

const DeleteWarningModal = ({
  open,
  setOpen,
  deleteBlogText,
  blogId,
  boolDelete,
  setBoolDelete,
}) => {
  if (!open) return null;

  const isDeleting = boolDelete.delete_now && !boolDelete.delete_end;
  const isSuccess = boolDelete.delete_now && boolDelete.delete_end;

  const handleDelete = async () => {
    setBoolDelete({
      delete_now: true,
      delete_end: false,
    });

    await deleteBlogText(blogId);
    // ⛔ delete_end senin delete fonksiyonunda true olacak
  };

  const handleClose = () => {
    setBoolDelete({ delete_now: false, delete_end: false });
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* KAPAT (sadece işlem yokken) */}
        {!isDeleting && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
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
                  : isDeleting
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
              ? "Silme Başarılı"
              : isDeleting
              ? "Siliniyor..."
              : "Blog Yazısını Sil"}
          </h2>

          {/* AÇIKLAMA */}
          <p className="text-sm text-gray-500 leading-relaxed">
            {isSuccess
              ? "Blog yazısı başarıyla silindi."
              : isDeleting
              ? "Blog yazısı siliniyor, lütfen bekleyiniz."
              : "Bu işlem geri alınamaz. Blog yazısı kalıcı olarak silinecektir."}
          </p>

          {/* BUTONLAR */}
          {!boolDelete.delete_now && (
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleClose}
                className="w-full py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Vazgeç
              </button>

              <button
                onClick={handleDelete}
                className="w-full py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                <HiTrash size={18} />
                Sil
              </button>
            </div>
          )}

          {/* LOADING */}
          {isDeleting && (
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

export default DeleteWarningModal;

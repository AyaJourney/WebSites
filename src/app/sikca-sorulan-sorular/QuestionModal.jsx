import React from 'react'
import Contact from '../iletisim/Contact';

const QuestionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent p-4">
      {/* Modal Arka Planı */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={onClose}
        />

      {/* Modal İçeriği */}
      <div className="relative bg-white  rounded-lg shadow-2xl w-full max-w-xl md:max-w-2xl lg:max-w-3xl z-50 max-h-[90vh] overflow-auto">

        {/* Kapatma ikonu - sağ üstte */}
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="cursor-pointer absolute right-3 top-3 text-gray-500  hover:text-gray-700  transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* İçerik - Contact bileşeni modal içine tam yayılsın */}
        <div className="p-4 md:p-6 w-full pt-12">
          <div className="w-full max-w-none">
            <Contact onClose={onClose} fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;

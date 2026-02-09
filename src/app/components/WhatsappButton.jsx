"use client";
import React, { useState, useEffect } from "react";
import { scenarios } from "@/helper/help";
import { FaWhatsapp } from "react-icons/fa";

const findReply = (msg) => {
  const text = msg.toLowerCase();
  for (let s of scenarios) {
    if (s.keywords.some((kw) => text.includes(kw))) {
      return s.reply;
    }
  }
  return null; // filtrede yok
};

export default function WhatsAppChatWithIcon() {
const [showScrollTop, setShowScrollTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Bize buradan yazabilirsiniz.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      anim: true,
    },
  ]);
  const [typing, setTyping] = useState(false);




  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      anim: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    // playSound();
    setTyping(true);

    setTimeout(() => {
      const botReply = findReply(input);

      if (botReply) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: botReply,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            anim: true,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Mesajınızı danışmanımıza iletiyorum, lütfen birkaç saniye bekleyin 😊",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            anim: true,
          },
        ]);

        // WhatsApp yönlendirmesi
        setTimeout(() => {
           const phone = "+905302199056";
          const url = `https://wa.me/${phone}?text=${encodeURIComponent(userMessage.text)}`;
          window.open(url, "_blank");
        }, 1500);
      }

      setTyping(false);
      // playSound();
    }, 1000 + Math.random() * 1000);
  };
useEffect(() => {
  const onScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
  return (
    <div>


      {/* SADECE WHATSAPP İKONU */}
{/* SAĞ ALT SABİT ALAN */}
{!open && (
  <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-4 items-end">
    
    {/* Scroll to Top – sadece aşağıdaysa */}
    {showScrollTop && (
      <div className="group">
 <button
        aria-label="Sayfanın başına git"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-gray-700 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      </div>
     
    )}

    {/* WhatsApp – HER ZAMAN GÖRÜNÜR */}
    <div className="group">
      <button
        aria-label="Whatsapp"
        onClick={() => setOpen(true)}
        className="bg-green-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition"
      >
        <FaWhatsapp className="text-white text-4xl" />
      </button>

      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        WhatsApp
      </span>
    </div>
  </div>
)}



      {/* CHAT KUTUSU */}
      {open && (
        <div
          style={{
            width: "320px",
            height: "480px",
            backgroundColor: "#fff",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            animation: "fadeIn 0.3s ease",
            zIndex:9999
          }}
        >
          {/* ÜST BAR */}
          <div
            style={{
              backgroundColor: "#075E54",
              color: "white",
              padding: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/images/icon.png"
                alt="icon"
                style={{ width: "35px", height: "35px", borderRadius: "50%" }}
              />
              <span style={{ fontSize: "16px" }}>Aya Journey</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", color: "white", fontSize: "20px", cursor: "pointer" }}
                aria-label="Kapat"
            >
              ✕
            </button>
          </div>

          {/* MESAJ ALANI */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              backgroundImage: "url('/images/whatsapp_arka_plan.jpg')",
              backgroundSize: "cover",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: m.sender === "user" ? "#DCF8C6" : "white",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  maxWidth: "75%",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  opacity: m.anim ? 0 : 1,
                  transform: m.anim ? "translateY(10px)" : "translateY(0)",
                  animation: m.anim ? "fadeSlide 0.3s forwards" : "none",
                }}
              >
                <div style={{ fontSize: "14px" }}>{m.text}</div>
                <div style={{ fontSize: "11px", textAlign: "right", opacity: 0.6 }}>{m.time}</div>
              </div>
            ))}

            {typing && (
              <div className="typing-dot-wrapper">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
          </div>

          {/* ALT YAZMA ALANI */}
          <div
            style={{
              padding: "10px",
              display: "flex",
              backgroundColor: "#F0F0F0",
              gap: "10px",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Mesaj yazın..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "10px 15px",
                backgroundColor: "#075E54",
                color: "white",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Gönder"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* ANİMASYONLAR */}
      <style>{`
        @keyframes fadeSlide {
          0% {opacity:0; transform:translateY(10px);}
          100% {opacity:1; transform:translateY(0);}
        }
        @keyframes fadeIn {
          0% {opacity:0;}
          100% {opacity:1;}
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-8px);}
          60% {transform: translateY(-4px);}
        }
        .typing-dot-wrapper {
          display: flex;
          gap: 4px;
          align-self: flex-start;
          padding: 8px 12px;
          background: white;
          border-radius: 10px;
          max-width: 50%;
        }
        .typing-dot {
          width: 8px;
          height: 8px;
          background-color: #555;
          border-radius: 50%;
          animation: blink 1s infinite;
        }
        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0%, 80%, 100% {opacity:0;}
          40% {opacity:1;}
        }
      `}</style>
    </div>
  );
}

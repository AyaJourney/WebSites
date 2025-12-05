'use client';

import React, { useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { tr } from "date-fns/locale";
import Image from "next/image";
import CountryList from "country-list-with-dial-code-and-flag";
import { useRouter } from "next/navigation"; // Next 13+ için
import { AiOutlineClockCircle } from "react-icons/ai";
const RandevuCard = ({ person }) => {
  const router = useRouter();
  const [submitState, setSubmitState] = useState("idle");
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [level, setLevel] = useState("calendar");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [today, setToday] = useState(null);
  const [reservations, setReservations] = useState([]);
  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];

  // Country setup
  useEffect(() => {
    setCountries(CountryList.getAll());
  }, []);

  useEffect(() => {
    if (!countries || countries.length === 0) return;
    const defaultCountry = countries.find(c => c.code === "TR") || countries[0];
    setSelected(defaultCountry);
  }, [countries]);

  // Today setup
  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now);
  }, []);

  // Fetch reservations from API
  useEffect(() => {
    async function fetchReservations() {
      try {
        const res = await fetch("/api/reservation");
        const data = await res.json();
        setReservations(data);
      } catch (err) {
//         console.error("Randevular yüklenemedi", err);
      }
    }
    fetchReservations();
  }, []);

  // Click outside for country dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Form validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10,}$/;
  const nameRegex = /^[a-zA-ZçğıöşüÇĞİÖŞÜ\s]{2,}$/;

  const isFirstNameValid = nameRegex.test(formData.firstName);
  const isLastNameValid = nameRegex.test(formData.lastName);
  const isEmailValid = emailRegex.test(formData.email);
  const isPhoneValid = phoneRegex.test(formData.phone.replace(/\D/g, ""));
  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && formData.phone.trim() !== "" && isPhoneValid;

  // Handle randevu submit
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!selectedDay || !selectedTime || !isFormValid) return;

  const newReservation = {
    personId: person.id,
    personName: person.name,
    selectedDay: selectedDay.toISOString().split("T")[0],
    selectedTime,
    formData
  };

  try {
      setSubmitState("loading");
    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReservation),
    });

if (res.ok) {
  setSubmitState("success");

  // 2 saniye bekle
  await new Promise((resolve) => setTimeout(resolve, 2000));

  router.push("/");
  await new Promise((resolve) => setTimeout(resolve, 500));

  setSelectedDay(null);
  setSelectedTime(null);
  setReservations([...reservations, newReservation]);
  setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });




}
 else {
      const errorData = await res.json();
      setSubmitState("error");
    }
  } catch (err) {
//     console.error(err);
    setSubmitState("error");
  }
    setTimeout(() => setSubmitState("idle"), 3000);
};


return (
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-8">
    {/* Level göstergesi */}
 <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:flex sm:justify-center sm:items-center sm:gap-4">
  {[{label:"Randevu günü seç", state:selectedDay},{label:"Randevu saati seç", state:selectedTime},{label:"Bilgilerini doldur", state:isFormValid}].map((lvl,i)=>(
    <div 
      key={i} 
      className={`
        flex flex-col items-center mb-2
        ${i === 0 ? "col-start-1 row-start-1" : ""}
        ${i === 1 ? "col-start-2 row-start-1" : ""}
        ${i === 2 ? "col-start-2 row-start-2" : ""}
      `}
    >
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-semibold transition-all ${lvl.state?"bg-blue-600 text-white":"bg-gray-300 text-gray-600"}`}>
        {i+1}
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center">{lvl.label}</p>
    </div>
  ))}
</div>


    {/* Temsilci, Takvim ve Saatler */}
    <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-gray-200 pb-6">
      {/* Temsilci */}
      <div className="flex items-center md:flex-col md:items-center md:justify-start space-x-4 md:space-x-0 md:space-y-4 md:w-1/4">
        <Image
          src={person.photo}
          alt="Temsilci"
          width={80}
          height={80}
          className="rounded-full object-cover border-2 border-gray-300"
          unoptimized
        />
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900">{person.name}</h2>
          <p className="text-sm text-gray-500">{person.title}</p>
        </div>
      </div>

      {/* Takvim */}
{/* Takvim */}
{/* Takvim */}
<div className="w-full md:w-1/3 lg:w-2/4 bg-gray-50 rounded-lg p-2 md:p-4 min-h-[320px] box-border mx-auto flex justify-center">
  <div className="w-full h-full overflow-auto">
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={(day) => { setSelectedDay(day); setLevel("time"); }}
      disabled={(day) => day < today}
      locale={tr}
      className="w-full"
    />
  </div>
</div>



      {/* Saatler */}
   {/* Saatler */}
<div className="md:w-5/12 flex flex-col bg-gray-50 rounded-lg p-4 min-h-[320px] sm:min-h-auto">
  <span className="text-md text-gray-600 mb-2">Saat Seçin</span>
  {selectedDay ? (
    <div className="grid grid-cols-3 gap-2 h-full">
      {times.map(time => {
        const [hour, minute] = time.split(":").map(Number);
        const isTaken = reservations.some(
          r =>
            r.personId === person.id &&
            r.selectedDay === selectedDay.toISOString().split("T")[0] &&
            r.selectedTime === time
        );

        let disableTime = false;

        // Bugün ve geçmiş saat kontrolü
        if (selectedDay.toDateString() === today.toDateString()) {
          const now = new Date();
          if (hour < now.getHours() || (hour === now.getHours() && minute <= now.getMinutes())) {
            disableTime = true;
          }
        }

        return (
          <button
            key={time}
            onClick={() => { if (!isTaken && !disableTime) { setSelectedTime(time); setLevel("form"); } }}
            disabled={isTaken || disableTime}
            className={`
              flex items-center justify-center gap-1 h-12 px-4 text-sm font-medium rounded-2xl border transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.08)]
              ${selectedTime === time && !isTaken && !disableTime
                ? "bg-[#0A84FF] border-[#0A84FF] text-white shadow-[0_4px_14px_rgba(10,132,255,0.25)] scale-[1.03]"
                : isTaken || disableTime
                ? "bg-red-100/60 text-red-600 border-red-200 cursor-not-allowed"
                : "bg-white/70 border-gray-300 hover:scale-[1.02] hover:bg-white"
              }
            `}
          >
            <AiOutlineClockCircle
              size={18}
              className={`${selectedTime === time ? "text-white" : isTaken || disableTime ? "text-red-600" : "text-[#0A84FF]"}`}
            />
            {time}
          </button>
        );
      })}
    </div>
  ) : (
    <p className="text-gray-400 text-sm mt-2">Önce bir gün seçin</p>
  )}
</div>

    </div>

    {/* Form alanı */}
    {selectedTime && (
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700">Adınız*</label>
            <input
              required
              type="text"
              placeholder="Adınız"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${formData.firstName && !isFirstNameValid ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Soyadınız*</label>
            <input
              required
              type="text"
              placeholder="Soyadınız"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${formData.lastName && !isLastNameValid ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700">E-posta*</label>
            <input
              required
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${formData.email && !isEmailValid ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
            />
          </div>
<div ref={dropdownRef} className="relative w-full">
  <label className="block mb-1 text-gray-700">Telefon*</label>

  <div
    className={`flex items-center rounded-lg border ${
      formData.phone && !isPhoneValid ? "border-red-500" : "border-gray-300"
    }`}
  >
    {/* Ülke kodu */}
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="px-3 py-3 flex items-center gap-1 whitespace-nowrap"
    >
      <span className="text-lg">{selected?.flag}</span>
      <span className="text-sm sm:text-base">{selected?.dial_code}</span>
    </button>

    {/* Dropdown */}
    {open && (
      <ul className="absolute z-50 mt-1 w-56 max-h-60 overflow-auto bg-white border rounded-md shadow-lg text-sm">
        {countries.map((c, i) => (
          <li
            key={i}
            onClick={() => {
              setSelected(c);
              setOpen(false);
            }}
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <span>{c.flag}</span>
            <span className="flex-1">{c.name}</span>
            <span className="text-gray-500">{c.dial_code}</span>
          </li>
        ))}
      </ul>
    )}

    {/* Telefon inputu */}
    <input
      required
      type="tel"
      placeholder="5xx xxx xx xx"
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      className="
        flex-1 min-w-0     /* 🔥 Mobilde taşmayı engeller */
        p-3 bg-transparent 
        focus:outline-none 
        text-gray-900 
        rounded-r-lg
        placeholder:text-sm sm:placeholder:text-base /* 🔥 Küçük ekranda daha küçük placeholder */
      "
    />
  </div>
</div>

        </div>

        <div>
          <label className="block mb-1 text-gray-700">Mesajınız</label>
          <textarea
            rows={5}
            placeholder="Mesajınızı yazın..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 border-gray-300"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submitState === "loading"}
            className={`w-full sm:w-auto py-3 px-6 rounded-xl font-semibold transition-colors duration-300 ${
              submitState === "idle"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : submitState === "loading"
                ? "bg-yellow-500 text-white cursor-wait"
                : submitState === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {submitState === "loading"
              ? "Gönderiliyor..."
              : submitState === "success"
              ? "Randevu oluşturuldu! Ana sayfaya yönlendiriliyorsunuz."
              : submitState === "error"
              ? "Hata Oluştu!"
              : "Randevu Oluştur"}
          </button>
        </div>
      </form>
    )}
  </div>
);



};

export default RandevuCard;
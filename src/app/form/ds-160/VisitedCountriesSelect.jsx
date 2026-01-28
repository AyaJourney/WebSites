import { useState } from "react";
import { allCountries } from "@/helper/help"; // senin export ettiğin yer

export function VisitedCountriesSelect({
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
const parseCountries = (value = "") =>
  value
    .split(",")
    .map(v => v.trim())
    .filter(Boolean);

const toggleCountry = (current = "", country) => {
  const arr = parseCountries(current);
  return arr.includes(country)
    ? arr.filter(c => c !== country).join(",")
    : [...arr, country].join(",");
};
  const selected = parseCountries(value);

  const filtered = allCountries.filter(c =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      {/* INPUT GÖRÜNÜMÜ */}
      <div
        className="w-full mt-1 p-3 border rounded-xl shadow-sm cursor-pointer bg-white"
        onClick={() => setOpen(o => !o)}
      >
        {selected.length > 0
          ? selected.join(", ")
          : "Ülke seçiniz"}
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-xl shadow-lg max-h-80 overflow-hidden">
          
          {/* SEARCH */}
          <input
            className="w-full p-2 border-b outline-none"
            placeholder="Ülke ara..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {/* LIST */}
          <div className="max-h-64 overflow-y-auto">
            {filtered.map(c => (
              <label
                key={c.value}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(c.value)}
                  onChange={() =>
                    onChange(toggleCountry(value, c.value))
                  }
                />
                {c.label}
              </label>
            ))}

            {filtered.length === 0 && (
              <div className="p-3 text-sm text-gray-500">
                Sonuç bulunamadı
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

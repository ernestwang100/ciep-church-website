"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded border border-gray-200 hover:border-gray-400"
      aria-label="Toggle language"
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}

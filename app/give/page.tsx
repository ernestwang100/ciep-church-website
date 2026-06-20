"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Give() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.give.title}</h1>
      <p className="text-gray-600 mb-8">{t.give.subtitle}</p>
      <a
        href="#"
        className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
      >
        {t.give.onlineCTA}
      </a>
      <p className="text-gray-400 text-sm mt-6">{t.give.inPerson}</p>
    </div>
  );
}

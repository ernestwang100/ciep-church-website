"use client";

import { useLanguage } from "@/context/LanguageContext";

type Sermon = {
  _id: string;
  title: string;
  date: string;
  speaker: string;
  series: string;
  videoUrl: string;
  audioUrl: string;
};

export default function SermonsList({ items }: { items: Sermon[] }) {
  const { lang, t } = useLanguage();
  const locale = lang === "es" ? "es-MX" : "en-US";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.resources.title}</h1>
      <p className="text-gray-600 mb-10">{t.resources.subtitle}</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {items.length === 0 && (
          <div className="border border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
            {t.resources.empty}
          </div>
        )}
        {items.map((s) => (
          <div key={s._id} className="border border-gray-200 rounded-xl p-6">
            <p className="text-xs text-gray-400 mb-1">
              {new Date(s.date).toLocaleDateString(locale, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              {s.series && ` · ${s.series}`}
            </p>
            <h2 className="font-semibold text-gray-900 text-lg mb-1">{s.title}</h2>
            {s.speaker && <p className="text-sm text-gray-500 mb-3">{s.speaker}</p>}
            <div className="flex gap-3">
              {s.videoUrl && (
                <a
                  href={s.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline"
                >
                  {t.resources.watch}
                </a>
              )}
              {s.audioUrl && (
                <a
                  href={s.audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline"
                >
                  {t.resources.listen}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

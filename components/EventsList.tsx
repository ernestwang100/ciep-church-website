"use client";

import { useLanguage } from "@/context/LanguageContext";

type Event = {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  language: string;
  imageUrl: string;
};

export default function EventsList({ items }: { items: Event[] }) {
  const { lang, t } = useLanguage();
  const filtered = items.filter((e) => !e.language || e.language === lang);
  const locale = lang === "es" ? "es-MX" : "en-US";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.events.title}</h1>
      <p className="text-gray-600 mb-10">{t.events.subtitle}</p>

      <div className="space-y-6">
        {filtered.length === 0 && (
          <div className="border border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
            {t.events.empty}
          </div>
        )}
        {filtered.map((e) => (
          <div key={e._id} className="border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-4">
            {e.imageUrl && (
              <img src={e.imageUrl} alt={e.title} className="w-full sm:w-40 h-32 object-cover rounded-lg" />
            )}
            <div className="flex-1">
              <h2 className="font-semibold text-gray-900 text-lg mb-1">{e.title}</h2>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(e.date).toLocaleDateString(locale, {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                &mdash;{" "}
                {new Date(e.date).toLocaleTimeString(locale, {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
              {e.location && <p className="text-sm text-gray-500 mb-2">{e.location}</p>}
              {e.description && <p className="text-gray-600 text-sm">{e.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

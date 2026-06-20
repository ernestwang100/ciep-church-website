"use client";

import { useLanguage } from "@/context/LanguageContext";

type Announcement = {
  _id: string;
  title: string;
  date: string;
  body: string;
  language: string;
};

export default function AnnouncementsList({ items }: { items: Announcement[] }) {
  const { lang, t } = useLanguage();
  const filtered = items.filter((a) => !a.language || a.language === lang);
  const locale = lang === "es" ? "es-MX" : "en-US";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.announcements.title}</h1>
      <p className="text-gray-600 mb-10">{t.announcements.subtitle}</p>

      <div className="space-y-6">
        {filtered.length === 0 && (
          <div className="border border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
            {t.announcements.empty}
          </div>
        )}
        {filtered.map((a) => (
          <div key={a._id} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="font-semibold text-gray-900 text-lg">{a.title}</h2>
              <span className="text-xs text-gray-400 whitespace-nowrap pt-1">
                {new Date(a.date).toLocaleDateString(locale, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            {a.body && <p className="text-gray-600 text-sm whitespace-pre-line">{a.body}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

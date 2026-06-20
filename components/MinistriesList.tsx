"use client";

import { useLanguage } from "@/context/LanguageContext";

type Ministry = {
  _id: string;
  name: string;
  description: string;
  leader: string;
  contactEmail: string;
  imageUrl: string;
};

export default function MinistriesList({ items }: { items: Ministry[] }) {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.services.title}</h1>
      <p className="text-gray-600 mb-10">{t.services.subtitle}</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((m) => (
          <div key={m._id} className="border border-gray-200 rounded-xl p-6">
            {m.imageUrl && (
              <img src={m.imageUrl} alt={m.name} className="w-full h-32 object-cover rounded-lg mb-4" />
            )}
            <h2 className="font-semibold text-gray-900 text-lg mb-1">{m.name}</h2>
            <p className="text-gray-600 text-sm">{m.description}</p>
            {m.leader && (
              <p className="text-xs text-gray-400 mt-2">
                {t.services.ledBy} {m.leader}
              </p>
            )}
            {m.contactEmail && (
              <a
                href={`mailto:${m.contactEmail}`}
                className="text-xs text-gray-500 underline hover:no-underline mt-1 block"
              >
                {m.contactEmail}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

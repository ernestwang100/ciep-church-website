"use client";

import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.contact.title}</h1>
      <p className="text-gray-600 mb-12">{t.contact.subtitle}</p>

      {/* Two locations */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {siteConfig.locations.map((loc) => (
          <div key={loc.label} className="space-y-3">
            <h2 className="font-semibold text-gray-900 text-lg">
              {loc.label} — {loc.address}
            </h2>
            <p className="text-gray-600 text-sm">
              {loc.address}
              <br />
              {loc.city}
            </p>
            <iframe
              src={loc.mapSrc}
              width="100%"
              height="220"
              className="rounded-xl border border-gray-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${loc.label} location`}
            />
            <a
              href={loc.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-gray-900 underline hover:no-underline"
            >
              {t.contact.getDirections}
            </a>
          </div>
        ))}
      </div>

      {/* Shared info + contact form */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-gray-600 text-sm">
          <div>
            <p className="font-semibold text-gray-900">{t.contact.timesHeading}</p>
            {siteConfig.serviceTimes.map((st) => (
              <p key={st.label}>{st.label} — {st.time}</p>
            ))}
          </div>
          {siteConfig.phone && (
            <div>
              <p className="font-semibold text-gray-900">{t.contact.phoneHeading}</p>
              <p>{siteConfig.phone}</p>
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{t.contact.emailHeading}</p>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gray-900 underline">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.nameLabel}</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder={t.contact.namePlaceholder}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.emailLabel}</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.messageLabel}</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {t.contact.sendButton}
          </button>
        </form>
      </div>
    </div>
  );
}

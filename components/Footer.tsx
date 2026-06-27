"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export type FooterData = {
  email?: string;
  locations?: { label: string; address: string; city: string }[];
  serviceTimes?: { name_en: string; name_es: string; time: string }[];
};

export default function Footer({ data }: { data?: FooterData | null }) {
  const { lang, t } = useLanguage();

  const locations =
    data?.locations && data.locations.length > 0
      ? data.locations
      : siteConfig.locations;

  const email = data?.email || siteConfig.email;

  const serviceTimes =
    data?.serviceTimes && data.serviceTimes.length > 0
      ? data.serviceTimes.map((st) => ({
          name: (lang === "es" ? st.name_es : st.name_en) || st.name_en,
          time: st.time,
        }))
      : siteConfig.serviceTimes.map((st) => ({
          name: t.serviceTimes[st.label as keyof typeof t.serviceTimes],
          time: st.time,
        }));

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-white font-semibold text-lg mb-1">{t.site.name}</p>
          {locations.map((loc) => (
            <p key={loc.label} className="text-sm">
              {loc.label}: {loc.address}, {loc.city}
            </p>
          ))}
          {email && (
            <a href={`mailto:${email}`} className="text-sm hover:text-white transition-colors">
              {email}
            </a>
          )}
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <p className="text-white font-medium mb-1">{t.footer.quickLinks}</p>
          <Link href="/visit" className="hover:text-white transition-colors">{t.nav.visit}</Link>
          <Link href="/resources" className="hover:text-white transition-colors">{t.nav.resources}</Link>
          <Link href="/give" className="hover:text-white transition-colors">{t.nav.give}</Link>
          <Link href="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link>
        </div>

        <div className="text-sm">
          <p className="text-white font-medium mb-1">{t.footer.serviceTimes}</p>
          {serviceTimes.map((st) => (
            <p key={st.name}>{st.name} — {st.time}</p>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-xs text-center">
        © {new Date().getFullYear()} {t.site.name}. All rights reserved.
      </div>
    </footer>
  );
}

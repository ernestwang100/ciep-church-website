"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import type { ServiceTime, HomePageData } from "@/app/page";

export default function HomeContent({
  serviceTimes,
  homeData,
}: {
  serviceTimes: ServiceTime[] | null;
  homeData: HomePageData | null;
}) {
  const { lang, t } = useLanguage();

  const heroTitle =
    (lang === "es" ? homeData?.heroTitle_es : homeData?.heroTitle_en) ||
    t.home.heroTitle;

  const heroSubtitle =
    (lang === "es" ? homeData?.heroSubtitle_es : homeData?.heroSubtitle_en) ||
    t.home.heroSubtitle;

  const times =
    serviceTimes && serviceTimes.length > 0
      ? serviceTimes.map((st) => ({
          name: (lang === "es" ? st.name_es : st.name_en) || st.name_en,
          time: st.time,
        }))
      : siteConfig.serviceTimes.map((st) => ({
          name: t.serviceTimes[st.label as keyof typeof t.serviceTimes],
          time: st.time,
        }));

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle}</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">{heroSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/visit"
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            {t.home.visitCTA}
          </Link>
          <Link
            href="/resources"
            className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
          >
            {t.home.sermonsCTA}
          </Link>
        </div>
      </section>

      {/* Service times */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.home.joinUsHeading}</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          {times.map((st) => (
            <div key={st.name} className="flex-1 border border-gray-200 rounded-xl p-6">
              <p className="font-semibold text-gray-900 text-lg">{st.name}</p>
              <p className="text-gray-500 mt-1">{st.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements preview */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.home.announcementsHeading}</h2>
        <p className="text-gray-500 mb-6">{t.home.announcementsSubtitle}</p>
        <Link
          href="/announcements"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          {t.home.announcementsCTA}
        </Link>
      </section>
    </div>
  );
}

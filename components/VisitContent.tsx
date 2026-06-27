"use client";

import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

type ServiceTime = { name_en?: string; name_es?: string; time?: string };
type Location = {
  label?: string;
  address?: string;
  city?: string;
  mapSrc?: string;
  directionsHref?: string;
};

export type VisitPageData = {
  serviceTimes?: ServiceTime[];
  locations?: Location[];
  expectBody_en?: string;
  expectBody_es?: string;
  parkingBody_en?: string;
  parkingBody_es?: string;
  kidsBody_en?: string;
  kidsBody_es?: string;
} | null;

export default function VisitContent({ visitData }: { visitData: VisitPageData }) {
  const { t, lang } = useLanguage();

  const locations =
    visitData?.locations?.length ? visitData.locations : siteConfig.locations;

  const serviceTimes = visitData?.serviceTimes?.length
    ? visitData.serviceTimes
    : siteConfig.serviceTimes.map((st) => ({
        name_en: st.name,
        name_es: st.name,
        time: st.time,
      }));

  const expectBody =
    lang === "es"
      ? visitData?.expectBody_es || t.visit.expectBody
      : visitData?.expectBody_en || t.visit.expectBody;

  const parkingBody =
    lang === "es"
      ? visitData?.parkingBody_es || t.visit.parkingBody
      : visitData?.parkingBody_en || t.visit.parkingBody;

  const kidsBody =
    lang === "es"
      ? visitData?.kidsBody_es || t.visit.kidsBody
      : visitData?.kidsBody_en || t.visit.kidsBody;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.visit.title}</h1>
      <p className="text-gray-600 mb-10">{t.visit.subtitle}</p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.visit.locationsHeading}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <div key={loc.label} className="space-y-3">
                <p className="font-medium text-gray-900">{loc.label} — {loc.address}</p>
                <p className="text-gray-600 text-sm">{loc.address}, {loc.city}</p>
                {loc.mapSrc && (
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="200"
                    className="rounded-xl border border-gray-200"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${loc.label} location`}
                  />
                )}
                {loc.directionsHref && (
                  <a
                    href={loc.directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-gray-900 underline hover:no-underline"
                  >
                    {t.visit.getDirections}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.timesHeading}</h2>
          {serviceTimes.map((st, i) => (
            <p key={i} className="text-gray-600">
              {lang === "es" ? st.name_es : st.name_en} — {st.time}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.expectHeading}</h2>
          <p className="text-gray-600">{expectBody}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.parkingHeading}</h2>
          <p className="text-gray-600">{parkingBody}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.kidsHeading}</h2>
          <p className="text-gray-600">{kidsBody}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.questionsHeading}</h2>
          <p className="text-gray-600">
            {t.visit.questionsPrefix}{" "}
            <a href="/contact" className="underline text-gray-900">
              {t.visit.contactUs}
            </a>{" "}
            {t.visit.questionsSuffix}
          </p>
        </div>
      </div>
    </div>
  );
}

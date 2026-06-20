"use client";

import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function PlanYourVisit() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.visit.title}</h1>
      <p className="text-gray-600 mb-10">{t.visit.subtitle}</p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.visit.locationsHeading}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {siteConfig.locations.map((loc) => (
              <div key={loc.label} className="space-y-3">
                <p className="font-medium text-gray-900">{loc.label} — {loc.address}</p>
                <p className="text-gray-600 text-sm">{loc.address}, {loc.city}</p>
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="200"
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
                  {t.visit.getDirections}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.timesHeading}</h2>
          {siteConfig.serviceTimes.map((st) => (
            <p key={st.label} className="text-gray-600">{st.name} — {st.time}</p>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.expectHeading}</h2>
          <p className="text-gray-600">{t.visit.expectBody}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.parkingHeading}</h2>
          <p className="text-gray-600">{t.visit.parkingBody}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.visit.kidsHeading}</h2>
          <p className="text-gray-600">{t.visit.kidsBody}</p>
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

import { siteConfig } from "@/lib/config";

export default function PlanYourVisit() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Plan Your Visit</h1>
      <p className="text-gray-600 mb-10">
        We&apos;re glad you&apos;re considering joining us. Here&apos;s everything you need to know before you come.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Locations</h2>
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
                  Get Directions →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Service Times</h2>
          {siteConfig.serviceTimes.map((st) => (
            <p key={st.label} className="text-gray-600">{st.name} — {st.time}</p>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">What to Expect</h2>
          <p className="text-gray-600">
            Our services last about 90 minutes and include worship, prayer, and a message from the Bible.
            Come as you are — there is no dress code.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Parking</h2>
          <p className="text-gray-600">Free parking is available at both locations.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Kids</h2>
          <p className="text-gray-600">
            We have programs for children of all ages during the Sunday service so parents can worship without distraction.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Questions?</h2>
          <p className="text-gray-600">
            Feel free to{" "}
            <a href="/contact" className="underline text-gray-900">
              contact us
            </a>{" "}
            anytime — we&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </div>
  );
}

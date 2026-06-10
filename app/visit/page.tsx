const locations = [
  {
    name: "West — 305 Bird Ave",
    address: "305 Bird Ave, El Paso, TX 79922",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.989174313424!2d-106.57727372342494!3d31.825287832012407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ddf8496da86b19%3A0x88240ff8ae933531!2sThe%20Church%20In%20El%20Paso!5e0!3m2!1sen!2sus!4v1781060176904!5m2!1sen!2sus",
    directionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=305+Bird+Ave,+El+Paso,+TX+79922",
  },
  {
    name: "East District — 11395 James Watt Dr STE A9",
    address: "11395 James Watt Dr STE A9, El Paso, TX 79936",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.9972646568417!2d-106.31781813860337!3d31.74327563327974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7438d17792c2f%3A0x880514d0d38630f1!2sThe%20Church%20in%20El%20Paso%20-%20East%20District!5e0!3m2!1sen!2sus!4v1781060117989!5m2!1sen!2sus",
    directionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=11395+James+Watt+Dr+STE+A9,+El+Paso,+TX+79936",
  },
];

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
            {locations.map((loc) => (
              <div key={loc.name} className="space-y-3">
                <p className="font-medium text-gray-900">{loc.name}</p>
                <p className="text-gray-600 text-sm">{loc.address}</p>
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="200"
                  className="rounded-xl border border-gray-200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={loc.name}
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
          <p className="text-gray-600">Sunday Service — 10:00 AM</p>
          <p className="text-gray-600">Wednesday Bible Study — 7:00 PM</p>
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

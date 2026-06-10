const locations = [
  {
    name: "West — 305 Bird Ave",
    address: "305 Bird Ave",
    city: "El Paso, TX 79922",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.989174313424!2d-106.57727372342494!3d31.825287832012407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ddf8496da86b19%3A0x88240ff8ae933531!2sThe%20Church%20In%20El%20Paso!5e0!3m2!1sen!2sus!4v1781060176904!5m2!1sen!2sus",
    directionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=305+Bird+Ave,+El+Paso,+TX+79922",
  },
  {
    name: "East District — 11395 James Watt Dr STE A9",
    address: "11395 James Watt Dr STE A9",
    city: "El Paso, TX 79936",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.9972646568417!2d-106.31781813860337!3d31.74327563327974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7438d17792c2f%3A0x880514d0d38630f1!2sThe%20Church%20in%20El%20Paso%20-%20East%20District!5e0!3m2!1sen!2sus!4v1781060117989!5m2!1sen!2sus",
    directionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=11395+James+Watt+Dr+STE+A9,+El+Paso,+TX+79936",
  },
];

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-600 mb-12">We&apos;d love to hear from you. Reach out anytime.</p>

      {/* Two locations */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {locations.map((loc) => (
          <div key={loc.name} className="space-y-3">
            <h2 className="font-semibold text-gray-900 text-lg">{loc.name}</h2>
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

      {/* Shared info + contact form */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-gray-600 text-sm">
          <div>
            <p className="font-semibold text-gray-900">Service Times</p>
            <p>Sunday — 10:00 AM</p>
            <p>Wednesday — 7:00 PM</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Phone</p>
            <p>[Phone Number]</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <p>[Email Address]</p>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

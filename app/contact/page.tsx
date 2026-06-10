export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-600 mb-10">We&apos;d love to hear from you. Reach out anytime.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-gray-600">
          <div>
            <p className="font-semibold text-gray-900">Address</p>
            <p>[Church Address]</p>
            <p>El Paso, TX</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Phone</p>
            <p>[Phone Number]</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <p>[Email Address]</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Service Times</p>
            <p>Sunday — 10:00 AM</p>
            <p>Wednesday — 7:00 PM</p>
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

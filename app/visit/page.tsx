export default function PlanYourVisit() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Plan Your Visit</h1>
      <p className="text-gray-600 mb-8">We&apos;re glad you&apos;re considering joining us. Here&apos;s everything you need to know before you come.</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">When & Where</h2>
          <p className="text-gray-600">Sunday Service — 10:00 AM</p>
          <p className="text-gray-600">Wednesday Bible Study — 7:00 PM</p>
          <p className="text-gray-600 mt-2">Address: [Church Address], El Paso, TX</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">What to Expect</h2>
          <p className="text-gray-600">Our services last about 90 minutes and include worship, prayer, and a message from the Bible. Come as you are — there is no dress code.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Parking</h2>
          <p className="text-gray-600">Free parking is available in the lot directly in front of the building.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Kids</h2>
          <p className="text-gray-600">We have programs for children of all ages during the Sunday service so parents can worship without distraction.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Questions?</h2>
          <p className="text-gray-600">Feel free to <a href="/contact" className="underline text-gray-900">contact us</a> anytime — we&apos;d love to hear from you.</p>
        </div>
      </div>
    </div>
  );
}

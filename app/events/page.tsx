export default function Events() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Events</h1>
      <p className="text-gray-600 mb-10">Upcoming services, gatherings, and special events at CIEP Church.</p>

      <div className="space-y-6">
        {/* Event cards will be populated from Sanity */}
        <div className="border border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
          No upcoming events.
        </div>
      </div>
    </div>
  );
}

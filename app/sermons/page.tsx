export default function Sermons() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Sermons</h1>
      <p className="text-gray-600 mb-10">Watch or listen to recent messages from CIEP Church.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Sermon cards will be populated from Sanity */}
        <div className="border border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
          Sermons coming soon.
        </div>
      </div>
    </div>
  );
}

export default function Announcements() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Announcements</h1>
      <p className="text-gray-600 mb-10">Stay up to date with everything happening at CIEP Church.</p>

      <div className="space-y-6">
        {/* Announcement cards will be populated from Sanity */}
        <div className="border border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
          No announcements yet.
        </div>
      </div>
    </div>
  );
}

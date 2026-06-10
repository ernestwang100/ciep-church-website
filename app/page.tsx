import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to The Church in El Paso</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          A community of faith in El Paso. Everyone is welcome here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/visit"
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/sermons"
            className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
          >
            Watch Sermons
          </Link>
        </div>
      </section>

      {/* Service times */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Join Us This Week</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <div className="flex-1 border border-gray-200 rounded-xl p-6">
            <p className="font-semibold text-gray-900 text-lg">Sunday Service</p>
            <p className="text-gray-500 mt-1">10:00 AM</p>
          </div>
          <div className="flex-1 border border-gray-200 rounded-xl p-6">
            <p className="font-semibold text-gray-900 text-lg">Wednesday Bible Study</p>
            <p className="text-gray-500 mt-1">7:00 PM</p>
          </div>
        </div>
      </section>

      {/* Announcements preview */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
        <p className="text-gray-500 mb-6">Stay up to date with what&apos;s happening at The Church in El Paso.</p>
        <Link
          href="/announcements"
          className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          View All Announcements
        </Link>
      </section>
    </div>
  );
}

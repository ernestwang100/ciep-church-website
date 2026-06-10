import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-white font-semibold text-lg mb-1">The Church in El Paso</p>
          <p className="text-sm">West: 305 Bird Ave, El Paso, TX 79922</p>
          <p className="text-sm">East: 11395 James Watt Dr STE A9, El Paso, TX 79936</p>
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <p className="text-white font-medium mb-1">Quick Links</p>
          <Link href="/visit" className="hover:text-white transition-colors">Plan Your Visit</Link>
          <Link href="/sermons" className="hover:text-white transition-colors">Sermons</Link>
          <Link href="/give" className="hover:text-white transition-colors">Give</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="text-sm">
          <p className="text-white font-medium mb-1">Service Times</p>
          <p>Sunday — 10:00 AM</p>
          <p>Wednesday — 7:00 PM</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-xs text-center">
        © {new Date().getFullYear()} The Church in El Paso. All rights reserved.
      </div>
    </footer>
  );
}

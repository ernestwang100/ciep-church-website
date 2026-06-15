import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-white font-semibold text-lg mb-1">{siteConfig.name}</p>
          {siteConfig.locations.map((loc) => (
            <p key={loc.label} className="text-sm">
              {loc.label}: {loc.address}, {loc.city}
            </p>
          ))}
          {siteConfig.email && (
            <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-white transition-colors">
              {siteConfig.email}
            </a>
          )}
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
          {siteConfig.serviceTimes.map((st) => (
            <p key={st.label}>{st.label} — {st.time}</p>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-xs text-center">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

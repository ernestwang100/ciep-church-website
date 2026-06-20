"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/visit", label: t.nav.visit },
    { href: "/about", label: t.nav.about },
    { href: "/announcements", label: t.nav.announcements },
    { href: "/events", label: t.nav.events },
    { href: "/services", label: t.nav.services },
    { href: "/give", label: t.nav.give },
    { href: "/resources", label: t.nav.resources },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl text-primary">
          {t.site.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-gray-900 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <LanguageToggle />
          </li>
        </ul>

        {/* Mobile right side */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            className="p-2 rounded text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-1 hover:text-gray-900 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

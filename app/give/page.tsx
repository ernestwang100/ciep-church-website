"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";

export default function Give() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.give.title}</h1>
      <p className="text-gray-600 mb-10">{t.give.subtitle}</p>

      <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
          {t.give.zelleHeading}
        </p>
        <p className="text-gray-600 text-sm mb-6">{t.give.zelleInstructions}</p>

        <div className="flex justify-center mb-6">
          <Image
            src="/zelle-qr.png"
            alt="Zelle QR code"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        <div className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
          <span className="font-mono text-gray-900 text-sm">{siteConfig.email}</span>
          <button
            onClick={copyEmail}
            className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors shrink-0"
          >
            {copied ? t.give.copiedLabel : t.give.copyLabel}
          </button>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-8">{t.give.inPerson}</p>
    </div>
  );
}

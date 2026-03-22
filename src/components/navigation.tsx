"use client";

import { useState } from "react";
import Link from "next/link";
import { Translations } from "@/i18n/translations";

interface NavigationProps {
  t: Translations["nav"];
}

export function Navigation({ t }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm h-20">
      <div className="flex justify-between items-center max-w-[1120px] mx-auto px-6 h-full">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tighter text-emerald-950 font-[family-name:var(--font-heading)]">
          {t.logo}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-emerald-800/70 font-medium hover:text-emerald-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href={t.langHref}
            className="text-emerald-900 font-bold label-caps text-xs hover:text-emerald-700 transition-colors"
          >
            {t.langToggle}
          </Link>
          <button
            className="md:hidden p-2 text-emerald-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/20 px-6 py-4 space-y-4">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-emerald-800/70 font-medium hover:text-emerald-900 transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

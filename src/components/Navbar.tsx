"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dictionary } = useLanguage();

  const navLinks = [
    { href: "/", label: dictionary.common.nav.home },
    { href: "/services", label: dictionary.common.nav.services },
    { href: "/solutions", label: dictionary.common.nav.solutions },
    { href: "/industries", label: dictionary.common.nav.industries },
    { href: "/success-stories", label: dictionary.common.nav.successStories },
    { href: "/about", label: dictionary.common.nav.about },
    { href: "/contact", label: dictionary.common.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight">
          Optona
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-blue-700 px-5 py-2 text-white font-semibold hover:bg-blue-800 transition-colors"
          >
            {dictionary.common.contactCta}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-4">
          <div className="py-3">
            <LanguageSwitcher />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}


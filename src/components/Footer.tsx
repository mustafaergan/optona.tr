"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { dictionary } = useLanguage();

  const footerLinks = [
    { href: "/", label: dictionary.common.nav.home },
    { href: "/services", label: dictionary.common.nav.services },
    { href: "/solutions", label: dictionary.common.nav.solutions },
    { href: "/industries", label: dictionary.common.nav.industries },
    { href: "/about", label: dictionary.common.nav.about },
    { href: "/contact", label: dictionary.common.nav.contact },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              Optona
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              {dictionary.common.footer.brandDescription}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {dictionary.common.footer.pagesTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {dictionary.common.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:info@optona.tr" className="hover:text-white transition-colors">
                  info@optona.tr
                </a>
              </li>
              <li>{dictionary.common.footer.country}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Optona. {dictionary.common.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

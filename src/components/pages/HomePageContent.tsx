"use client";

import Link from "next/link";
import PageCta from "@/components/sections/PageCta";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function HomePageContent() {
  const { dictionary, language } = useLanguage();
  const home = dictionary.home;

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Optona",
    url: "https://optona.tr",
    inLanguage: language === "tr" ? "tr-TR" : language === "de" ? "de-DE" : "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-indigo-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            {home.hero.titleTop}
            <br />
            <span className="text-yellow-300">{home.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">{home.hero.description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-xl bg-white px-8 py-3.5 text-lg font-bold text-blue-700 shadow-lg transition-colors hover:bg-blue-50"
            >
              {home.hero.primaryButton}
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border-2 border-white px-8 py-3.5 text-lg font-bold text-white transition-colors hover:bg-white/10"
            >
              {home.hero.secondaryButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {home.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">{home.servicesSection.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">{home.servicesSection.description}</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {home.servicesSection.items.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block rounded-xl bg-blue-700 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              {home.servicesSection.viewAllButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">{home.aboutSection.title}</h2>
              <p className="mt-4 text-lg text-gray-500">{home.aboutSection.description}</p>
              <ul className="mt-6 space-y-3">
                {home.aboutSection.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="font-bold text-blue-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
              >
                {home.aboutSection.button}
              </Link>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center text-white shadow-xl">
              {home.aboutSection.panel.map((item) => (
                <div key={item.label} className="mb-6 last:mb-0">
                  <div className="text-5xl font-extrabold">{item.value}</div>
                  <div className="mt-2 text-xl font-semibold text-blue-100">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title={home.cta.title}
        description={home.cta.description}
        buttonLabel={home.cta.button}
      />
    </>
  );
}

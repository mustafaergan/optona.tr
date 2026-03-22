"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function IndustriesPageContent() {
  const { dictionary } = useLanguage();
  const industriesPage = dictionary.industriesPage;

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{industriesPage.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{industriesPage.hero.description}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industriesPage.items.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-4xl">{industry.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{industry.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-600">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">{industriesPage.statsSection.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">{industriesPage.statsSection.description}</p>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {industriesPage.statsSection.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-4xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">{industriesPage.cta.title}</h2>
          <p className="mt-4 text-lg text-blue-100">{industriesPage.cta.description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-lg font-bold text-blue-700 shadow-lg transition-colors hover:bg-blue-50"
          >
            {industriesPage.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}

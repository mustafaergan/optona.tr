"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function SuccessStoriesPageContent() {
  const { dictionary } = useLanguage();
  const stories = dictionary.successStoriesPage;

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{stories.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{stories.hero.description}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {stories.items.map((cs) => (
              <div
                key={cs.title}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl">{cs.icon}</span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {cs.sector}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">{cs.company}</p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">{cs.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{cs.description}</p>

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {cs.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl bg-blue-50 p-3 text-center">
                        <div className="text-2xl font-extrabold text-blue-700">{metric.value}</div>
                        <div className="mt-0.5 text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{stories.statsSection.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">{stories.statsSection.description}</p>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stories.statsSection.stats.map((stat) => (
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
          <h2 className="text-3xl font-extrabold">{stories.cta.title}</h2>
          <p className="mt-4 text-lg text-blue-100">{stories.cta.description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-lg font-bold text-blue-700 shadow-lg transition-colors hover:bg-blue-50"
          >
            {stories.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}

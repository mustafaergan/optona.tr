"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function AboutPageContent() {
  const { dictionary } = useLanguage();
  const about = dictionary.about;

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{about.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{about.hero.description}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">{about.story.title}</h2>
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-gray-500">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-blue-50 p-6 text-center">
                  <div className="text-4xl font-extrabold text-blue-700">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="text-3xl">🎯</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{about.mission.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-500">{about.mission.description}</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="text-3xl">🌟</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{about.vision.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-500">{about.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">{about.valuesTitle}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-5xl">{value.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">{about.team.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">{about.team.description}</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.team.members.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-2xl font-bold text-white">
                  {initialsFromName(member.name)}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">{about.cta.title}</h2>
          <p className="mt-4 text-lg text-blue-100">{about.cta.description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-lg font-bold text-blue-700 shadow-lg transition-colors hover:bg-blue-50"
          >
            {about.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}

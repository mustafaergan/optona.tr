"use client";

import PageCta from "@/components/sections/PageCta";
import PageHero from "@/components/sections/PageHero";
import FeatureCard from "@/components/ui/FeatureCard";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function SolutionsPageContent() {
  const { dictionary } = useLanguage();
  const solutionsPage = dictionary.solutionsPage;

  return (
    <>
      <PageHero title={solutionsPage.hero.title} description={solutionsPage.hero.description} />

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutionsPage.items.map((solution) => (
              <FeatureCard
                key={solution.title}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                items={solution.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{solutionsPage.why.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">{solutionsPage.why.description}</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {solutionsPage.why.items.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={solutionsPage.cta.title}
        description={solutionsPage.cta.description}
        buttonLabel={solutionsPage.cta.button}
      />
    </>
  );
}

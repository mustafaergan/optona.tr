"use client";

import PageCta from "@/components/sections/PageCta";
import PageHero from "@/components/sections/PageHero";
import FeatureCard from "@/components/ui/FeatureCard";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ServicesPageContent() {
  const { dictionary } = useLanguage();
  const servicesPage = dictionary.servicesPage;

  return (
    <>
      <PageHero title={servicesPage.hero.title} description={servicesPage.hero.description} />

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesPage.items.map((service) => (
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={servicesPage.cta.title}
        description={servicesPage.cta.description}
        buttonLabel={servicesPage.cta.button}
      />
    </>
  );
}

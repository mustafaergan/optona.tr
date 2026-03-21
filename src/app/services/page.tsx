import type { Metadata } from "next";
import PageCta from "@/components/sections/PageCta";
import PageHero from "@/components/sections/PageHero";
import FeatureCard from "@/components/ui/FeatureCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Hizmetler – Optona",
  description: "Optona'nın sunduğu dijital hizmetler: Web geliştirme, mobil uygulama, bulut çözümleri ve daha fazlası.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        description="İşletmenizin dijital ihtiyaçlarını karşılamak için kapsamlı ve yenilikçi teknoloji çözümleri sunuyoruz."
      />

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
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
        title="Projenizi Konuşalım"
        description="İhtiyacınıza özel bir teklif almak için bizimle iletişime geçin."
        buttonLabel="Teklif Alın"
      />
    </>
  );
}

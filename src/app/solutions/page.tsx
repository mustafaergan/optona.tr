import type { Metadata } from "next";
import PageCta from "@/components/sections/PageCta";
import PageHero from "@/components/sections/PageHero";
import FeatureCard from "@/components/ui/FeatureCard";
import { solutions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Çözümler – Optona",
  description: "Optona'nın sunduğu iş çözümleri: ERP, CRM, IoT, e-ticaret ve daha fazlası.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Çözümlerimiz"
        description="İşletmenizin ihtiyaçlarına özel, uçtan uca dijital çözümler sunuyoruz. ERP'den CRM'e, IoT'den bulut altyapısına kadar her alanda yanınızdayız."
      />

      {/* Solutions Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
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

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Neden Optona Çözümleri?</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Sektör deneyimimiz ve teknoloji uzmanlığımızla işletmenize özel çözümler üretiyoruz.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🎯", title: "İşinize Özel", desc: "Her çözüm, işletmenizin özgün ihtiyaçlarına göre tasarlanır." },
              { icon: "⚡", title: "Hızlı Uygulama", desc: "Kanıtlanmış metodolojilerimizle projeleri zamanında teslim ediyoruz." },
              { icon: "🔗", title: "Tam Entegrasyon", desc: "Mevcut sistemlerinizle sorunsuz entegrasyon sağlıyoruz." },
              { icon: "📈", title: "Ölçeklenebilir", desc: "İşletmeniz büyüdükçe çözümlerimiz de büyür." },
            ].map((item) => (
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
        title="Çözümünüzü Birlikte Tasarlayalım"
        description="İhtiyacınıza özel bir çözüm için uzmanlarımızla görüşün."
        buttonLabel="Ücretsiz Danışmanlık Alın"
      />
    </>
  );
}
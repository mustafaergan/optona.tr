import type { Metadata } from "next";
import Link from "next/link";
import PageCta from "@/components/sections/PageCta";
import { homeServices, homeStats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dijital Donusumunuzun Guvenilir Ortagi",
  description:
    "Optona ile web, mobil, bulut ve veri odakli cozumlerle dijital donusum surecinizi hizlandirin.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Optona | Dijital Donusumunuzun Guvenilir Ortagi",
    description:
      "Optona ile web, mobil, bulut ve veri odakli cozumlerle dijital donusum surecinizi hizlandirin.",
    url: "https://optona.tr/",
    type: "website",
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Optona",
    url: "https://optona.tr",
    email: "info@optona.tr",
    sameAs: ["https://optona.tr"],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Optona",
    url: "https://optona.tr",
    inLanguage: "tr-TR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, webSiteSchema]),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-indigo-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Dijital Dönüşümünüzün
            <br />
            <span className="text-yellow-300">Güvenilir Ortağı</span>
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            Optona olarak işletmenizi geleceğe taşıyacak yenilikçi dijital çözümler
            sunuyoruz. Fikirlerinizi gerçeğe dönüştürün.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="rounded-xl bg-white px-8 py-3.5 text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border-2 border-white px-8 py-3.5 text-white font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Ücretsiz Danışmanlık
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {homeStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Hizmetlerimiz
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              İşletmenizin dijital ihtiyaçlarını karşılamak için geniş bir hizmet
              yelpazesi sunuyoruz.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
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
              className="inline-block rounded-xl bg-blue-700 px-8 py-3.5 text-white font-semibold hover:bg-blue-800 transition-colors"
            >
              Tüm Hizmetleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                Neden Optona?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                10 yılı aşkın deneyimimiz ve 50&apos;den fazla mutlu müşterimiz ile
                Türkiye&apos;nin önde gelen dijital dönüşüm şirketlerinden biriyiz.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Uzman ve deneyimli yazılım ekibi",
                  "Müşteri odaklı çözümler",
                  "Hızlı ve güvenilir teslimat",
                  "7/24 teknik destek",
                  "Rekabetçi fiyatlandırma",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue-700 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition-colors"
              >
                Hakkımızda Daha Fazla
              </Link>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white text-center shadow-xl">
              <div className="text-6xl font-extrabold">10+</div>
              <div className="mt-2 text-xl font-semibold text-blue-100">Yıllık Deneyim</div>
              <div className="mt-6 text-5xl font-extrabold">100+</div>
              <div className="mt-2 text-xl font-semibold text-blue-100">Proje Tamamlandı</div>
              <div className="mt-6 text-5xl font-extrabold">50+</div>
              <div className="mt-2 text-xl font-semibold text-blue-100">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Projenizi Birlikte Hayata Geçirelim"
        description="Ücretsiz danışmanlık için bizimle iletişime geçin."
        buttonLabel="Hemen İletişime Geçin"
      />
    </>
  );
}


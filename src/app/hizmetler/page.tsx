import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler – Optona",
  description: "Optona'nın sunduğu dijital hizmetler: Web geliştirme, mobil uygulama, bulut çözümleri ve daha fazlası.",
};

const services = [
  {
    icon: "💻",
    title: "Web Geliştirme",
    description:
      "Modern teknolojiler kullanarak hızlı, güvenli ve kullanıcı dostu web siteleri ile web uygulamaları geliştiriyoruz. React, Next.js, Node.js ve daha fazlası ile kurumsal düzeyde projeler üretiyoruz.",
    features: ["Responsive Tasarım", "SEO Optimizasyonu", "Yüksek Performans", "Güvenlik Odaklı"],
  },
  {
    icon: "📱",
    title: "Mobil Uygulama",
    description:
      "iOS ve Android platformları için sezgisel ve etkileyici mobil uygulamalar geliştiriyoruz. React Native ve Flutter ile çapraz platform çözümler sunuyoruz.",
    features: ["iOS & Android", "React Native / Flutter", "Offline Destek", "Push Bildirimler"],
  },
  {
    icon: "☁️",
    title: "Bulut Çözümleri",
    description:
      "AWS, Azure ve Google Cloud altyapılarında ölçeklenebilir ve güvenli bulut mimarileri kuruyoruz. DevOps süreçleri ile CI/CD pipeline'ları oluşturuyoruz.",
    features: ["AWS / Azure / GCP", "Mikro Servisler", "CI/CD Pipeline", "Otomatik Ölçekleme"],
  },
  {
    icon: "🔒",
    title: "Siber Güvenlik",
    description:
      "Sızma testleri, güvenlik denetimleri ve sürekli izleme hizmetleriyle dijital varlıklarınızı koruyoruz. KVKK ve GDPR uyumluluğu konusunda danışmanlık veriyoruz.",
    features: ["Sızma Testi", "Güvenlik Denetimi", "KVKK Uyumluluğu", "7/24 İzleme"],
  },
  {
    icon: "📊",
    title: "Veri Analitiği",
    description:
      "İşletme verilerinizi analiz ederek anlamlı içgörüler çıkarıyoruz. İnteraktif dashboardlar ve raporlama sistemleri oluşturuyoruz.",
    features: ["BI Dashboardları", "Gerçek Zamanlı Raporlama", "Veri Görselleştirme", "Tahminsel Analiz"],
  },
  {
    icon: "🤖",
    title: "Yapay Zeka & ML",
    description:
      "Makine öğrenimi ve yapay zeka teknolojileriyle iş süreçlerinizi otomatikleştiriyor ve rekabet avantajı sağlıyoruz.",
    features: ["NLP Çözümleri", "Görüntü İşleme", "Öneri Sistemleri", "Süreç Otomasyonu"],
  },
  {
    icon: "🎨",
    title: "UI/UX Tasarım",
    description:
      "Kullanıcı araştırmaları ve modern tasarım prensipleriyle etkileyici, kullanışlı arayüzler tasarlıyoruz.",
    features: ["Kullanıcı Araştırması", "Prototipleme", "Tasarım Sistemi", "Erişilebilirlik"],
  },
  {
    icon: "🛒",
    title: "E-Ticaret Çözümleri",
    description:
      "Yüksek dönüşüm oranına sahip e-ticaret platformları kuruyoruz. Ödeme entegrasyonları ve stok yönetimi dahil.",
    features: ["Özel E-Ticaret", "Ödeme Entegrasyonu", "Stok Yönetimi", "Mobil Uyumlu"],
  },
  {
    icon: "🔧",
    title: "Teknik Danışmanlık",
    description:
      "Dijital dönüşüm yolculuğunuzda doğru teknoloji seçimleri yapmanıza yardımcı oluyoruz.",
    features: ["Teknoloji Seçimi", "Mimari Tasarım", "Ekip Eğitimi", "Proje Yönetimi"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Hizmetlerimiz</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            İşletmenizin dijital ihtiyaçlarını karşılamak için kapsamlı ve yenilikçi
            teknoloji çözümleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">Projenizi Konuşalım</h2>
          <p className="mt-4 text-lg text-blue-100">
            İhtiyacınıza özel bir teklif almak için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Teklif Alın
          </Link>
        </div>
      </section>
    </>
  );
}

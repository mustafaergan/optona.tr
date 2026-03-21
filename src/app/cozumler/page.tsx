import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çözümler – Optona",
  description: "Optona'nın sunduğu iş çözümleri: ERP, CRM, IoT, e-ticaret ve daha fazlası.",
};

const solutions = [
  {
    icon: "🏢",
    title: "ERP Çözümleri",
    description:
      "İşletmenizin tüm süreçlerini tek bir platformda birleştiren kurumsal kaynak planlama sistemleri sunuyoruz. Finans, üretim, lojistik ve insan kaynakları modülleriyle tam entegrasyon sağlıyoruz.",
    features: ["Finans Yönetimi", "Üretim Planlama", "Tedarik Zinciri", "İnsan Kaynakları"],
  },
  {
    icon: "🤝",
    title: "CRM Çözümleri",
    description:
      "Müşteri ilişkilerinizi güçlendirin ve satış süreçlerinizi optimize edin. Müşteri verilerini merkezi bir yapıda toplayarak daha iyi kararlar alın ve müşteri memnuniyetini artırın.",
    features: ["Müşteri Takibi", "Satış Otomasyonu", "Pazarlama Entegrasyonu", "Raporlama & Analiz"],
  },
  {
    icon: "📡",
    title: "IoT Çözümleri",
    description:
      "Nesnelerin interneti teknolojisiyle işletme varlıklarınızı akıllı hale getirin. Gerçek zamanlı izleme, uzaktan yönetim ve öngörücü bakım imkânlarıyla verimliliği artırın.",
    features: ["Gerçek Zamanlı İzleme", "Uzaktan Yönetim", "Öngörücü Bakım", "Veri Toplama & Analiz"],
  },
  {
    icon: "🛒",
    title: "E-Ticaret Çözümleri",
    description:
      "Yüksek dönüşüm oranına sahip, ölçeklenebilir e-ticaret platformları kuruyoruz. Ödeme entegrasyonları, stok yönetimi ve müşteri deneyimi odaklı alışveriş sistemleri tasarlıyoruz.",
    features: ["Özel Mağaza Tasarımı", "Ödeme Entegrasyonu", "Stok Yönetimi", "Mobil Uyumlu"],
  },
  {
    icon: "📊",
    title: "İş Zekâsı & Analitik",
    description:
      "İşletme verilerinizi anlamlı içgörülere dönüştürün. İnteraktif dashboardlar, gerçek zamanlı raporlama ve tahminsel analiz araçlarıyla bilinçli kararlar alın.",
    features: ["BI Dashboardları", "Veri Görselleştirme", "Gerçek Zamanlı Raporlar", "Tahminsel Analiz"],
  },
  {
    icon: "🤖",
    title: "Süreç Otomasyonu",
    description:
      "Tekrarlayan iş süreçlerinizi yapay zeka ve otomasyon teknolojileriyle hızlandırın. RPA ve AI çözümleriyle insan hatalarını azaltın, verimliliği artırın.",
    features: ["RPA Uygulamaları", "AI Destekli İş Akışları", "Belge Yönetimi", "Entegrasyon Hizmetleri"],
  },
  {
    icon: "☁️",
    title: "Bulut Altyapı Çözümleri",
    description:
      "Hibrit ve tam bulut altyapıları kurarak işletmenizi her yerden erişilebilir ve ölçeklenebilir hale getiriyoruz. Güvenlik, yedekleme ve felaket kurtarma planları dahildir.",
    features: ["Hibrit Bulut", "Otomatik Yedekleme", "Felaket Kurtarma", "7/24 İzleme"],
  },
  {
    icon: "🔒",
    title: "Siber Güvenlik Çözümleri",
    description:
      "Dijital altyapınızı tehditlere karşı koruyoruz. Sızma testleri, güvenlik denetimleri ve sürekli izleme hizmetleriyle KVKK ve GDPR uyumluluğu sağlıyoruz.",
    features: ["Sızma Testi", "Güvenlik Denetimi", "KVKK Uyumluluğu", "Tehdit İstihbaratı"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Çözümlerimiz</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına özel, uçtan uca dijital çözümler sunuyoruz.
            ERP&apos;den CRM&apos;e, IoT&apos;den bulut altyapısına kadar her alanda yanınızdayız.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-4xl">{solution.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{solution.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{solution.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {solution.features.map((feature) => (
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

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">Çözümünüzü Birlikte Tasarlayalım</h2>
          <p className="mt-4 text-lg text-blue-100">
            İhtiyacınıza özel bir çözüm için uzmanlarımızla görüşün.
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Ücretsiz Danışmanlık Alın
          </Link>
        </div>
      </section>
    </>
  );
}
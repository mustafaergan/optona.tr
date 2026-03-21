import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sektörler – Optona",
  description: "Optona, farklı sektörlere yönelik yenilikçi çözümler sunar: Finans, Sağlık, Perakende, Lojistik.",
};

const industries = [
  {
    icon: "🏦",
    title: "Finans ve Bankacılık",
    description:
      "Dijital bankacılık, ödeme sistemleri ve finansal teknoloji çözümleri ile güvenli ve hızlı işlemler sağlayın.",
    features: ["Mobil Bankacılık", "Blockchain", "Siber Güvenlik", "Regülasyon Uyumu"],
  },
  {
    icon: "🛍️",
    title: "Perakende ve E-Ticaret",
    description:
      "Müşteri deneyimini kişiselleştirin, stok yönetimini optimize edin ve satış kanallarınızı birleştirin.",
    features: ["Omnichannel", "Kişiselleştirme", "Stok Yönetimi", "Sadakat Programları"],
  },
  {
    icon: "⚕️",
    title: "Sağlık ve Tıp",
    description:
      "Dijital sağlık hizmetleri, hasta verilerinin güvenli yönetimi ve tele-tıp çözümleri ile sağlık hizmetlerini dönüştürün.",
    features: ["Tele-Tıp", "Elektronik Sağlık Kaydı", "Randevu Yönetimi", "Veri Analitiği"],
  },
  {
    icon: "🚛",
    title: "Lojistik ve Taşımacılık",
    description:
      "Tedarik zincirinizi optimize edin, araç takibi yapın ve teslimat süreçlerinizi hızlandırın.",
    features: ["Rota Optimizasyonu", "Filo Yönetimi", "Depo Yönetimi", "Gerçek Zamanlı Takip"],
  },
  {
    icon: "🏭",
    title: "Üretim ve İmalat",
    description:
      "Akıllı fabrikalar, IoT sensörleri ve veri analitiği ile üretim süreçlerinizi verimli hale getirin.",
    features: ["Endüstri 4.0", "Tahminsel Bakım", "Kalite Kontrol", "Enerji Yönetimi"],
  },
  {
    icon: "🎓",
    title: "Eğitim Teknolojileri",
    description:
      "Uzaktan eğitim platformları, öğrenci yönetim sistemleri ve interaktif içerik çözümleri geliştirin.",
    features: ["LMS", "Sanal Sınıf", "Öğrenci Analitiği", "Mobil Öğrenme"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-teal-700 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Hizmet Verdiğimiz Sektörler</h1>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Her sektörün benzersiz ihtiyaçlarına uygun, özelleştirilmiş dijital dönüşüm çözümleri.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-4xl">{industry.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{industry.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{industry.description}</p>
                <ul className="mt-4 space-y-1.5">{industry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      {feature}
                    </li>
                  ))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">Sektörünüze Özel Çözümler</h2>
          <p className="mt-4 text-lg text-green-100">
            Sektörünüzdeki dijital fırsatları keşfetmek için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-green-700 font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            Detaylı Bilgi Alın
          </Link>
        </div>
      </section>
    </>
  );
}
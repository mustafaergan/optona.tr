import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çözümler – Optona",
  description: "Optona'nın sunduğu dijital çözümler: Kurumsal ERP, Dijital Dönüşüm, Büyük Veri Çözümleri.",
};

const solutions = [
  {
    icon: "🏢",
    title: "Kurumsal Kaynak Planlama (ERP)",
    description:
      "Tüm iş süreçlerinizi tek bir platformdan yönetin. Finans, IK, stok ve üretim yönetimi entegre olarak çalışır.",
    features: ["Tam Entegrasyon", "Gerçek Zamanlı Veri", "Mobil Erişim", "Özelleştirilebilir"],
  },
  {
    icon: "👥",
    title: "Müşteri İlişkileri (CRM)",
    description:
      "Müşteri verilerinizi yönetin, satış süreçlerinizi optimize edin ve müşteri memnuniyetini artırın.",
    features: ["Satış Hunisi", "Müşteri Analitiği", "Kampanya Yönetimi", "Otomasyon"],
  },
  {
    icon: "📡",
    title: "IoT ve Akıllı Cihazlar",
    description:
      "Nesnelerin interneti ile cihazlarınızı birbirine bağlayın, verimliliği artırın ve uzaktan yönetim sağlayın.",
    features: ["Sensör Verisi", "Uzaktan İzleme", "Tahminsel Bakım", "Endüstri 4.0"],
  },
  {
    icon: "💳",
    title: "Fintech Çözümleri",
    description:
      "Güvenli ödeme sistemleri, dijital cüzdanlar ve finansal raporlama araçları geliştiriyoruz.",
    features: ["PCI DSS Uyumu", "API Entegrasyonu", "Blockchain", "Yüksek Güvenlik"],
  },
  {
    icon: "🏥",
    title: "Sağlık Bilişimi",
    description:
      "Hastane yönetim sistemleri, tele-tıp uygulamaları ve sağlık verisi analitiği çözümleri.",
    features: ["HL7/FHIR Uyumu", "Randevu Sistemi", "Hasta Takibi", "Veri Gizliliği"],
  },
  {
    icon: "🏭",
    title: "Akıllı Üretim",
    description:
      "Üretim hattınızı dijitalleştirin, verimliliği artırın ve maliyetleri düşürün.",
    features: ["MES Sistemleri", "OEE Analizi", "Kalite Kontrol", "Stok Takibi"],
  },
];

export default function SolutionsPage() {
  return (
    <> 
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Çözümlerimiz</h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            Sektörünüze özel, iş süreçlerinizi hızlandıran ve verimliliği artıran
            akıllı çözümler.
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
                      <span className="text-indigo-600">✓</span>
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
      <section className="bg-indigo-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">Size Özel Çözümler</h2>
          <p className="mt-4 text-lg text-indigo-100">
            İşletmenizin ihtiyaçlarına en uygun çözümü birlikte tasarlayalım.
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-indigo-700 font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Hemen Başlayın
          </Link>
        </div>
      </section>
    </>
  );
}
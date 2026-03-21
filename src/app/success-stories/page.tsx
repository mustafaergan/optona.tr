import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri – Optona",
  description: "Optona müşterilerinin dijital dönüşüm yolculuklarını ve elde ettikleri sonuçları keşfedin.",
};

const caseStudies = [
  {
    icon: "🏦",
    sector: "Finans",
    company: "TurboFinans A.Ş.",
    title: "Dijital Bankacılık Platformu ile %40 Maliyet Tasarrufu",
    description:
      "Geleneksel banka şubesi süreçlerini dijital ortama taşıyarak operasyonel maliyetleri önemli ölçüde düşürdük. Mobil bankacılık uygulaması ile müşteri memnuniyeti zirveye ulaştı.",
    metrics: [
      { value: "%40", label: "Maliyet Azalması" },
      { value: "3×", label: "İşlem Hızı" },
      { value: "%92", label: "Müşteri Memnuniyeti" },
    ],
    tags: ["Fintech", "Mobil Uygulama", "CRM"],
  },
  {
    icon: "🛍️",
    sector: "Perakende",
    company: "MegaMart Perakende",
    title: "E-Ticaret Entegrasyonu ile Online Satışlarda %250 Artış",
    description:
      "Fiziksel mağazaları ile online kanalları entegre eden omni-channel bir platform kurarak müşteri deneyimini dönüştürdük. Stok yönetimi ve lojistik süreçleri otomatikleştirildi.",
    metrics: [
      { value: "%250", label: "Online Satış Artışı" },
      { value: "%65", label: "Daha Az İade" },
      { value: "2 Gün", label: "Teslimat Süresi" },
    ],
    tags: ["E-Ticaret", "ERP", "Lojistik"],
  },
  {
    icon: "🏥",
    sector: "Sağlık",
    company: "Hayat Hastanesi Grubu",
    title: "Hasta Yönetim Sistemi ile Randevu Sürecinde %70 İyileşme",
    description:
      "Kapsamlı bir hasta yönetim sistemi ve telemedicine platformu ile poliklinik doluluk oranını artırırken bekleme sürelerini dramatik biçimde düşürdük.",
    metrics: [
      { value: "%70", label: "Daha Az Bekleme Süresi" },
      { value: "%35", label: "Kapasite Artışı" },
      { value: "50K+", label: "Aylık Randevu" },
    ],
    tags: ["Sağlık IT", "Telemedicine", "Mobil"],
  },
  {
    icon: "🏭",
    sector: "Üretim",
    company: "ProTech Sanayi",
    title: "Akıllı Fabrika Dönüşümü ile Üretim Verimliliğinde %55 Artış",
    description:
      "IoT sensörler ve gerçek zamanlı izleme sistemleri entegre ederek üretim hatlarını akıllı fabrika standartlarına taşıdık. Öngörücü bakım ile duruş süreleri minimuma indi.",
    metrics: [
      { value: "%55", label: "Verimlilik Artışı" },
      { value: "%80", label: "Daha Az Duruş" },
      { value: "%30", label: "Bakım Maliyeti Azaldı" },
    ],
    tags: ["IoT", "MES", "Yapay Zeka"],
  },
  {
    icon: "🚛",
    sector: "Lojistik",
    company: "HızlıKargo Lojistik",
    title: "Rota Optimizasyonu ile Yakıt Maliyetlerinde %28 Tasarruf",
    description:
      "Yapay zeka destekli rota optimizasyon ve filo yönetim sistemi sayesinde teslimat sürelerini kısalttık, yakıt tüketimini düşürdük ve müşteri memnuniyetini artırdık.",
    metrics: [
      { value: "%28", label: "Yakıt Tasarrufu" },
      { value: "%45", label: "Daha Hızlı Teslimat" },
      { value: "200+", label: "Araç Filosu" },
    ],
    tags: ["Filo Yönetimi", "AI", "Rota Optimizasyonu"],
  },
  {
    icon: "🎓",
    sector: "Eğitim",
    company: "AkademiPlus Eğitim",
    title: "LMS Platformu ile 10.000+ Öğrenciye Uzaktan Eğitim",
    description:
      "Kurumsal eğitim ihtiyaçlarını karşılamak üzere tasarlanan LMS platformu, canlı ders, ödev ve sertifika yönetimi ile tam kapsamlı bir eğitim ekosistemi sunuyor.",
    metrics: [
      { value: "10K+", label: "Aktif Öğrenci" },
      { value: "500+", label: "Online Kurs" },
      { value: "%95", label: "Tamamlanma Oranı" },
    ],
    tags: ["EdTech", "LMS", "Mobil Öğrenme"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Başarı Hikayeleri</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Müşterilerimizin dijital dönüşüm yolculuklarını ve Optona&apos;nın sağladığı
            somut iş sonuçlarını keşfedin.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{cs.icon}</span>
                    <span className="rounded-full bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1">
                      {cs.sector}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">{cs.company}</p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">{cs.title}</h3>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed">{cs.description}</p>

                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {cs.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl bg-blue-50 p-3 text-center">
                        <div className="text-2xl font-extrabold text-blue-700">{metric.value}</div>
                        <div className="mt-0.5 text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Rakamlarla Optona</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Her projede ölçülebilir sonuçlar hedefliyoruz ve müşterilerimizin başarısını kendi başarımız olarak görüyoruz.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "100+", label: "Başarılı Proje" },
              { value: "50+", label: "Mutlu Müşteri" },
              { value: "%98", label: "Müşteri Memnuniyeti" },
              { value: "10+", label: "Yıllık Deneyim" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-4xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">Siz de Başarı Hikayenizi Yazın</h2>
          <p className="mt-4 text-lg text-blue-100">
            Projenizi hayata geçirmek ve ölçülebilir sonuçlar elde etmek için bizimle iletişime geçin.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Projenizi Konuşalım
          </Link>
        </div>
      </section>
    </>
  );
}


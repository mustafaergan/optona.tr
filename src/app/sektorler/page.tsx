import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sektörler – Optona",
  description: "Optona olarak finans, perakende, sağlık, üretim ve daha pek çok sektöre özel dijital çözümler sunuyoruz.",
};

const industries = [
  {
    icon: "🏦",
    title: "Finans & Bankacılık",
    description:
      "Fintech uygulamaları, güvenli ödeme sistemleri ve dijital bankacılık çözümleri ile finansal kurumların dönüşümünü hızlandırıyoruz. BDDK ve PCI DSS uyumluluğu konusunda rehberlik ediyoruz.",
    solutions: ["Dijital Bankacılık", "Ödeme Sistemleri", "Risk Yönetimi", "Dolandırıcılık Tespiti"],
  },
  {
    icon: "🛍️",
    title: "Perakende & E-Ticaret",
    description:
      "Omni-channel perakende stratejileri, kişiselleştirilmiş müşteri deneyimleri ve gelişmiş stok yönetimi ile perakende işletmelerinin rekabet gücünü artırıyoruz.",
    solutions: ["E-Ticaret Platformları", "Stok & Lojistik", "Müşteri Sadakat Programları", "POS Entegrasyonu"],
  },
  {
    icon: "🏥",
    title: "Sağlık & Hastane",
    description:
      "Hasta yönetim sistemleri, telemedicine uygulamaları ve sağlık veri analitiği ile sağlık kuruluşlarının verimliliğini ve hasta memnuniyetini artırıyoruz.",
    solutions: ["Hasta Yönetim Sistemi", "Telemedicine", "Tıbbi Görüntüleme", "KVKK Uyumlu Veri Yönetimi"],
  },
  {
    icon: "🏭",
    title: "Üretim & Sanayi",
    description:
      "Akıllı fabrika çözümleri, üretim süreç optimizasyonu ve kalite kontrol sistemleriyle üretim sektörünün verimliliğini ve rekabet gücünü artırıyoruz.",
    solutions: ["MES Sistemleri", "Kalite Kontrol", "Bakım Yönetimi", "Tedarik Zinciri Optimizasyonu"],
  },
  {
    icon: "🚛",
    title: "Lojistik & Taşımacılık",
    description:
      "Filo yönetimi, rota optimizasyonu ve gerçek zamanlı takip sistemleriyle lojistik operasyonlarınızı daha verimli ve maliyet etkin hale getiriyoruz.",
    solutions: ["Filo Yönetimi", "Rota Optimizasyonu", "Depo Yönetimi", "Müşteri Takip Portalı"],
  },
  {
    icon: "🎓",
    title: "Eğitim & EdTech",
    description:
      "Uzaktan eğitim platformları, öğrenme yönetim sistemleri ve eğitimde yapay zeka çözümleriyle eğitim kurumlarının dijital dönüşümüne öncülük ediyoruz.",
    solutions: ["LMS Platformları", "Canlı Ders Sistemleri", "Öğrenci Bilgi Sistemi", "Sertifika Yönetimi"],
  },
  {
    icon: "🏗️",
    title: "İnşaat & Gayrimenkul",
    description:
      "Proje yönetim yazılımları, BIM entegrasyonu ve gayrimenkul portalleri ile inşaat ve gayrimenkul sektöründe verimliliği ve şeffaflığı artırıyoruz.",
    solutions: ["Proje Yönetimi", "BIM Entegrasyonu", "Müşteri Portali", "Sözleşme Yönetimi"],
  },
  {
    icon: "⚡",
    title: "Enerji & Altyapı",
    description:
      "Akıllı şebeke yönetimi, enerji izleme sistemleri ve tüketim analitiği ile enerji sektörü için sürdürülebilir ve verimli dijital çözümler üretiyoruz.",
    solutions: ["Şebeke İzleme", "Enerji Tüketim Analizi", "Arıza Yönetimi", "Yenilenebilir Enerji Entegrasyonu"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Sektörler</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Her sektörün kendine özgü dinamiklerini anlıyor, sektöre özel çözümler üretiyoruz.
            Finans&apos;tan sağlığa, perakendeden üretime kadar geniş bir sektör yelpazesinde hizmet veriyoruz.
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
                <ul className="mt-4 space-y-1.5">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-600">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Sektördeki İzimiz</h2>
          <p className="mt-4 text-gray-500 text-center max-w-xl mx-auto">
            Yıllar içinde farklı sektörlerde edindiğimiz deneyim ve tamamladığımız projelerle sektörde güvenilir bir ortak haline geldik.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "8+", label: "Farklı Sektör" },
              { value: "100+", label: "Tamamlanan Proje" },
              { value: "50+", label: "Kurumsal Müşteri" },
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
          <h2 className="text-3xl font-extrabold">Sektörünüze Özel Çözüm Keşfedin</h2>
          <p className="mt-4 text-lg text-blue-100">
            Sektörünüze en uygun dijital stratejiyi birlikte belirleyelim.
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Uzmanla Görüş
          </Link>
        </div>
      </section>
    </>
  );
}

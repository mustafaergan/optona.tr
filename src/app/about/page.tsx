import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda – Optona",
  description: "Optona hakkında bilgi edinin: Vizyonumuz, misyonumuz ve ekibimiz.",
};

const values = [
  {
    icon: "🚀",
    title: "Yenilikçilik",
    description: "Sürekli gelişen teknoloji dünyasında en güncel çözümleri takip eder ve uygularız.",
  },
  {
    icon: "🤝",
    title: "Güvenilirlik",
    description: "Müşterilerimizle uzun vadeli ilişkiler kurar, söz verdiğimizi yaparız.",
  },
  {
    icon: "⭐",
    title: "Kalite",
    description: "Her projede en yüksek kalite standartlarını uygular, mükemmeliyeti hedefleriz.",
  },
  {
    icon: "💡",
    title: "Şeffaflık",
    description: "Süreçlerimizi açık tutar, müşterilerimizi her adımda bilgilendiririz.",
  },
];

const team = [
  {
    name: "Ahmet Yılmaz",
    role: "Kurucu & CEO",
    bio: "10+ yıllık yazılım geliştirme deneyimi",
    initial: "AY",
  },
  {
    name: "Zeynep Kaya",
    role: "CTO",
    bio: "Bulut mimarisi ve DevOps uzmanı",
    initial: "ZK",
  },
  {
    name: "Mehmet Demir",
    role: "Baş Tasarımcı",
    bio: "UI/UX ve marka kimliği uzmanı",
    initial: "MD",
  },
  {
    name: "Ayşe Şahin",
    role: "Ürün Müdürü",
    bio: "Agile ve scrum sertifikalı PM",
    initial: "AŞ",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Hakkımızda</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Optona olarak 2014&apos;ten bu yana işletmelerin dijital dönüşümüne öncülük ediyoruz.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Hikayemiz</h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Optona, 2014 yılında Türkiye&apos;deki işletmelerin dijital dünyadaki ihtiyaçlarına
                çözüm üretmek amacıyla kuruldu. Küçük bir ekiple başlayan yolculuğumuz,
                bugün 30&apos;dan fazla uzman profesyonelden oluşan güçlü bir yapıya ulaştı.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Müşteri memnuniyetini her şeyin üzerinde tutan bir yaklaşımla, yüzlerce
                projeyi başarıyla tamamladık. Her projeyi büyük bir özenle ele alır,
                müşterilerimizin hedeflerine ulaşmalarını sağlarız.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Bugün Türkiye&apos;nin dört bir yanından ve uluslararası arenadan müşterilere
                hizmet veriyor, onların dijital başarılarının ortağı oluyoruz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-4xl font-extrabold text-blue-700">2014</div>
                <div className="mt-1 text-sm text-gray-500">Kuruluş Yılı</div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-4xl font-extrabold text-blue-700">30+</div>
                <div className="mt-1 text-sm text-gray-500">Uzman Ekip</div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-4xl font-extrabold text-blue-700">100+</div>
                <div className="mt-1 text-sm text-gray-500">Tamamlanan Proje</div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-4xl font-extrabold text-blue-700">50+</div>
                <div className="mt-1 text-sm text-gray-500">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="text-3xl">🎯</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Misyonumuz</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                İşletmelerin dijital dönüşüm yolculuğunda güvenilir bir ortak olmak ve
                yenilikçi teknoloji çözümleriyle onların büyümesine katkı sağlamak.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="text-3xl">🌟</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Vizyonumuz</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Türkiye&apos;nin en iyi dijital dönüşüm şirketi olmak ve küresel ölçekte
                rekabetçi teknoloji çözümleri üreterek dünya sahnesinde Türkiye&apos;yi
                temsil etmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Değerlerimiz</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-5xl">{value.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Ekibimiz</h2>
          <p className="mt-4 text-gray-500 text-center max-w-xl mx-auto">
            Deneyimli ve tutkulu profesyonellerden oluşan ekibimiz sizin için çalışıyor.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                  {member.initial}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">Birlikte Çalışalım</h2>
          <p className="mt-4 text-lg text-blue-100">
            Projenizi hayata geçirmek için hazır mısınız?
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  );
}


import type {
  CaseStudyItem,
  ContactInfoItem,
  FeatureCardItem,
  IndustryItem,
  NavLink,
  StatItem,
  TeamMember,
  ValueItem,
} from "@/types/site";

export const navLinks: NavLink[] = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/services", label: "Hizmetler" },
  { href: "/solutions", label: "Çözümler" },
  { href: "/industries", label: "Sektörler" },
  { href: "/success-stories", label: "Başarı Hikayeleri" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

export const footerLinks: NavLink[] = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/services", label: "Hizmetler" },
  { href: "/solutions", label: "Çözümler" },
  { href: "/industries", label: "Sektörler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

export const homeServices = [
  {
    icon: "💻",
    title: "Web Geliştirme",
    description:
      "Modern, hızlı ve responsive web siteleri ile web uygulamaları geliştiriyoruz.",
  },
  {
    icon: "📱",
    title: "Mobil Uygulama",
    description:
      "iOS ve Android platformları için kullanıcı dostu mobil uygulamalar tasarlıyoruz.",
  },
  {
    icon: "☁️",
    title: "Bulut Çözümleri",
    description:
      "İşletmenizin ihtiyaçlarına uygun güvenli ve ölçeklenebilir bulut altyapısı kuruyoruz.",
  },
  {
    icon: "🔒",
    title: "Siber Güvenlik",
    description:
      "Dijital varlıklarınızı korumak için kapsamlı siber güvenlik hizmetleri sunuyoruz.",
  },
  {
    icon: "📊",
    title: "Veri Analitiği",
    description:
      "Verilerinizi değerli içgörülere dönüştürerek iş kararlarınızı güçlendiriyoruz.",
  },
  {
    icon: "🤖",
    title: "Yapay Zeka",
    description:
      "İş süreçlerinizi otomatikleştirmek için yapay zeka çözümleri geliştiriyoruz.",
  },
];

export const homeStats: StatItem[] = [
  { value: "100+", label: "Tamamlanan Proje" },
  { value: "50+", label: "Mutlu Müşteri" },
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "24/7", label: "Teknik Destek" },
];

export const services: FeatureCardItem[] = [
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

export const solutions: FeatureCardItem[] = [
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

export const industries: IndustryItem[] = [
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

export const industryStats: StatItem[] = [
  { value: "8+", label: "Farklı Sektör" },
  { value: "100+", label: "Tamamlanan Proje" },
  { value: "50+", label: "Kurumsal Müşteri" },
  { value: "10+", label: "Yıllık Deneyim" },
];

export const caseStudies: CaseStudyItem[] = [
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

export const caseStudyStats: StatItem[] = [
  { value: "100+", label: "Başarılı Proje" },
  { value: "50+", label: "Mutlu Müşteri" },
  { value: "%98", label: "Müşteri Memnuniyeti" },
  { value: "10+", label: "Yıllık Deneyim" },
];

export const aboutValues: ValueItem[] = [
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

export const teamMembers: TeamMember[] = [
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

export const aboutStats: StatItem[] = [
  { value: "2014", label: "Kuruluş Yılı" },
  { value: "30+", label: "Uzman Ekip" },
  { value: "100+", label: "Tamamlanan Proje" },
  { value: "50+", label: "Mutlu Müşteri" },
];

export const contactInfo: ContactInfoItem[] = [
  { icon: "📧", label: "E-posta", value: "info@optona.tr", href: "mailto:info@optona.tr" },
  { icon: "📍", label: "Adres", value: "İstanbul, Türkiye", href: null },
  { icon: "🕐", label: "Çalışma Saatleri", value: "Pzt-Cum: 09:00-18:00", href: null },
];


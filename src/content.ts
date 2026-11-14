export type Lang = "tr" | "en";

export const EMAIL = "info@optona.tr";

const tr = {
  meta: {
    title: "Optona | Şirketler için yapay zekâ ajanları ve otomasyon",
    description:
      "Tekrar eden işleri sistemlerinize bağlı yapay zekâ ajanlarına devrediyoruz. Belge okuma, e-posta, teklif ve destek. İlk çalışan sürüm çok kısa sürede.",
  },
  nav: { work: "Ne yapıyoruz", process: "Süreç", cta: "Görüşme ayarla", switch: "EN", switchHref: "/en/" },
  hero: {
    eyebrow: "Optona · Yapay zekâ",
    h1a: "Şirketler için",
    h1b: "yapay zekâ ajanları",
    lead: "E-posta, belge, teklif ve destek gibi tekrar eden işleri, kullandığınız sistemlere bağlı yapay zekâ ajanlarına devrediyoruz.",
    fact: "İlk çalışan sürüm çok kısa sürede.",
    primary: "Görüşme ayarla",
    secondary: "İşleri gör",
  },
  demo: {
    title: "fatura-ajanı",
    inbox: "Gelen kutusu",
    live: "canlı",
    pause: "Durdur",
    play: "Oynat",
    items: [
      {
        name: "Fatura 2417.pdf",
        tag: "PDF",
        steps: [
          "Belge okundu: 2 sayfa",
          "Tutar 48.250,00 TL · KDV %20",
          "Cari hesap eşleşti",
          "Muhasebe sistemine işlendi",
        ],
        done: "Onay için finans ekibine gitti",
      },
      {
        name: "Teklif talebi",
        tag: "E-posta",
        steps: [
          "Talep okundu: 3 ürün, 120 adet",
          "Fiyat listesi ve stok kontrol edildi",
          "Teklif taslağı hazırlandı",
          "Satış temsilcisine iletildi",
        ],
        done: "Gönderilmeye hazır",
      },
      {
        name: "Siparişim nerede?",
        tag: "Destek",
        steps: [
          "Müşteri ve sipariş bulundu",
          "Kargo durumu sorgulandı",
          "Yanıt yazıldı",
          "Destek kaydı kapatıldı",
        ],
        done: "Müşteri yanıtı gönderildi",
      },
    ],
  },
  work: {
    h2: "Ne yapıyoruz",
    lead: "Tek bir işten başlıyoruz. Çalıştığını gördüğünüzde bir sonrakine geçiyoruz.",
    cards: [
      {
        k: "01",
        title: "İş akışını ajana devrediyoruz",
        body: "Gelen talebi okur, sistemlerinizde işlem yapar, gerekirse onay ister.",
      },
      {
        k: "02",
        title: "Belgelerden veri çıkarıyoruz",
        body: "Fatura, sözleşme, form ve tarama belgeler saniyeler içinde yapılandırılmış veriye döner.",
      },
      {
        k: "03",
        title: "Şirket bilginizle konuşan asistan",
        body: "Dokümanlarınızı, prosedürlerinizi ve geçmiş kayıtlarınızı bilen, kaynak gösteren bir asistan.",
      },
      {
        k: "04",
        title: "Yazılımınıza yapay zekâ ekliyoruz",
        body: "Mevcut ürününüze veya iç araçlarınıza özetleme, sınıflandırma ve arama ekliyoruz.",
      },
    ],
  },
  process: {
    h2: "Görüşmeden canlıya üç adım",
    steps: [
      { n: "1", t: "30 dakikalık görüşme", b: "En çok zaman alan işi birlikte seçiyoruz." },
      { n: "2", t: "Kısa sürede prototip", b: "Kendi verinizle çalışan ilk sürümü gösteriyoruz." },
      { n: "3", t: "Canlıya alma", b: "Sistemlerinize bağlıyor, sonuçları birlikte ölçüyoruz." },
    ],
    stackLabel: "Modeller ve altyapı",
    stack: ["Claude", "GPT", "Gemini", "Açık kaynak modeller", "Kendi sunucunuz veya bulutunuz"],
    privacy: "Verileriniz model eğitimine gitmez. İsterseniz her şey kendi sunucunuzda çalışır.",
  },
  close: {
    h2a: "Bir işi anlatın.",
    h2b: "Çok kısa bir süre içinde elinizde.",
    cta: "E-posta gönder",
    form: {
      name: "Ad soyad",
      email: "E-posta",
      phone: "Telefon",
      contactNote: "E-posta veya telefondan en az birini yazın.",
      company: "Şirket",
      optional: "isteğe bağlı",
      message: "Hangi işi devretmek istiyorsunuz?",
      messageHint: "Örnek: Her gün gelen 40 faturayı elle muhasebeye giriyoruz.",
      submit: "Talebi gönder",
      sending: "Gönderiliyor…",
      sent: "Talebiniz bize ulaştı. En kısa sürede size e-postayla dönüyoruz.",
      again: "Yeni talep yaz",
      fail: "Talebiniz gönderilemedi. Lütfen info@optona.tr adresine yazın.",
    },
    legal: "Tüm hakları saklıdır.",
    country: "Türkiye",
  },
  skip: "İçeriğe geç",
};

export type Dict = typeof tr;

const en: Dict = {
  meta: {
    title: "Optona | AI agents and automation for companies",
    description:
      "We hand repetitive work to AI agents connected to your systems: documents, email, quotes and support. First working version in a very short time.",
  },
  nav: { work: "What we do", process: "Process", cta: "Book a call", switch: "TR", switchHref: "/" },
  hero: {
    eyebrow: "Optona · AI",
    h1a: "AI agents",
    h1b: "for companies",
    lead: "We hand repetitive work like email, documents, quotes and support to AI agents connected to the systems you already use.",
    fact: "First working version in a very short time.",
    primary: "Book a call",
    secondary: "See the work",
  },
  demo: {
    title: "invoice-agent",
    inbox: "Inbox",
    live: "live",
    pause: "Pause",
    play: "Play",
    items: [
      {
        name: "Invoice 2417.pdf",
        tag: "PDF",
        steps: [
          "Document read: 2 pages",
          "Total 48,250.00 TRY · VAT 20%",
          "Matched to supplier account",
          "Posted to accounting",
        ],
        done: "Sent to finance for approval",
      },
      {
        name: "Quote request",
        tag: "Email",
        steps: [
          "Request read: 3 products, 120 units",
          "Price list and stock checked",
          "Quote drafted",
          "Forwarded to sales",
        ],
        done: "Ready to send",
      },
      {
        name: "Where is my order?",
        tag: "Support",
        steps: [
          "Customer and order found",
          "Shipping status checked",
          "Reply written",
          "Ticket closed",
        ],
        done: "Customer reply sent",
      },
    ],
  },
  work: {
    h2: "What we do",
    lead: "We start with one task. Once you see it working, we move to the next.",
    cards: [
      {
        k: "01",
        title: "Hand workflows to agents",
        body: "Reads the request, acts in your systems and asks for approval when needed.",
      },
      {
        k: "02",
        title: "Pull data from documents",
        body: "Invoices, contracts, forms and scans become structured data in seconds.",
      },
      {
        k: "03",
        title: "An assistant that knows your company",
        body: "Knows your documents, procedures and records, and cites its sources.",
      },
      {
        k: "04",
        title: "Add AI to your software",
        body: "Summaries, classification and search inside your product or internal tools.",
      },
    ],
  },
  process: {
    h2: "Three steps from call to live",
    steps: [
      { n: "1", t: "A 30-minute call", b: "We pick the task that takes the most time." },
      { n: "2", t: "Prototype in a short time", b: "A first version running on your own data." },
      { n: "3", t: "Go live", b: "Connected to your systems, results measured together." },
    ],
    stackLabel: "Models and infrastructure",
    stack: ["Claude", "GPT", "Gemini", "Open-source models", "Your own server or cloud"],
    privacy: "Your data is never used to train models. If you prefer, everything runs on your own server.",
  },
  close: {
    h2a: "Tell us about one task.",
    h2b: "Have it working in no time.",
    cta: "Send an email",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      contactNote: "Leave at least an email address or a phone number.",
      company: "Company",
      optional: "optional",
      message: "Which task do you want to hand off?",
      messageHint: "Example: we enter 40 invoices into accounting by hand every day.",
      submit: "Send request",
      sending: "Sending…",
      sent: "Your request is in. We will reply by email shortly.",
      again: "Write a new request",
      fail: "Your request could not be sent. Please email info@optona.tr.",
    },
    legal: "All rights reserved.",
    country: "Türkiye",
  },
  skip: "Skip to content",
};

export const dict: Record<Lang, Dict> = { tr, en };

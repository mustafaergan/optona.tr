"use client";

import { useState } from "react";

const contactInfo = [
  { icon: "📧", label: "E-posta", value: "info@optona.tr", href: "mailto:info@optona.tr" },
  { icon: "📍", label: "Adres", value: "İstanbul, Türkiye", href: null },
  { icon: "🕐", label: "Çalışma Saatleri", value: "Pzt–Cum: 09:00–18:00", href: null },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">İletişim</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Projenizi konuşmak için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Bize Ulaşın</h2>
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 text-gray-900 hover:text-blue-700 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-gray-900">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white">
                <div className="text-2xl">💬</div>
                <h3 className="mt-3 text-lg font-bold">Hızlı Yanıt</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Sorularınıza genellikle 24 saat içinde yanıt veriyoruz.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-5xl">✅</div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      Mesajınız Alındı!
                    </h3>
                    <p className="mt-2 text-gray-500">
                      En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-6 rounded-xl bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition-colors"
                    >
                      Yeni Mesaj Gönder
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Ad Soyad <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-posta <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="ornek@sirket.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Konu <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Konu Seçin</option>
                          <option value="web">Web Geliştirme</option>
                          <option value="mobile">Mobil Uygulama</option>
                          <option value="cloud">Bulut Çözümleri</option>
                          <option value="security">Siber Güvenlik</option>
                          <option value="ai">Yapay Zeka & ML</option>
                          <option value="other">Diğer</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mesaj <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                        placeholder="Projeniz hakkında bize bilgi verin..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-blue-700 px-6 py-3.5 text-white font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

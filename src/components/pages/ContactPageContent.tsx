"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPageContent() {
  const { dictionary } = useLanguage();
  const contact = dictionary.contactPage;

  const [formData, setFormData] = useState<ContactFormState>(initialForm);
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(initialForm);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{contact.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{contact.hero.description}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">{contact.infoTitle}</h2>
              {contact.infoItems.map((info) => (
                <div key={`${info.label}-${info.value}`} className="flex items-start gap-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a href={info.href} className="mt-1 text-gray-900 transition-colors hover:text-blue-700">
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
                <h3 className="mt-3 text-lg font-bold">{contact.quickReply.title}</h3>
                <p className="mt-2 text-sm text-blue-100">{contact.quickReply.description}</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="text-5xl">✅</div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">{contact.success.title}</h3>
                    <p className="mt-2 text-gray-500">{contact.success.description}</p>
                    <button
                      onClick={handleReset}
                      className="mt-6 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
                    >
                      {contact.success.button}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                          {contact.form.name} <span className="text-red-500">{contact.form.required}</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder={contact.form.placeholders.name}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                          {contact.form.email} <span className="text-red-500">{contact.form.required}</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder={contact.form.placeholders.email}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                          {contact.form.phone}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder={contact.form.placeholders.phone}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                          {contact.form.subject} <span className="text-red-500">{contact.form.required}</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          {contact.form.subjectOptions.map((option) => (
                            <option key={`${option.value}-${option.label}`} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                        {contact.form.message} <span className="text-red-500">{contact.form.required}</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder={contact.form.placeholders.message}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-blue-700 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? contact.form.submitting : contact.form.submit}
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

"use client";

import { useLanguage, type Language } from "@/components/providers/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage, dictionary } = useLanguage();

  return (
    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
      <span className="font-medium">{dictionary.common.languageLabel}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
        aria-label={dictionary.common.languageLabel}
      >
        <option value="tr">{dictionary.common.languages.tr}</option>
        <option value="en">{dictionary.common.languages.en}</option>
        <option value="de">{dictionary.common.languages.de}</option>
      </select>
    </label>
  );
}
